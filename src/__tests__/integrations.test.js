import React from 'react';
import {mount} from "enzyme";
import Root from "../root";
import App from "../App";
import moxios from "moxios";

beforeEach(()=>{
    moxios.install();
    moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
        status:200,
        response:[{name:"Fetched #1"}, {name:"Fetched #2"}]
    })
})

afterEach(()=>{
    moxios.uninstall()
})

it("can fetch a list of comments and display them", (done)=>{
    //Attempt to render all the app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    //find fetch comments button and click it

    wrapped.find(".fetch-btn").simulate("click");

    //find a list of comments

    // setTimeout(() => {
    //     wrapped.update()
    //     expect(wrapped.find("li").length).toEqual(5); // have eto wait moxios to kick in and do stuff
    //     done();
    //     wrapped.unmount()
    // }, 100);

    //OR

    moxios.wait(()=>{
        wrapped.update()
        expect(wrapped.find("li").length).toEqual(5); // have eto wait moxios to kick in and do stuff
        done();
        wrapped.unmount()
    })
})