import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

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
        <Form>
          <Form.Field>
            <label> Username </label>
            <input type='text' name='userName' onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label> First Name </label>
            <input type='text' name='firstName' onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label> Last Name </label>
            <input type='text' name='lastName' onChange={this.handleChange} />
          </Form.Field>
          <Button basic color='black' type='submit'
            value='Create New User'
            onClick={this.addUser}> Submit</Button>
        </Form>
      </div>
    )
  }
}
