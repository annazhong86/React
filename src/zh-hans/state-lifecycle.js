import React from "react";
import ReactDOM from "react-dom";

function tick(){
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleDateString()}</h2>
        </div>
    )
    ReactDOM.render(e(element), document.getElementById('root'));
}

setInterval(tick, 1000);
