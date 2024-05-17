import React, { Component } from "react";
import axios from "axios";
import ChasLogo from '../ChasLogo';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: "",
      errorMessage: "",
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
      this.setState({ successMessage: "Login successful!", errorMessage: "" });
      window.location.href = "/users"; // Redirect to the dashboard on successful login
    } catch (error) {
      this.setState({ errorMessage: error.message || "Login failed", successMessage: "" });
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
      <div className="bg-inherit flex flex-col sm:flex-row gap-4 items-center justify-between px-2 text-black">
        <ChasLogo />

        <div className="flex">
          <div
            className="rounded-md shadow-md bg-cover bg-fixed bg-center transition duration-300 ease-in-out hover:filter hover:blur-md"
            style={{ backgroundImage: `url("../loginpagepicture.jpg")` }}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-semibold opacity-0 transition-opacity duration-300 hover:opacity-100">
              Välkomen till Chas Academy
            </span>
          </div>
        </div>

        <form className="flex flex-col flex-grow w-72 sm:w-96 p-4 rounded-md bg-gray-50 shadow-md" onSubmit={this.handleLogin}>
          <p className="text-2xl font-semibold mb-4 text-center">Logga In</p>
          <div class="relative mb-4 z-0">
            <input type="text" id="username" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black
            appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

            <label for="username" class="absolute text-sm text-gray-700 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10
            origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"><i className="fas fa-user text-black"></i> Användarnamn</label>

            <p id="username_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400">{this.state.successMessage}</p>
            <p id="username_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{this.state.errorMessage}</p>
          </div>
          <div class="relative mb-4 z-0">
            <input type="text" id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black
            appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />

            <label for="password" class="absolute text-sm text-gray-700 dark:text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10
            origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
            peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"><i className="fas fa-lock text-black"></i> Lösenord</label>


            <p id="password_success_help" class="mt-2 text-xs text-green-600 dark:text-green-400">{this.state.successMessage}</p>
            <p id="password_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">{this.state.errorMessage}</p>
          </div>
          <button type="submit" className="w-32 sm:w-64 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">Login</button>
          <p className="text-right pt-2">
            <button className="text-gray-500 cursor-pointer hover:border-b-2 border-color-gray-700" href="#" onClick={this.handleForgotPassword}>
              Forgot Password?
            </button>
          </p>
        </form>

        {/* Forgot Password Modal */}
        <div id="forgot-password-modal" className="modal hidden hover:bg-opacity-10 hover:bg-black">
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
export default Login;
