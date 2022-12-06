import Modal from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageCard extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    return (
      <li>
        <img
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
