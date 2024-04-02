import React, { Component } from "react";
import { } from "react-router-dom";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginMessage: "",
    };
  }

  handleLogin = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "123") {
      this.setState({ loginMessage: "Login successful!" });
      this.props.history.push("/dashboard"); // Redirect to the dashboard on successful login
    } else {
      this.setState({ loginMessage: "Invalid username or password!" });
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
      <div>
        <div className="image-container">
          <img
            className="loginpicture"
            src="../loginpagepicture.jpg"
            alt="Chas Academy Logo"
          />
          <span className="image-text">Välkomen till Chas Academy</span>
        </div>
        <div className="login-container">
          <img
            className="loginphoto"
            src="../bild_login_vyn-removebg-preview.png"
            alt="Chas Academy Logo"
          />
          <h2>Login</h2>
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <label htmlFor="username">
                <i className="fas fa-user"></i> Username:
              </label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <i className="fas fa-lock"></i> Password:
              </label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
            <p>
              <a href="#" onClick={this.handleForgotPassword}>
                Forgot Password?
              </a>
            </p>
          </form>
          <p id="login-message">{this.state.loginMessage}</p>
        </div>

        {/* Forgot Password Modal */}
        <div id="forgot-password-modal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.handleCloseModal}>
              &times;
            </span>
            <h2>Forgot Password</h2>
            <p>Enter your email address to receive a password reset link:</p>
            <input
              type="email"
              id="forgot-email"
              placeholder="Enter your email"
              required
            />
            <button id="reset-password-btn">Reset Password</button>
          </div>
        </div>
      </div>
    );
  }
}
