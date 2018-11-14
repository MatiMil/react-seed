import React from "react"
import Initial from "../src/js/pages/Initial"

test('Render Initial', () => {
    const wrapper = shallow(
        <Initial />
    );

    expect(wrapper.find('h2').length).toBe(1);
});