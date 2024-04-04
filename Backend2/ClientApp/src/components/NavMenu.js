import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header className="mb-4">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center flex-shrink-0 text-white">
                <Link to="/" className="text-white">Chas Calendar</Link>
              </div>
              <div className="block sm:hidden">
                <button onClick={this.toggleNavbar} className="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div className={`hidden sm:flex sm:items-center sm:ml-6 ${this.state.collapsed ? 'hidden' : ''}`}>
                <div className="flex space-x-4">
                  <Link to="/" className="text-white">
                    <i className="fas fa-home"></i> Home</Link>
                  <Link to="/login" className="text-white">
                    <i className="fas fa-lock"></i> Login</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={`${this.state.collapsed ? 'hidden' : ''} sm:hidden`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block text-white">
                <i className="fas fa-home"></i> Home</Link>
              <Link to="/login" className="block text-white">
                <i className="fas fa-lock"></i> Login</Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
