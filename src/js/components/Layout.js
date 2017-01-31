import React from "react"
import { connect } from "react-redux"

import { fetchWelcomeText } from "../actions/welcomeTextActions"

@connect((store) => {
  return {
    welcomeText: store.welcomeText.welcomeText
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchWelcomeText())
  }

  render() {
    const { welcomeText } = this.props;

    return <div>
      <h1>{welcomeText.welcomeText}</h1>
    </div>
  }
}