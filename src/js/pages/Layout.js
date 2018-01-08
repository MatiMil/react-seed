import React from "react"
import {connect} from "react-redux"
import {HashRouter, Route} from 'react-router-dom';

import {setWelcomeText, fetchText} from "../actions/welcomeTextActions"
import NavigationBar from "../components/NavigationBar"

import Index from "../pages/Index"
import Initial from "../pages/Initial"

// Require scss files
require('../../stylesheets/_all.scss');

// require LESS files
require('../../stylesheets/initial.less');

@connect((store) => {
    return {
        welcomeText: store.welcomeText.welcomeText
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(setWelcomeText('Hello World!'));
    }

    fetchTextFromServer() {
        this.props.dispatch(fetchText());
    }

    render() {
        const {welcomeText} = this.props;
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
                            <div class="col-sm-12 col-md-12 col-lg-12">
                                <h1>{welcomeText.welcomeText}</h1>
                                <button onClick={this.fetchTextFromServer.bind(this)}>
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