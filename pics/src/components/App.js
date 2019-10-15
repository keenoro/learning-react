import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term }, 
      headers: {
        Authorization: 'Client-ID be75912055381ff0856507098c0a8ed287c208809ee9a5d84059bc3bdea0e625'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
};

export default App;
