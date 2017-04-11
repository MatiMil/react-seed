import React from "react"
import {connect} from "react-redux"
import {HashRouter, Route, Link} from 'react-router-dom';

import {fetchWelcomeText} from "../actions/welcomeTextActions"
import NavigationBar from "../components/NavigationBar"

import Index from "../pages/Index"
import Initial from "../pages/Initial"

@connect((store) => {
    return {
        welcomeText: store.welcomeText.welcomeText
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchWelcomeText());
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