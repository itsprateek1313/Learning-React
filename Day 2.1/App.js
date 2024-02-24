import React from "react";
import ReactDOM from "react-dom/client";

//React Element-->
// Creating element using JSX
// const headingJSX = <h1>"Heading using JSX 🚀 "</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingJSX);

//React Components-->Functional(new pracitce) and Class (old practice)
// Components are the building blocks of React applications,
// and they can be thought of as custom HTML elements that you can use to structure and organize your UI.

//[1] React Functional Component
//It is a javascript function that returns JSX code which in turns converted to react element so
// we can also say RFC is a js fxn that returns a react element
//Example
//syntax 1
//Always use Uppercase
// const HeadingComponent = () => {
//     return <h1>using FC</h1>
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);

// syntax 2
// const headingComponent2 = () => <h1> this is prateek kumar srivastava</h1>;


//Component Composition
//Inserting react comp into another comp

// const Title = () => {
//   return <h1>This is title component</h1>;
// };

// const HeadingComponent = () => {
//   return <div>
//     <Title />
//     <h1>This is heading component</h1>
//   </div>;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);



//adding react element inside react component
const title = (<h1>This is title component</h1>);
const Title = () => {
  return <h1>This is title 2</h1>
}
const x = <h1>My age is: </h1>
let myAge = 22;

const HeadingComponent = () => {
  return <div>
    {title}
    {Title}
    <Title></Title>
    {Title()}
    {x}
    {myAge}
    <h1>This is heading component</h1>
  </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

// NOTE: 
// {} --> syntax is used in JSX to embed JavaScript expressions or variables within the JSX markup


//Cross-Site scripting
// Cross-Site Scripting (XSS) is a security vulnerability that allows attackers to inject malicious scripts 
// into web pages viewed by other users. These scripts can be executed in the context of a user's browser, 
// leading to potentially harmful consequences such as stealing sensitive information, session hijacking, 
// defacement of websites, or spreading malware.
// React helps mitigate Cross-Site Scripting (XSS) vulnerabilities by promoting the use of JSX.
// JSX, by design, automatically escapes variables embedded within curly braces {}. This means that any content rendered 
// using curly braces is treated as plain text and not as executable code.
//Example
// const userInput = '<script>alert("XSS Attack");</script>';
// const element = <div>{userInput}</div>;
// In this example, even though userInput contains a script tag, React will escape it when rendering,
// preventing the script from being executed.
