import { Component } from 'react';

export default class ImageGallery extends Component {
  state = {};

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.query;
    const currentQuery = this.props.query;

    if (prevQuery !== currentQuery) {
      console.log('изменился запрос');
      fetch(
        `https://pixabay.com/api/?q=${currentQuery}&page=1&key=30472076-91990f645bc169d0b44b794c0&image_type=photo&orientation=horizontal&per_page=12`
      ).then(res=>res.json()).then(console.log);
    }
  }

  render() {
    return (
      <ul>
        <p>{this.props.query} </p>{' '}
      </ul>
    );
  }
}
