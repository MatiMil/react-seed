import React from "react"
import Index from "../src/js/pages/Index"

test('Render Index page', () => {
    const wrapper = shallow(
        <Index />
    );

    expect(wrapper).toMatchSnapshot();
});