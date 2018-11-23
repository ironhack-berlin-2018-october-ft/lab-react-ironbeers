import React, { Component } from 'react'
import axios from 'axios'

export default class SingleBeer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      beer: null
    }
  }
  getBeer(){
    let id = this.props.match.params.id
    axios.get('https://ironbeer-api.herokuapp.com/beers/single/'+id)
    .then(response => {
      this.setState({
        isLoading: false,
        beer: response.data
      })
    })
  }
  componentDidMount() {
    this.getBeer()
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
      </div>
    )
  }
}
