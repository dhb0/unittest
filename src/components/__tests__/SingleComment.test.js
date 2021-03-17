import React from "react";
import { mount } from "enzyme";
import SingleComment from "components/SingleComment";
import Root from "root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <SingleComment comment="comment test"/>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has li element inside', () => {
  expect(wrapped.find("li").length).toEqual(1);
});

it('render props', () => {
    expect(wrapped.text()).toEqual('comment test');
    expect(wrapped.render().text()).toContain("comment test");
});