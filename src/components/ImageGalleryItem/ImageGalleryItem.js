import ImageCard from 'components/ImageCard/ImageCard';
import { Component } from 'react';
import { GalleryContainer } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  render() {
    const { images: { hits }} = this.props;

    return (
      <>
        <GalleryContainer>
          {hits.map(entry => (
            <ImageCard
              entry={entry}
              toggleModal={this.toggleModal}
              isModalOpen={this.state.isModalOpen}
              key={entry.id}
            />
          ))}
        </GalleryContainer>
      </>
    );
  }
}

export default ImageGalleryItem;
