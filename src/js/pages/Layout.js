import React from "react"
import { HashRouter, Route } from 'react-router-dom';
import { observer } from "mobx-react";

import NavigationBar from "../components/NavigationBar"

import Index from "../pages/Index"
import Initial from "../pages/Initial"

// Require scss files
require('../../stylesheets/_all.scss');

// require LESS files
require('../../stylesheets/initial.less');

@observer
export default class Layout extends React.Component {

    fetchTextFromServer() {
        this.props.welcomeTextStore.fetchRandomText();
    }

    render() {
        const {welcomeText} = this.props.welcomeTextStore;
        const {location} = this.props;

        const containerStyle = {
            marginTop: "60px"
        };

        return (
            <HashRouter>
                <div>
                    <NavigationBar location={location}/>
                    <div class="container" style={containerStyle}>
                        <div class="row">
                            <div class="col-xs-12">
                                <h1>{welcomeText}</h1>
                                <button class="btn btn-primary" onClick={this.fetchTextFromServer.bind(this)}>
                                    Fetch another text
                                </button>
                                <Route exact path="/index" component={Index}/>
                                <Route exact path="/initial" component={Initial}/>
                            </div>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}