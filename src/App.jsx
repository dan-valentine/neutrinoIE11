import { Component } from 'react'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  state = {
    name: 'testneutrino'
  };

  componentDidMount () {
    axios.get('/api/people/1/').then(res =>
      this.setState({
        name: JSON.stringify(res.data)
      })
    )
  }
  render () {
    return (
      <div className='App'>
        <h1>Welcome to {this.state.name}</h1>
      </div>
    )
  }
}
