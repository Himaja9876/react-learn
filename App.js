import React from "react";
import ReactDOM from "react-dom/client";

//React

/* const heading = React.createElement("h1", {
  id : "heading", xyz : "abc"
}, "Hello JS");
      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(heading); */

      

// Nested div in React
/*
<div id = "parent">
  <div id = "child">
    <h1>This is grand child</h1>
    <h2>This is sibling</h2>
  </div>
</div> */

const parent = React.createElement("div", {id : "parent"},
React.createElement("div", {id : "child"}, 
[React.createElement("h1", {}, "This is grand child"),
React.createElement("h2", {}, "This is siblfyutguigtiuing")]))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
