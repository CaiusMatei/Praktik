import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import '../output.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <main className="container" tag="main">
          {this.props.children}
        </main>
      </div>
    );
  }
}
