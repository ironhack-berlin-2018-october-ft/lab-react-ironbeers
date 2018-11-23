import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Beers extends Component {
  constructor(props)  {
    super(props)
    this.state = {
      isLoading: true,
      beers: []
    }
  }
  getBeers() {
    axios.get('https://ironbeer-api.herokuapp.com/beers/all')
    .then(response => {
      this.setState({
        isLoading: false,
        beers: response.data
      })
    })
  }
  componentDidMount() {
    this.getBeers()
  }
  render() {
    
    return (
      <div>
        <h1>Beers</h1>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.beers.map(beer => (
          <div key={beer._id} style={{clear: 'both', height: 70}}>
            <img src={beer.image_url} style={{float: "left", height: 50}}/>
            <Link to={"/beers/"+beer._id}>{beer.name}</Link>
          </div>
        ))}
      </div>
    )
  }

}