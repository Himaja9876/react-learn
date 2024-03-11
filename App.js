import React from "react";
import ReactDOM from "react-dom/client";


//React Element

const reactheading = (
<h1 id="heading">Namaste React Element</h1>) 


const Heading = () => {
  return (
  <div id = "container">
    {reactheading}
    <h1>Namaste Functional Component - returning react element</h1>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);





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

// const parent = React.createElement("div", {id : "parent"},
// React.createElement("div", {id : "child"}, 
// [React.createElement("h1", {}, "This is grand child"),
// React.createElement("h2", {}, "This is sfg7rufdyg")]))

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent); 


// const heading = (<h1 id = "heading" className = "name">Namaste React</h1>) //babel converts this to react create element object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
