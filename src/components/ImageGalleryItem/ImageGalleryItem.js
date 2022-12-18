import { useState } from 'react';
import Modal from 'components/Modal';
import { Picture } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
  const [showModal, setShowmodal] = useState(false);

  const toggleModal = () => {
    setShowmodal(prevShowModal => !prevShowModal);
  };
  return (
    <li key={id} onClick={toggleModal}>
      <Picture src={webformatURL} alt={tags} width="300" />
      {showModal && (
        <Modal large={largeImageURL} alt={tags} onClose={toggleModal} />
      )}
    </li>
  );
};
ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
