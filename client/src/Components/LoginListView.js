import React, { Component } from 'react'
import { StyledLink } from './SharedComponents'
import styled from 'styled-components'

const LoginText = styled.div`
  font-family: 'Montserrat';
  font-size: 1rem;
  padding: .5rem;
  text-decoration: none;
  color: black;
  :hover {
    color: lightgray;
  }
`

export default class LoginListView extends Component {
  
    render() {
        
    const allUsers = this.props.users.map((user, index) => {
      return (
        <LoginText key={index}>
          <StyledLink to={`/users/${user._id}`} >
            {user.userName}
          </StyledLink>
        </ LoginText>
      )
    })

    return (
      <div>
        {allUsers}
      </div>
    )
  }
}
