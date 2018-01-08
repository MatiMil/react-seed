import React from "react"
import Layout from "../src/js/pages/Layout"
import {Provider} from "react-redux"

import store from "../src/js/store"

test('Render Layout', () => {
    const wrapper = shallow(
        <Provider store={store}>
            <Layout />
        </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
});
