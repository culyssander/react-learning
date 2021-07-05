import React from 'react';

const App = () => {
    const date = new Date();
    const firstname = 'Quitumba';
    const lastname = 'Ferreira'

    const hour = date.getHours();
    let timeOfDay;

    if(hour < 12)
        timeOfDay = 'Morning';
    else if(hour >= 12 && hour < 18)
        timeOfDay = 'Afternoon';
    else
        timeOfDay = 'Night' 

    const style = {
        color: "#FF8C00", 
        backgroundColor: "red"
    };

    return (
        <div>
            <h1>Hello {firstname} {lastname}</h1>
            <h2>It is currently about {date.getHours() % 12 == 0 ? 12 : 0} o'clock</h2>
            <h2 style={style}>Good {timeOfDay}</h2>
        </div>
    );
}

    
// function App() {
//     const firstName = 'Quitumba';
//     const lastName = 'Ferreira'
//     return (
//         <h1>Hello </h1>
//     );
// }

export default App;