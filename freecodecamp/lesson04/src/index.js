import React from 'react';
import ReactDOM  from 'react-dom';

function MyName() {
    return (
        <div>
            <h1 style={mystyle}>My name is Quitumba</h1>
            <Paragraph/>
            <UnorderList/>
        </div>
    )
}

function Paragraph() {
    return (
        <p style={{color: 'green'}}>Welcome to reactjs... I will be full stack developer</p>
    )
}

function UnorderList() {
    return (
        <ul>
            <li>Javascript</li>
            <li>React</li>
        </ul>
    )
}

const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};


ReactDOM.render(
    <MyName/>,
    document.getElementById('root')
);