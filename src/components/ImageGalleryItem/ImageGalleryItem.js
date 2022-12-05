import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images: { hits } }) => {
  return (
    <ul>
      {hits.map(entry => (
        <li key={entry.id}>
          <img src={entry.webformatURL} alt={entry.tags} width="300" />
        </li>
      ))}
    </ul>
  );
};
ImageGalleryItem.propTypes = {
  images: PropTypes.objectOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGalleryItem;
