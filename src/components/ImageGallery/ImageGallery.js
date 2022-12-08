import ImageGalleryItem from 'components/ImageGalleryItem';
import { Component } from 'react';
import Loader from 'components/Loader';
import Button from 'components/Button';
import { GalleryContainer, Request, ErrorMessage } from './ImageGallery.styled';
import PropTypes from 'prop-types';

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
    const key = '30472076-91990f645bc169d0b44b794c0';
    const prevQuery = prevProps.query;
    const currentQuery = this.props.query;
    const { page } = this.state;

    if (prevQuery !== currentQuery || prevState.page !== this.state.page) {
      console.log('Изменился query');
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${currentQuery}}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(
            new Error(`По Вашему запросу ${currentQuery} ничего не найдено!`)
          );
        })
        .then(images => this.setState({ images, status: 'resolved' }))
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
          {images.total > 0 ? (
            <Button onClick={this.loadMore} />
          ) : (
            <ErrorMessage>По Вашему запросу ничего не найдено</ErrorMessage>
          )}
        </GalleryContainer>
      );
    }
  }
}
