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
  margin-left: 2vw;
  font-family: 'Roboto Slab';
  font-size: 2rem;
  text-decoration: none;
  color: white;
`

const UserLink = styled(Link)`
  margin: 2vw;
  font-family: 'Montserrat';
  font-size: 1rem;
  color: white;
`

export default class Nav extends Component {
  render() {
    const userId = this.props.userId
    return (
      <NavBar>
        <NavSiteTitle to={'/users'}>artfind.</NavSiteTitle >
        <div> {this.props.username}
          <UserLink to={`/users/${userId}/edit`}>
            <Icon fitted name='edit' size='large' /> </UserLink>
        </div>
      </NavBar>
    )
  }
}
