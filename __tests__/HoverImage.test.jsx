import React from "react";
import Enzyme, { shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import HoverImage from "../src";

test("Displays initial src image", () => {
  const wrapper = mount(
    <HoverImage src={"/img/first.png"} hoverSrc={"/img/first-hover.png"} />
  );
  expect(wrapper.state().src).toBe("/img/first.png");
});

test("Changes to hoverSrc on mouseOver", () => {
  const wrapper = mount(
    <HoverImage src={"/img/first.png"} hoverSrc={"/img/first-hover.png"} />
  );
  wrapper.find("img").simulate("mouseover");
  expect(wrapper.state().src).toBe("/img/first-hover.png");
});

test("When given an onClick, it gets called when clicked", () => {
  const doneChange = jest.fn();

  const wrapper = shallow(
    <HoverImage
      onClick={doneChange}
      src={"/img/first.png"}
      hoverSrc={"/img/first-hover.png"}
    />
  );
  wrapper.find("img").simulate("click");
  expect(doneChange).toBeCalled();
});

test("When given an onClick, it does not get called when disabled", () => {
  const doneChange = jest.fn();
  const disabled = true;

  const wrapper = shallow(
    <HoverImage
      disabled={disabled}
      onClick={doneChange}
      src={"/img/first.png"}
      hoverSrc={"/img/first-hover.png"}
    />
  );
  wrapper.find("img").simulate("click");

  expect(doneChange).not.toBeCalled();
});

test("No errors if click, but no onClick provided", () => {
  const wrapper = shallow(
    <HoverImage src={"/img/first.png"} hoverSrc={"/img/first-hover.png"} />
  );
  expect(() => {
    wrapper.find("img").simulate("click");
  }).not.toThrowError();
});

test("Matches snapshot", () => {
  const doneChange = jest.fn();
  const disabled = false;

  const wrapper = shallow(
    <HoverImage
      disabled={disabled}
      onClick={doneChange}
      src={"/img/first.png"}
      hoverSrc={"/img/first-hover.png"}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
