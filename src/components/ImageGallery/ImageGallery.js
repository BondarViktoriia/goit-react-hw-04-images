import ImageGalleryItem from "components/ImageGalleryItem";
import {ImageGalleryContainer} from './ImageGallery.styled'

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

export default ImageGallery