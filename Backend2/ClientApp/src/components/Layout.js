import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import '../output.css';
import nightwind from "nightwind/helper"

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="bg-white h-screen ">
        <NavMenu />
        <main className="container mx-auto" tag="main">
          {this.props.children}
        </main>
        <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
      </div>
    );
  }
}
