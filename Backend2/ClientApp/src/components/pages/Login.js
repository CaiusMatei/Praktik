import React, { Component } from "react";
import axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginMessage: "",
    };
  }

  handleLogin = async (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await axios.post("/auth/login", {
        email: username,
        password: password
      });

      if (!response.status === 200) {
        throw new Error(response.data.message || 'Login failed');
      }

      // Assuming your backend returns a JWT token upon successful login
      localStorage.setItem('token', response.data.jwt); // Store the token in localStorage
      this.setState({ loginMessage: "Login successful!" });
      this.props.history.push("/dashboard"); // Redirect to the dashboard on successful login
    } catch (error) {
      this.setState({ loginMessage: error.message || "Login failed" });
    }
  };

  handleForgotPassword = (event) => {
    event.preventDefault();
    const forgotPasswordModal = document.getElementById(
      "forgot-password-modal"
    );
    forgotPasswordModal.style.display = "block";
  };

  handleCloseModal = () => {
    const forgotPasswordModal = document.getElementById(
      "forgot-password-modal"
    );
    forgotPasswordModal.style.display = "none";
  };

  render() {
    return (
      <div className="d-flex flex-row gap-4 items-center justify-between flex-grow w-100">
        {/* <div className="relative">
          <div
            className="loginpicture-container rounded-md shadow-md bg-cover bg-fixed bg-center transition duration-300 ease-in-out hover:filter hover:blur-md"
            style={{ backgroundImage: `url("../loginpagepicture.jpg")` }}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-semibold opacity-0 transition-opacity duration-300 hover:opacity-100">
              Välkomen till Chas Academy
            </span>
          </div>
        </div> */}
        <img
          className="loginphoto"
          src="../bild_login_vyn-removebg-preview.png"
          alt="Chas Academy Logo"
        />
        <form className="flex flex-col flex-grow" onSubmit={this.handleLogin}>
          <p className="text-2xl font-semibold mb-4">Login</p>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">
              <i className="fas fa-user"></i> Username:
            </label>
            <input type="text" id="username" name="username" className="w-full border-b border-gray-300 focus:border-blue-500 outline-none" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
              <i className="fas fa-lock"></i> Password:
            </label>
            <input type="password" id="password" name="password" className="w-full border-b border-gray-300 focus:border-blue-500 outline-none" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Login</button>
          <p>
            <button className="no-underline text-blue-500 cursor-pointer" href="#" onClick={this.handleForgotPassword}>
              Forgot Password?
            </button>
          </p>
          <p id="login-message" className="text-red-500 mt-2">{this.state.loginMessage}</p>
        </form>

        {/* Forgot Password Modal */}
        <div id="forgot-password-modal" className="modal hidden hover:bg-opacity-50 hover:bg-black" onClick={this.handleCloseModal}>
          <div className="modal-content p-4 w-50">
            <span className="close cursor-pointer" onClick={this.handleCloseModal}>
              &times;
            </span>
            <h2>Forgot Password</h2>
            <p>Enter your email address to receive a password reset link:</p>
            <input
              type="email"
              id="forgot-email"
              placeholder="Enter your email"
              required
              className="mb-2 w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
            <button id="reset-password-btn" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Reset Password</button>
          </div>
        </div>
      </div>
    );
  }
}
