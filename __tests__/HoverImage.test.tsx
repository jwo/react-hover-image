import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

import HoverImage from "../src";

const getSrc = (element: Element): string => {
  const attr = element.attributes.getNamedItem("src");
  return attr ? attr.value : "";
};

test("Displays initial src image", () => {
  const wrapper = mount(
    <HoverImage src={"/img/first.png"} hoverSrc={"/img/first-hover.png"} />
  );
  expect(getSrc(wrapper.getDOMNode())).toBe("/img/first.png");
});

test("Changes to hoverSrc on mouseOver", () => {
  const wrapper = mount(
    <HoverImage src={"/img/first.png"} hoverSrc={"/img/first-hover.png"} />
  );
  wrapper.find("img").simulate("mouseover");
  expect(getSrc(wrapper.getDOMNode())).toBe("/img/first-hover.png");
});

test("When given an onClick, it gets called when clicked", () => {
  const doneChange = jest.fn();

  const wrapper = mount(
    <HoverImage
      onClick={doneChange}
      src={"/img/first.png"}
      hoverSrc={"/img/first-hover.png"}
    />
  );
  wrapper.simulate("click");
  expect(doneChange).toBeCalled();
});

test("When given an onClick, it does not get called when disabled", () => {
  const doneChange = jest.fn();
  const disabled = true;

  const wrapper = mount(
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
  const wrapper = mount(
    <HoverImage src={"/img/first.png"} hoverSrc={"/img/first-hover.png"} />
  );
  expect(() => {
    wrapper.find("img").simulate("click");
  }).not.toThrowError();
});

test("Matches snapshot", () => {
  const doneChange = jest.fn();
  const disabled = false;

  const wrapper = mount(
    <HoverImage
      disabled={disabled}
      onClick={doneChange}
      src={"/img/first.png"}
      hoverSrc={"/img/first-hover.png"}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
