import { Component } from 'react';
import ImageGallery from './ImageGallery';
import SearchBar from './Searchbar';


export class App extends Component {
  state = {
   query:'',
 }

  handleSearchSubmit = query => {
    this.setState({query})
  }

  //     'https://pixabay.com/api/?q=cat&page=1&key=30472076-91990f645bc169d0b44b794c0&image_type=photo&orientation=horizontal&per_page=12'


  render() {

    return (
      <>
        <SearchBar onSubmit={this.handleSearchSubmit } />
        <ImageGallery query={this.state.query} />
      </>
    );
  }
}
