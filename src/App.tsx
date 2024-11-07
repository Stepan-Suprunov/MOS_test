import React from 'react';
import './App.css';
import {Table} from "./components/index";
import {head, data} from "./data/index"

function App() {
    return (
        <div className="App">
            <Table head={head} data={data}/>
        </div>
    );
};

export default App;
