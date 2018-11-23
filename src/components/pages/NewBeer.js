import React, { Component } from 'react'
import axios from 'axios';

export default class NewBeer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      tagline: '',
      description: '',
      first_brewed: '',
      brewers_tips: '',
      attenuation_level: '',
      contributed_by: '',
      message: null,
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    // To stop the redirection
    e.preventDefault()
    axios.post('https://ironbeer-api.herokuapp.com/beers/new', {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      first_brewed: this.state.first_brewed,
      brewers_tips: this.state.brewers_tips,
      attenuation_level: this.state.attenuation_level,
      contributed_by: this.state.contributed_by,
    })
    .then(response => {
      console.log(response.data)
      this.setState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: '',
        contributed_by: '',
        message: response.data.message,
      })
      setTimeout(() => {
        this.setState({
          message: null
        })
      }, 2000)
    })
  }
  render() {
    return (
      <div>
        <h1>Create New Beer</h1>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
          <br />

          Tagline:
          <input type="text" name="tagline" value={this.state.tagline} onChange={this.handleChange}/>
          <br/>

          Description:
          <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
          <br/>

          First brewed:
          <input type="text" name="first_brewed" value={this.state.first_brewed} onChange={this.handleChange}/>
          <br/>

          brewers_tips:
          <input type="text" name="brewers_tips" value={this.state.brewers_tips} onChange={this.handleChange}/>
          <br/>

          Attenuation level:
          <input type="text" name="attenuation_level" value={this.state.attenuation_level} onChange={this.handleChange}/>
          <br/>

          Contributed by:
          <input type="text" name="contributed_by" value={this.state.contributed_by} onChange={this.handleChange}/>
          <br/>

          <button>Create 🍺</button>
        </form>

        {this.state.message && (
          <div style={{border: "1px solid black"}}>
            <h2>Message</h2>
            <p>{this.state.message}</p>
          </div>
        )}
      </div>
    )
  }
}
