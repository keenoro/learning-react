import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position), 
//     (err) => console.log(err)
//   );

//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   //THIS IS THE ONLY TIME we do direct assignment to this.state
  //   this.state = { lat: null, errorMessage: '' };
  // }

  // Alternative initialization code (Mostly used)
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      //setState only modifies the selected properties and will not override other properties in the state
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
      // DO NOT DO THIS!!
      // this.state.lat = position.coords.latitude;,
    );
  }

  //Using helper functions can help reduce code duplication and wrapping things easily
  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <Spinner message="Please accept location request"/>;
  }

  // React says we have to define render!!
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.querySelector('#root')
);