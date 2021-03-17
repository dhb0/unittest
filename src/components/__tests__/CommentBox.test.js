import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and two buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("textarea", () => {
  it("users can type in", () => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    }); // FAKING AN EVENT

    wrapped.update(); // because setstate is asynch, we have to make sure that component is rendered

    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted, textarea is getting emptied", () => {
    wrapped.find(".submit-btn").simulate("click", {}); // FAKING AN EVENT

    wrapped.update(); // because setstate is asynch, we have to make sure that component is rendered

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
