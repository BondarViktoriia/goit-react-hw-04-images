import { Component } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader';
import SearchBar from './Searchbar/Searchbar';
import pixabayApi from './services/pixabay-api';
import Button from './Button';
import { Request, ErrorMessage } from './ImageGallery/ImageGallery.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: null,
    page: 1,
    total: 0,
    status:'idle'
  };

  handleFormSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ isLoading: true, error: null });
      console.log('new request');
      pixabayApi
        .fetchImages(this.state.query, this.state.page)
        .then(images => this.setState({ images: images.hits ,total:images.total,status:'resolved'}))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    pixabayApi
      .fetchImages(this.state.query, this.state.page)

      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { isLoading, query, images, error,total,status} = this.state;
    return (
      <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {!query && <Request>Enter a request</Request>}
        {error && <ErrorMessage> {error.message}</ErrorMessage>}
        {status === 'resolved' & total >1 ? (
          <ImageGallery images={images} />
        ) : (
          <ErrorMessage> Nothing found</ErrorMessage>
        )}
        {images.length >= 12 && <Button onClick={this.loadMore} />}
      </>
    );
  }
}
