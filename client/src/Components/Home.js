import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { HomeBackground } from './SharedComponents'


const SiteTitle = styled.h1`
  position: 25%;
  color: white;
  font-size: 5rem;
  font-family: 'Roboto';
  padding-left: 1rem;
  margin: .5rem;
`

const StyledLink = styled(Link)`
  font-size: 2rem;
  font-family: 'Montserrat';
  text-decoration: none;
  color: white;
  padding-left: 2rem;
  padding-bottom: 2rem;
  :hover {
    color: lightgray;
  }
`

export default class Home extends Component {
  render() {
    return (
      <HomeBackground>
        <SiteTitle>artfind.</ SiteTitle>
        <StyledLink to={`/users`}>sign in</ StyledLink>
      </HomeBackground>
    )
  }
}
