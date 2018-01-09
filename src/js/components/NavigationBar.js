import React from "react";
import { Link } from "react-router-dom";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
export default class NavigationBar extends React.Component {

  @observable collapse = true;

  toggleCollapse() {
    this.collapse = !this.collapse;
  }

  render() {
    const navClass = this.collapse ? "collapse" : "";

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
        <div class={"navbar-collapse " + navClass}>
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