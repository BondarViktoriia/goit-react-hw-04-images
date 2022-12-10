import Modal from 'components/Modal';
import { Component } from 'react';
import { Picture } from './ImageCard.styled';
import PropTypes from 'prop-types';

export class ImageCard extends Component {
  state = {
    isModalOpen: false,
  };

  static propTypes = {
    enty: PropTypes.arrayOf(
      PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      })
    ),
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    return (
      <li  key={this.props.id} >
        <Picture
          
          src={this.props.entry.webformatURL}
          alt={this.props.entry.tags}
          width="300"
          onClick={this.toggleModal}
         
        />
        {this.state.isModalOpen && (
          <Modal
           
            largeImageURL={this.props.entry.largeImageURL}
            tags={this.props.entry.tags}
            onClose={this.toggleModal}
             
          />
        )}
      </li>
    );
  }
}

export default ImageCard;
