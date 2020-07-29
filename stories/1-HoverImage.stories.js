import React from "react";
import HoverImage from "../src/index.tsx";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import "./yolo.css";

export default {
  title: "Hover Image",
  component: MinimalExample,
  decorators: [withKnobs],
};

export const MinimalExample = () => (
  <HoverImage
    src={"https://fakeimg.pl/350x200/?text=normal-image"}
    hoverSrc={"https://fakeimg.pl/350x200/?text=hovered-image"}
  />
);

export const OnClick = () => (
  <HoverImage
    src={"https://fakeimg.pl/350x200/?text=normal-image"}
    hoverSrc={"https://fakeimg.pl/350x200/?text=hovered-image"}
    onClick={action("clicked")}
  />
);

export const Styled = () => (
  <HoverImage
    style={{
      border: `20px solid pink`,
      margin: `10rem`,
    }}
    src={"https://fakeimg.pl/350x200/?text=normal-image"}
    hoverSrc={"https://fakeimg.pl/350x200/?text=hovered-image"}
  />
);

export const DisabledClick = () => {
  const disabled = boolean("Disabled?", true);
  return (
    <HoverImage
      disabled={disabled}
      src={"https://fakeimg.pl/350x200/?text=normal-image"}
      hoverSrc={"https://fakeimg.pl/350x200/?text=hovered-image"}
      onClick={action("clicked")}
    />
  );
};

export const WithClassName = () => {
  return (
    <>
      <HoverImage
        className="yolo"
        src={"https://fakeimg.pl/350x200/?text=normal-image"}
        hoverSrc={"https://fakeimg.pl/350x200/?text=hovered-image"}
      />
    </>
  );
};
