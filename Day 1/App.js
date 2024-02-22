/* 

<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>

ReactElement(Object) => HTML(Browser Understands)

*/

// Creating element using React
// It has 3 arguments --> type of element , object , children
// const element = React.createElement('div', { className: 'my-class' }, 'Hello, World!');
// The Type is the string 'div', indicating a div element.
// The Props object has a className property set to 'my-class'.
// The Children is the string 'Hello, World!'.


const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm h1 Tag"),
    React.createElement('h2', {}, "I'm h2 Tag"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm h1 Tag"),
    React.createElement('h2', {}, "I'm h2 Tag"),
  ]),
]);

console.log(parent);

// const heading = React.createElement(
//   'h1',
//   { id: 'heading', className: 'head' },
//   'Hello World from React!'
// ); 
// It's the job of Core React to create an element i.e, heading in this case

// React Element is normal JavaScript Object{}

// console.log(heading); // object


// It's the job of ReactDOM to create root i.e, heading in this case, bcz root is a dom element
// which is rendered to be on browser. This root is the place where all React code will run.
const root = ReactDOM.createRoot(document.getElementById('root')); 


//render basically inserts/renders the parent into root
root.render(parent);

// In React, Render is the technique that can redirect a page with the help of function render().
// Most importantly, render a function we can use to define the HTML code within the HTML element. 
// It helps to display certain views in the UI using certain logic defined in the render function and returns the output.
