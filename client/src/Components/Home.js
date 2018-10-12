import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { HomeBackground } from './SharedComponents'

const SiteTitle = styled.h1`
  color: white;
  font-size: 5rem;
  font-family: 'Roboto';
  padding-left: 1rem;
  margin: 0rem;
  text-shadow: .5rem .5rem 1rem rgba(103, 78, 69, 0.3);
`
//there is another StyledLink in SharedComponents
//this one is unique to this page
const StyledLink = styled(Link)`
  font-size: 2rem;
  font-family: 'Montserrat';
  text-decoration: none;
  color: white;
  padding: 0rem 2rem 3rem  2rem;
  :hover {
    color: lightgray;
  }
  text-shadow: .5rem .5rem 1rem rgba(103, 78, 85, 0.3);
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
