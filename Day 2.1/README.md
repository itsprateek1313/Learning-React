## npx parcel index.html command is used to build the project , if you dont want to use this command
## you can write your own script in package.json under "scripts"
## Code
## "start": "parcel index.html",
## "build": "parcel build index.html"
## Now to run our project use npm run start command
## In any project/company if you dont know how to run a project just check package.json-->scripts-->"start": "x"
## and type the command npm run "x"

## React Elements
## React Elements are not actual DOM elements; instead, they are objects that describe the structure of the UI. When React renders components, it creates a virtual DOM representation of the UI using these elements, and then it efficiently updates the actual DOM to match this virtual representation.
## const element = React.createElement("h1",{},"Hiii");


## JSX --> html-like but NOT html
## JSX allows you to write HTML-like code directly in your JavaScript files
## JSX provides a concise and expressive syntax for defining React elements in a more readable and HTML-like format. JSX is not required for using React, but it is a popular choice due to its readability and ease of use.
## JSX is a syntax extension for JavaScript. It's a way of writing JavaScript code with a syntax that resembles XML or HTML

## const element = <h1>Hello, JSX!</h1>;
## In the example above, the JSX code gets transformed into the following JavaScript code:
## const element = React.createElement('h1', null, 'Hello, JSX!');
## The transformation is typically done by tools like Babel during the build process. 


## 






