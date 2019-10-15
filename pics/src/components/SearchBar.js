import React from 'react';

class SearchBar extends React.Component {
  // Naming convention follows the kind of callback function
  // e.g. on + input (type of element) + change (kind of callback)=> onInputChange
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  state = { term: '' };

  // ERROR: property is undefined due to context issue by this.state.term
  // onFormSubmit(event) {
  //   event.preventDefault();

  //   console.log(this.state.term);
  // }

  //One way to fix the Error above with arrow functions
  onFormSubmit = (event) => {
    //Prevents page from refreshing itself due to function of form
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  //Alternate form of event handler in JSX using arrow function
  //<input type="text" onChange={(e) => console.log(e.target.value)} />
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;