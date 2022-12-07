import { Component } from 'react';
import ImageGallery from './ImageGallery';
import SearchBar from './Searchbar';



export class App extends Component {
  state = {
    query: '',
 }

  handleSearchSubmit = query => {
    this.setState({query})
  }



  render() {

    return (
      <>
        <SearchBar onSubmit={this.handleSearchSubmit } />
        <ImageGallery query={this.state.query}   />

      </>
    );
  }
}
