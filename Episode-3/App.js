import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * const parent = React.createElement("div",{id: "parent"},[
    React.createElement("div",{id: "child"},[
        React.createElement("h1",{},"This is Namaste React Episode 2"),
        React.createElement("h2",{},"by Prashant Puri"),
    ]),
    React.createElement("div",{id: "child2"},[
        React.createElement("h1",{},"This is Namaste React Episode 2"),
        React.createElement("h2",{},"by Prashant Puri"),
    ]),
]);
 */


// console.log(parent);

const Title = () =>{
    <h1 className="head">
         React using JSX
    </h1>
}

// React fragment - behaves like an empty tag

const HeadingComponent = () => (
    <>
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste React functional component</h1>
    </div>
    <div id="container-2"></div>
    </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);