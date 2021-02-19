import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css';
import Portals from './senior-guidance/portals/Portals'
import App from './App';
// import Clock from "./src/Clock";
import ToDoList from './senior-guidance/coordinate';
import MouseTracker from './senior-guidance/render-props'


const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false }
];

// ReactDOM.render(
//   <React.StrictMode>
//     <App tasks={DATA} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// ReactDOM.render(
//   <React.StrictMode>
//     <Portals />
//   </React.StrictMode>,
//   document.getElementById('app-root')
// );

ReactDOM.render(
  // <ToDoList />,
  <MouseTracker />,
  document.getElementById('root')
);