import React from "react"
import NavigationBar from "../src/js/components/NavigationBar"

test('Render NavigationBar', () => {
    const wrapper = shallow(
        <NavigationBar />
    );

    expect(wrapper).toMatchSnapshot();
});

test('Render Navigationbar and collapse navigationbar', () => {
    const wrapper = shallow(
        <NavigationBar />
    );

    wrapper.find('.navbar-toggle').simulate('click');
    expect(wrapper.find('.navbar-collapse .collapse').length).toBe(0);
});