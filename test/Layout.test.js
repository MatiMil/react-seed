import React from "react"
import Layout from "../src/js/pages/Layout"
import welcomeTextStore from "../src/js/stores/welcomeTextStore"

test('Render Layout', () => {
    const wrapper = shallow(
        <Layout welcomeTextStore={welcomeTextStore}/>
    );

    expect(wrapper).toMatchSnapshot();
});
