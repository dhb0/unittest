import React from 'react'
import {shallow} from "enzyme";
import App from "App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(()=>{
    wrapped = shallow(<App />)//wrapped version of App component
})

it("shows a comment box inside",()=>{

    expect(wrapped.find(CommentBox).length).toEqual(1) 
})

it("shows a comment list inside",()=>{


    expect(wrapped.find(CommentList).length).toEqual(1) 
})