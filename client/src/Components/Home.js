import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Container } from './SharedComponents'


const HomeBackground = styled.div`
  background-image: url('https://images.unsplash.com/photo-1485518994577-6cd6324ade8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f3f11b8b84945900bb523818d6d594c&auto=format&fit=crop&w=1544&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* :hover {
    transform: scale (1.2);
    transition: 10s;
  } */
`

const SiteTitle = styled.h1`
  font-size: 10rem;
  font-family: 'Roboto Slab';
`

const StyledLink = styled(Link)`
  font-size: 5rem;
  font-family: 'Open Sans';
  text-decoration: none;
  color: inherit;
`

export default class Home extends Component {
  render() {
    return (
      <HomeBackground>
        <SiteTitle>ART APP</ SiteTitle>
        <StyledLink to={`/users`}>Login</ StyledLink>
      </HomeBackground>
    )
  }
}
