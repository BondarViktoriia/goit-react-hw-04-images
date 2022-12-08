import { Component } from 'react';
import ImageGallery from './ImageGallery';
import SearchBar from './Searchbar';

export class App extends Component {
  state = {
    query: '',
    page:1
  };

  handleSearchSubmit = query => {
    this.setState({ query, page:1 });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSearchSubmit} />
        <ImageGallery query={this.state.query} />
      </>
    );
  }
}
