import React from "react"
import ReactDOM from "react-dom"

import Layout from "./pages/Layout"
import welcomeTextStore from "./stores/welcomeTextStore"

const app = document.getElementById('app');

ReactDOM.render(
        <Layout welcomeTextStore={welcomeTextStore}/>,
    app);