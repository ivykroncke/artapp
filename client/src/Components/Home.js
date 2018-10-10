import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './SharedComponents'
import { styledHOne } from './SharedComponents'

export default class Home extends Component {
  render() {
    return (
      <Container>
        <h1>HOME</h1>
        <div>
          <Link to={`/users`}>Login</Link>
        </div>
      </Container>
    )
  }
}
