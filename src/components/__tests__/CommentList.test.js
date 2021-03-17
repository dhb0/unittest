import reducers from '../../reducers';
import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import Root from "root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has li element for each comment', () => {
  let state;
  state = reducers(undefined, {});
  expect(state.comments.length).toEqual(wrapped.find("li").length);
});