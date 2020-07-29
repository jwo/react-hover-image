# React Hover Image

![travis-status](https://img.shields.io/travis/jwo/react-hover-image.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/d749dc7ef0b1d094deb2/maintainability)](https://codeclimate.com/github/jwo/react-hover-image/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/jwo/react-hover-image/badge.svg?branch=master)](https://coveralls.io/github/jwo/react-hover-image?branch=master)

## Description

A React Component for an image, which changes its source when mouse hovered.

## Usage

1. Add to your React project:

`yarn add react-hover-image`

2. Import and use

```js
import React from "react";
import HoverImage from "react-hover-image";
import yourFile from "./images/yourFile.svg";
import yourFileHover from "./images/yourFile-hover.svg";

const YourComponent: React.SFC = () => {
  return (
    <div>
      <h2>Oh Hai!</h2>
      <HoverImage src={yourFile} hoverSrc={yourFileHover} />
    </div>
  );
};
```

### Props

`src` and `hoverSrc` are the only required props.

- **src** : Default image source
- **hoverSrc** : On hover, show this
- **onClick** : function to invoke when the image is clicked
- **disabled** : You can disable clicks
- **style** : Style props to pass to the `img`
- **className** : CSS class name to pass to the `img`

```ts
export type HoverImageProps = {
  src: string;
  hoverSrc: string;
  disabled?: boolean;
  className?: string;
  style?: any;
  onClick?: React.MouseEventHandler;
};
```

### Typescript

We publish types at `index.d.ts` with version 2.0.

### Demos

You can view a running storybook at http://jessewolgamott.com/react-hover-image/ or you can download and run `yarn storybook`

### Tips:

- If using webpack, use `image-loader` to load your images into a data-url and
  get semi-instant response times on your hover

### Why should I use this?

I was working on a project where client wanted to use graphic buttons for
instead of CSS buttons. This is extracted from that project.

## LICENSE

The MIT License

Copyright 2017 Jesse Wolgamott

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
