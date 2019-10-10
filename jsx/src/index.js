// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// function getButtonText() {
//     return 'Click on me!';
// }

// Create a react component (JSX)\

// Tips
// HTML -> <button style="background-color:blue; color: white;">Submit</button>
// JSX  -> <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
// Use className instead of class in JSX to avoid conflict or confusion with declaration.
const App = () => {
    const buttonText = { text: 'Click me'};
    const labelText = 'Enter name: ';

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'red', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen (DOM)
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);