import React from 'react';
import ReactDOM from 'react-dom';

import GlobalState from './GlobalState';
import Todos from './Todos';
import './styles.css';

const App = () => {
    return (
        <GlobalState>
            <div className="App">
                <h1>To Do:</h1>
                <Todos className="todos" />
                <iframe
                    title="fork button"
                    src="https://ghbtns.com/github-btn.html?user=jpmarra&repo=todo-hooks&type=fork&size=large"
                    frameBorder="0"
                    scrolling="0"
                    width="158px"
                    height="30px"
                />
            </div>
        </GlobalState>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
