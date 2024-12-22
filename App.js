
/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1 id="heading1"> I'm Heading1 </h1>
 *          <h1 id="heading2"> I'm Heading2 </h1>
 *      </div>
 *      <div id="child2">
 *          <h2 id="heading1"> I'm Heading1 </h2>
 *          <h2 id="heading2"> I'm Heading1 </h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {id:"heading1"}, "I'm Heading1"), 
        React.createElement("h1", {id:"heading2"}, "I'm Heading2")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h2", {id:"heading1"}, "I'm Heading1"), 
        React.createElement("h2", {id:"heading2"}, "I'm Heading2")
    ])
])

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




/** 
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1> Hello From Nested</h1>
 *      </div>
 * </div>
*/

/**
 * 
 * const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    React.createElement(
        "div", 
        {id:"child"}, 
        [   React.createElement("h1", {}, "I'm H1 Tag!!"),
            React.createElement("h2", {}, "I'm H2 Tag!!")
        ]
    )
)

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

 */



/*
const heading = React.createElement("h1", {id:"heading"}, "Hello World From React!!");
console.log(heading); //Object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/