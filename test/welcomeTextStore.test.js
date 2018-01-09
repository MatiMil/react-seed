import React from "react"
import store from "../src/js/stores/welcomeTextStore"

beforeEach(function() {

    global.fetch = jest.fn().mockImplementation(() => {
        var p = new Promise((resolve, reject) => {
            resolve({
                status:200,
                json: function() {
                    return new Promise(function(resolve, reject) {
                        resolve({title: 'Test successfull'});
                        // or
                        // reject ("Error!");
                    })
                }
            });
        });

        return p;
    });

});


it("Test successfull asnyc call", async function() {
    await store.fetchRandomText();
    expect(store.welcomeText).toBe("Test successfull");
});