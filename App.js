/**
 * <div id ="parent">
 *     <div id ="child">
 *        <h1>
 *        </h1>
 *        <h2>
 *        </h2>
 *     <div/>
 * 
 * </div>
 * 
 * 
 * ReactElement OBJECT -> HTML Browser understands 
 * 
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    [
      React.createElement("h1", {}, "THis is inside the div->div->h1"),
      React.createElement("h2", {}, "THis is inside the div->div->h2"),
    ],
    [
      React.createElement("h1", {}, "THis is inside the div->div->h1"),
      React.createElement("h2", {}, "THis is inside the div->div->h2"),
    ],
  ])
);

//order of sequence is important



const heading = React.createElement(
  "h1",//type
  {id:"heading",xyz:"abc"},//props
  "Hello World from React Inside the DOM Children"//children
);
// console.log(heading);
// console.log(heading.props);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(parent);
root.render(parent);// take this and create a link for the root
