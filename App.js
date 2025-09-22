import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement(heading) this is an object
//render(heading) - > converts to element

const elem = <span>React SPAN BRO</span>
const heading = React.createElement("h1",{id:"heading"},"Namaste React");

console.log(heading);

//jsx is html like HTML (NOT HTML)
//this jsx transpiled before going to render by parcel,
//with the help of BABEL

const jsxHeading = (<h1 
  className="rot" 
  tabIndex={1}> 
   Namaste JSX 🚀 
   </h1>
   )

console.log(jsxHeading);


const Title = () => (
  <div>
    {elem}
    <h1>I AM TITLE</h1>
  </div>
);

//React Functional component
//component composition(component inside another component )

console.log(Title);

const number =1000;
const Headingcomponent = () => (
  <div id="container">
    {Title()}
    <div>{heading}</div>
    <h1 className="heading">namaste react Functioal Component</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
<Headingcomponent />
  </>
);