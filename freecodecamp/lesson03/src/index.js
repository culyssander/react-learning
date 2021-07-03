import React from 'react';
import ReactDOM from 'react-dom';

function MyApp() { // create components
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

ReactDOM.render(
    <MyApp/>,
    document.getElementById('root')
);