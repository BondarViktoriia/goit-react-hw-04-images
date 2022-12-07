import { createPortal } from 'react-dom';
import { Component } from 'react';
import { ModalBackdrop, ModalContent } from './Modal.styled';
import PropTypes from 'prop-types';

const addModal = document.querySelector('#modal-root');
export default class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    console.log('Кликнули в бекдроп');
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
    if (e.code === 'Escape') {
      console.log('Click esc need close modal', e.code);
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props;
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalContent src={largeImageURL} alt={tags} width="600" />
      </ModalBackdrop>,
      addModal
    );
  }
}
