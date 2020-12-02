import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    //set default parameters
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    }
    //generate sort options
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
      'Distance From': 'distance'
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption }, () => {
      if (this.state.term && this.state.location) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      }
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    })
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    })
  }

  handleSearch(event) {
    if (this.state.term && this.state.location) {
      this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    } else {
      alert('Please enter a business and location to search.');
    }
    event.preventDefault();
  }

  handleKeyPress(event) {
    //trigger search on 'enter' key press
    if (event.keyCode === 13) {
      document.getElementById('search').click();
    }
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} onKeyDown={this.handleKeyPress} />
          <input placeholder="Where?" onChange={this.handleLocationChange} onKeyDown={this.handleKeyPress} />
        </div>
        <div id="search" className="SearchBar-submit" onClick={this.handleSearch}>
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;