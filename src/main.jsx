//import { createElement } from 'react' // needed for the traditional render below; Before JSX
//import { StrictMode } from 'react'  // commented default code given by the installation
import { createRoot } from 'react-dom/client'
import './index.css'  // commented default code given by the installation
//import App from './App.jsx' // used below; default code given by the installation

// Commented default code given by the installation
/*
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

/* ---------------
LESSON STARTS HERE

React from scratch
Ref: https://www.youtube.com/watch?v=LzMnsfqjzkA&t=97978s
Start at: 26:50:31

Note: instead of cleaning all the mess, I just let the vite installation as is.
And instead of creating index.jsx outside the src folder, I use this default React setup created during installation, the main.jsx, as the index.
----------------*/

// Before JSX
/*
// This block needs the createElement import above
const root = createRoot(document.getElementById("root"))
root.render (
  createElement("H1", null, "Hello from createElement")
)

// Nested wherein more elements means more complication
const root = createRoot(document.getElementById("root"))
const reactElement = createElement("H1", null, createElement("span", null, "I'm inside the span"))

root.render (
  reactElement
)
*/

// Without createElement import
/*
const root = createRoot(document.getElementById("root"))
const reactElement = <h1>Hello from JSX!</h1>

root.render (
  reactElement
)
OR

const root = createRoot(document.getElementById("root"))
const reactElement = <App />

root.render (
  reactElement
)
*/

// REACT IS COMPOSABLE
// Let's put the components inside the render to do more codes and more components later
const root = createRoot(document.getElementById("root"))

function MyAwesomeNavbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function MainContent() {
  return <h1>React is great!!!</h1>
}

// REACT IS DECLARATIVE
/*
// Imperative (How)
const numbers = [5, 12, 8, 130, 44];
const filteredNumbers = [];

// Explicitly defining HOW to loop and filter
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    filteredNumbers.push(numbers[i]);
  }
}

// Declarative (What)
const numbers = [5, 12, 8, 130, 44];

// Declaring WHAT result we want
const filteredNumbers = numbers.filter(n => n > 10);
*/

// Imperative vs Declarative in Rendering
/*
function createHeading() {
  const h1 = document.createElement("h1")
  h1.textContent = "This is imperative coding."
  return h1
}
document.getElementById('root').textContent(createHeading())  // you can also use appendChild instead of textContent but not innerHTML coz of inconsistencies and vulnerabilites

root.render(
  <h1>This is declarative coding.</h1>
)
*/

root.render (
  <div>
    <MyAwesomeNavbar />
    <MainContent />
  </div>
)