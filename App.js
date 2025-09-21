import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { key: "h1-1" },
      "This is inside the div->div->h1"
    ),
    React.createElement(
      "h2",
      { key: "h2-1" },
      "This is inside the div->div->h2"
    ),
    React.createElement(
      "h1",
      { key: "h1-2" },
      "This is inside the div->div->h1"
    ),
    React.createElement(
      "h2",
      { key: "h2-2" },
      "This is inside the div->div->h2"
    ),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);
