import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import nightwind from "nightwind/helper"

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
        <nav className="bg-white border-b-2 border-color-gray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center flex-shrink-0 text-black text-xl">
                <Link to="/" className="text-black">
                  <div className="flex flex-1 w-8 sm:w-12">
                    <img
                      className="bg-white prevent-switch rounded-xl shadow-xl"
                      src="../bild_login_vyn-removebg-preview.png"
                      alt="Chas Academy Logo"
                    />

                  </div>
                </Link>
                {/* <Link to="/" className="text-black">Chas Calendar</Link> */}
              </div>
              <div className="block sm:hidden">
                <button onClick={this.toggleNavbar} className="text-black hover:text-gray-400 focus:outline-none focus:text-gray-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              <div className={`hidden sm:flex sm:items-center sm:ml-6 gap-2 ${this.state.collapsed ? 'hidden' : ''}`}>
                <div className="flex space-x-4">
                  <Link to="/" className="text-black bg-slate-200 rounded p-2 px-4">
                    <i className="fas fa-home"></i> Home</Link>
                  <Link to="/login" className="text-black bg-slate-200 rounded p-2 px-4">
                    <i className="fas fa-lock"></i> Login</Link>
                  <button onClick={() => nightwind.toggle()} className="text-black bg-slate-200 rounded p-2 px-4">Toggle mode</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${this.state.collapsed ? 'hidden' : ''} sm:hidden`}>
            <div className="flex flex-col gap-4 px-4 pb-4 pt-2">
              <Link to="/" className="block text-black bg-slate-200 rounded p-2">
                <i className="fas fa-home"></i> Home</Link>
              <Link to="/login" className="block text-black bg-slate-200 rounded p-2">
                <i className="fas fa-lock"></i> Login</Link>
              <button className="text-black bg-slate-200 rounded p-2" onClick={() => nightwind.toggle()}>Toggle mode</button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
