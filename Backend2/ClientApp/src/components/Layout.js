import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import '../output.css';
import nightwind from "nightwind/helper"

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="bg-gradient-to-bl from-sky-400 to-teal-800 h-screen ">
        <NavMenu />
        <main className="container mx-auto mh-full" tag="main">
          {this.props.children}
        </main>
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </div>
    );
  }
}
