import ImageGalleryItem from 'components/ImageGalleryItem';
import { Component } from 'react';
import Loader from 'components/Loader';
import Button from 'components/Button';
import { GalleryContainer, Request, ErrorMessage } from './ImageGallery.styled';
import PropTypes from 'prop-types';
import pixabayApi from '../services/pixabay-api';

export default class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  static propTypes = {
    currentQuery: PropTypes.string,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const currentQuery = this.props.query;
    const { page } = this.state;

    if (prevQuery !== currentQuery || prevState.page !== this.state.page) {
      console.log('Изменился query');
      this.setState({ status: 'pending', error: null });
      pixabayApi
        .fetchImages(currentQuery, page)
        .then(data => {
          this.setState({
            images: [...prevState.images, ...data.hits],
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <Request>Введите запрос! </Request>;
    }
    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <ErrorMessage>{error.message} </ErrorMessage>;
    }
    if (status === 'resolved') {
      return (
        <GalleryContainer>
          <ImageGalleryItem images={images} />
          {images.length >= 12 ? (
            <Button onClick={this.loadMore} />
          ) : (
            <ErrorMessage>По Вашему запросу ничего не найдено</ErrorMessage>
          )}
        </GalleryContainer>
      );
    }
  }
}
