import React, { Component } from 'react'
import { StyledLink } from './SharedComponents'
import styled from 'styled-components'

const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    padding: 20px;
    background-color: black;
    color: white;
`

export default class Nav extends Component {
  render() {
    const userId = this.props.userId
    return (
      <NavBar>
        <StyledLink to={'/users'}>ART APP</StyledLink >
        <div>{this.props.username}</div>
        <StyledLink to={`/users/${userId}/edit`}>Edit User</StyledLink>
      </NavBar>
    )
  }
}
