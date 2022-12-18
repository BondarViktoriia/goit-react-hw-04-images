import { useState,useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader';
import SearchBar from './Searchbar/Searchbar';
import pixabayApi from './services/pixabay-api';
import Button from './Button';
import { Request, ErrorMessage } from './ImageGallery/ImageGallery.styled';

export const App = () => {

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('idle');
  
  const handleFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setStatus('idle');
    setTotal(0)
  }

  useEffect(() => {
    if (query) {
      getApiByName();
    }

    async function getApiByName() {
      try {
        setIsLoading(true);
        const data = await pixabayApi.fetchImages(query, page);
        if (!data.hits.length) {
          setIsLoading(false);
          setStatus('resolved')
           return alert("Sorry, we not found images...");
        }
        setImages(prevState => [...prevState, ...data.hits]);
        setStatus('resolved');
        setIsLoading(false);
        setTotal(data.total)
        return;
      } catch (error) {
        setError(error.message);
      }
    }
  }, [query, page]);

  
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);

  }
  
      return (
      <>
        <SearchBar onSubmit={handleFormSubmit} />
        {isLoading && <Loader />}
        {!query && <Request>Enter a request</Request>}
        {error && <ErrorMessage> {error.message}</ErrorMessage>}
        {status === 'resolved' && <ImageGallery images={images} />}
        {status === 'resolved' && total === 0 && (
          <ErrorMessage>Nothing Found</ErrorMessage>
        )}
        {images.length >= 12 && <Button onClick={loadMore} />}
      </>
    );
}

