// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component (JSX)\

// Tips
// HTML -> <button style="background-color:blue; color: white;">Submit</button>
// JSX  -> <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
// Use className instead of class in JSX to avoid conflict or confusion with declaration.
const App = () => {
    return (
        <div>
            <label className="label" for="name">Enter name: </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'red', color: 'white' }}>
                Submit
            </button>
        </div>
    );
};

// Take the react component and show it on the screen (DOM)
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);