import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: block;
  justify-content: center;
  justify-items: center;
`;

export const Request = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin: auto;
  margin-top: 40px;
  justify-content: center;
  width: 400px;
  padding: 15px;
  color: green;
`;

export const ErrorMessage = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin: auto;
  margin-top: 40px;
  justify-content: center;
  width: 400px;
  padding: 15px;
  color: green;
`;

export const ImageGalleryContainer = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;

  margin-right: auto;
`;
