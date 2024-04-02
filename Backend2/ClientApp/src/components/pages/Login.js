import React, { Component } from "react";
import { } from "react-router-dom";

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

    let domain = 'https://localhost';
    let port = 7009;
    let url = `${domain}:${port}/auth/login`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: username, password: password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const data = await response.json();
      // Assuming your backend returns a JWT token upon successful login
      localStorage.setItem('token', data.jwt); // Store the token in localStorage
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
      <div class="flex flex-row gap-4 items-center flex-grow">
        <div class="relative">
          <img
            class="loginpicture rounded-md shadow-md"
            src="../loginpagepicture.jpg"
            alt="Chas Academy Logo"
          />
          <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-semibold opacity-0 transition-opacity duration-300">
            Välkomen till Chas Academy
          </span>
        </div>
        <div class="w-96">
          <img
            class="loginphoto"
            src="../bild_login_vyn-removebg-preview.png"
            alt="Chas Academy Logo"
          />
          <h2 class="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={this.handleLogin}>
            <div class="mb-4">
              <label htmlFor="username" class="block mb-1">
                <i class="fas fa-user"></i> Username:
              </label>
              <input type="text" id="username" name="username" class="w-full border-b border-gray-300 focus:border-blue-500 outline-none" required />
            </div>
            <div class="mb-4">
              <label htmlFor="password" class="block mb-1">
                <i class="fas fa-lock"></i> Password:
              </label>
              <input type="password" id="password" name="password" class="w-full border-b border-gray-300 focus:border-blue-500 outline-none" required />
            </div>
            <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Login</button>
            <p>
              <a class="no-underline text-blue-500 cursor-pointer" href="#" onClick={this.handleForgotPassword}>
                Forgot Password?
              </a>
            </p>
          </form>
          <p id="login-message" class="text-red-500 mt-2">{this.state.loginMessage}</p>
        </div>

        {/* Forgot Password Modal */}
        <div id="forgot-password-modal" class="modal hidden">
          <div class="modal-content">
            <span class="close cursor-pointer" onClick={this.handleCloseModal}>
              &times;
            </span>
            <h2>Forgot Password</h2>
            <p>Enter your email address to receive a password reset link:</p>
            <input
              type="email"
              id="forgot-email"
              placeholder="Enter your email"
              required
              class="mb-2 w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
            <button id="reset-password-btn" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Reset Password</button>
          </div>
        </div>
      </div>
    );
  }
}
