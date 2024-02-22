## **Day 2**

## Dependencies refer to external libraries, modules, or packages that a particular piece of software relies on to function correctly. These dependencies are components or functionalities that the software does not implement itself but instead leverages from external sources.

## npm is used for installing, managing, and updating JavaScript packages (libraries, frameworks, and tools) that are used in a project. Developers can easily specify project dependencies in a package.json file, and npm takes care of downloading and installing the correct versions.

## Code
## npm init
## npm install parcel
## node_modules file contains all the code for the dependencies

## bundler is a tool used in web development to package or bundle together various files and dependencies of a web application into a single, optimized file or set of files. The primary purpose of a bundler is to simplify the management of code and assets, making it more efficient for web browsers to load and run the application.
## Example - parcel
## npm install -D parcel
## Note 
## "parcel": "^2.11.0" --> ^ updates minor versions/patches , ~ updates major only

## Very important
## It is important to push pacakge.json and package-lock.json file onto github
## It is not important to use push node_module folder onto github because it is too large also it can be recreated using pacakge.json and package-lock.json file just write the code "npm install"

## igniting the app
## code npx parcel index.html 

## cdn is not a good way for imporitn react into your project because it makes a n/w call and it takes time
## instead we will use the command 
## npm install react
## npm install react-dom

## Earlier the react code in App.js was interpreted from the cdn links
## but now since we have downloaded the react dependencies using npmm
## we have to use import React from "react"; import ReactDOM from "react-dom/client"
## this will import react code from the node_modules

## parcel is doing the following for you
- Development build
- creating a local server
- HMR - Hot Module Replacement - Meaning --> dynamically updating the page as you write code
- It uses a file watching algorithm wwritten in C++
- faster builds with the help of caching
- Image optimization
- Differential bundling - so that site can be opened on older versions of browsers as well as on any device






