import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { Provider } from "react-redux"

import Index from "./pages/Index"
import InitialPage from "./pages/InitialPage"
import Layout from "./pages/Layout"
import store from "./store"

const app = document.getElementById('app');

ReactDOM.render(
<Provider store={store}>
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Index}></IndexRoute>
			<Route path="initial" name="initial" component={InitialPage}></Route>
		</Route>
	</Router>
</Provider>, 
app);