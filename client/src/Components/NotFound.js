import React, { Component } from 'react'
import { LoginBackground } from './SharedComponents'
import { LoginContainer} from './SharedComponents'
import { LoginHeading} from './SharedComponents'

export default class NotFound extends Component {
  render() {
    return (
      <LoginBackground>
        <LoginContainer>
        <LoginHeading>
          404! Page Not Found!
        </LoginHeading>
        </LoginContainer>
      </LoginBackground>
    )
  }
}
