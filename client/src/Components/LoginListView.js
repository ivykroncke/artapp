import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginListView extends Component {
  
    render() {
        
    const allUsers = this.props.users.map((user, index) => {
      return (
        <div key={index}>
          <Link to={`/users/${user._id}`} >
            username: {user.userName}
          </Link>
        </div>
      )
    })

    return (
      <div>
        {allUsers}
      </div>
    )
  }
}
