
import { Component } from "react";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader";
import SearchBar from "./Searchbar/Searchbar";
import pixabayApi from './services/pixabay-api'
import Button from "./Button";
import { Request,ErrorMessage } from "./ImageGallery/ImageGallery.styled";


export class App extends Component{
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: null,
    page:1,
  }

  handleFormSubmit = query => {
    this.setState({ query,images:[],page:1 })
    
  }

  componentDidUpdate(prevProps, prevState) {
     
  
    if (prevState.query !== this.state.query) {
        this.setState({isLoading:true,error:null})
      console.log('new request');
          pixabayApi
        .fetchImages(this.state.query, this.state.page)
       
        .then(images => this.setState({ images:images.hits})).catch(error => this.setState({ error })).finally(()=>this.setState({isLoading:false}))
        
    } 

  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
 pixabayApi
        .fetchImages(this.state.query, this.state.page)
       
   .then(data => {
     this.setState(prevState => ({
       images: [...prevState.images, ...data.hits],
     }))
   } 
   ).catch(error => this.setState({ error })).finally(() => this.setState({ isLoading: false }))
        
  };

  render() {
    const {isLoading,query,images,error} = this.state
    return (
        <>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader/>}
        {!query && <Request>Enter a request</Request>}
        {error && <ErrorMessage> Nothing found</ErrorMessage>}
        {images !== [] ? <ImageGallery images={images} />: <ErrorMessage> Nothing found</ErrorMessage>}
        {images.length >= 12 && <Button onClick={this.loadMore} />}
        
        
    </>
    )
  }  
}

