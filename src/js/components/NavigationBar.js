import React from "react";
import { Link } from "react-router-dom";

export default class NavigationBar extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { collapsed } = this.state;
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar" />
              <span class="icon-bar" />
              <span class="icon-bar" />
            </button>
          </div>
        </div>
        <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <Link to="index" onClick={this.toggleCollapse.bind(this)}>Index</Link>
            </li>
            <li>
              <Link to="initial" onClick={this.toggleCollapse.bind(this)}>Initial</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}