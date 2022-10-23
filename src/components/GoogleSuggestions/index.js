// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    isSearch: '',
  }

  onTakingInput = event => {
    const {isSearch} = this.state
    this.setState({isSearch: event.target.value})
    console.log(isSearch)
  }

  onUpdateSuggestion = id => {
    const {suggestionsList} = this.props
    const filteredData = suggestionsList.filter(
      eachArray => eachArray.id === id,
    )
    console.log(filteredData)
    this.setState({isSearch: filteredData})
  }

  render() {
    const {suggestionsList} = this.props
    const {isSearch} = this.state
    console.log(isSearch)
    const searchResults = suggestionsList.filter(eachSearch =>
      eachSearch.suggestion.toLowerCase().includes(isSearch.toLowerCase()),
    )
    console.log(searchResults)
    //
    return (
      <div className="main-container">
        <div className="sub-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="img"
          />
          <div className="search-container">
            <div className="search-bar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="search-img"
              />
              <input
                type="search"
                onChange={this.onTakingInput}
                value={isSearch}
              />
            </div>
            <ul>
              {searchResults.map(eachUser => (
                <SuggestionItem
                  suggestionProp={eachUser}
                  key={eachUser.id}
                  onTodo={this.onUpdateSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
