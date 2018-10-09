import React, { Component } from 'react'

export default class CreateUserView extends Component {
  state = {
    newUser: {

    }
  }

  handleChange = (event) => {
    const eventValue = event.target.value
    const eventName = event.target.name
    const newUser = { ...this.state.newUser }
    newUser[eventName] = eventValue
    this.setState({ newUser })
  }

  addUser = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <input name='username' type='text' onChange ={this.handleChange}/>
          </div>
          <div>
            <input type='submit'
              value='Create New User'
              onClick={this.addUser} />
          </div>
        </form>
      </div>
    )
  }
}
