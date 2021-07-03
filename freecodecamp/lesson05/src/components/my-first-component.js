import React from 'react'

function MyInfor() {
    return (
        <div>
            <h1 style={myStyle}>Quitumba Ferreira</h1>
            <p>I will be full stack developer</p>
            <ul>
                <li>Java</li>
                <li>Javascript</li>
                <li>Nodejs</li>
                <li>Reactjs</li>
            </ul>
        </div>
    );
}

var myStyle = {
    color: "white",
    backgroundColor:"Blue",
    padding: "10px"
};

export default MyInfor;