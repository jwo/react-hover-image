import React from "react";
import ReactDOM from "React-dom";
import "./skeleton.css";
import ReactHoverImage from "../src/";
import imageFirst from "./normal.png";
import imageSecond from "./hover.png";

const App = props => {
  return (
    <div>
      <h1>Demo!</h1>
      <ol>
        <li>Hover over the image</li>
        <li>It'll flip to the 2nd image (green overlay)</li>
      </ol>

      <div className="u-full-width">
        <ReactHoverImage src={imageFirst} hoverSrc={imageSecond} />
      </div>
      <a
        className="button button-primary"
        href="https://github.com/jwo/react-hover-image"
      >
        Code samples at jwo/react-hover-image
      </a>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
