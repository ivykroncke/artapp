import React, { Component } from 'react'

export default class CreateUserView extends Component {
  state = {

    newUser: {
      userName: '',
      firstName: '',
      lastName: ''
    }

  }

  handleChange = (event) => {
    const newUser = { ...this.state.newUser }
    newUser[event.target.name] = event.target.value
    this.setState({ newUser })
  }

  addUser = (event) => {
    event.preventDefault()
    this.props.addUserToUsers(this.state.newUser)
  }

  render() {
    return (
      <div>
        <form>
          <div> Create username:
            <input type='text' name='userName' onChange={this.handleChange} />
          </div>
          <div> First Name:
            <input type='text' name='firstName' onChange={this.handleChange} />
          </div>
          <div> Last Name:
            <input type='text' name='lastName' onChange={this.handleChange} />
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
