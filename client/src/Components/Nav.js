import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;
    background-color: black;
    color: white;
`

const NavSiteTitle = styled(Link)`
  margin-left: 2rem;
  font-family: 'Roboto Slab';
  font-size: 2rem;
  text-decoration: none;
  color: white;
`

const UserLink = styled(Link)`
  margin-right: 2rem;
  font-family: 'Montserrat';
  color: white;
`

export default class Nav extends Component {
  render() {
    const userId = this.props.userId
    return (
      <NavBar>
        <NavSiteTitle to={'/users'}>artfind.</NavSiteTitle >
        <UserLink to={`/users/${userId}/edit`}>
          {this.props.username} <Icon fitted name='edit'/>
        </UserLink>
      </NavBar>
    )
  }
}
