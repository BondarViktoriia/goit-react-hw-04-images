import { Component } from 'react';
import { BiSearch } from 'react-icons/bi';



export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = e => {
    this.setState({
      query: e.currentTarget.value.toLowerCase(),
    });
  };
  handleSubmit = e => {
      e.preventDefault();
      if (this.state.query.trim() === '') {
          alert('Введите запрос');
          return;
      }
      this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <BiSearch />
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
