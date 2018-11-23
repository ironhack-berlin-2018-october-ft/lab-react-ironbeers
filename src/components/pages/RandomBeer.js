import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class RandomBeer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      beer: null
    }
  }
  getBeer(){
    axios.get('https://ironbeer-api.herokuapp.com/beers/random')
    .then(response => {
      this.setState({
        isLoading: false,
        beer: response.data[0]
      })
    })
  }
  handleClick = () => {
    this.setState({
      isLoading: true
    })
  }
  componentDidMount() {
    this.getBeer()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoading && !prevState.isLoading) {
      this.getBeer()
    }
  }
  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    return (
      <div className="SingleBeer">
        <img src={this.state.beer.image_url} />
        <br/>
        <h2>{this.state.beer.name}</h2>

        <Link to="/random-beer" onClick={this.handleClick}>Get another random beer</Link>
      </div>
    )
  }
}
