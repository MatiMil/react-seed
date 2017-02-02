import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"

import { fetchWelcomeText } from "../actions/welcomeTextActions"
import NavigationBar from "../components/NavigationBar"

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
    const { welcomeText } = this.props;
    const { location } = this.props;

    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <NavigationBar location={location}/>

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
                <h1>{welcomeText.welcomeText}</h1>

                {this.props.children}
            </div>
          </div>
        </div>

      </div>
      
    );
  }
}