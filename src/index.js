import React from "react";
import ReactDOM from "react-dom";

import GlobalState from "./GlobalState";
import Todos from "./Todos";
import "./styles.css";

const App = () => {
    return (
        <GlobalState>
            <div className="App">
                <h1>To Do:</h1>
                <Todos />
            </div>
        </GlobalState>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
