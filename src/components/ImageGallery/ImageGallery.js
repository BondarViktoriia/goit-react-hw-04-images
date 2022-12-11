import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImageGalleryContainer } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryContainer>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
        />
      ))}
    </ImageGalleryContainer>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
