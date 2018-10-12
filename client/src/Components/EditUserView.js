import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';

import { LoginBackground } from './SharedComponents'
import { LoginContainer } from './SharedComponents'
import { LoginHeading } from './SharedComponents'
import { SpaceDiv } from './SharedComponents'

import { Button, Form, Confirm } from 'semantic-ui-react'

export default class EditUserView extends Component {

    state = {
        user: {},
        redirectToId: false,
        open: false
    }

    getUser = async () => {
        const userId = this.props.match.params.userId
        const response = await axios.get(`/api/users/${userId}`)
        this.setState({
            user: response.data
        })
    }

    componentDidMount = () => {
        this.getUser()
    }

    handleChange = (event) => {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    submitChanges = async (event) => {
        event.preventDefault()
        const userId = this.props.match.params.userId
        const editedUser = this.state.user
        await axios.put(`/api/users/${userId}`, editedUser)
        this.setState({ redirectToId: true })
    }

    handleDelete = async (userId) => {
        await axios.delete(`/api/users/${userId}`)
        await this.getUser()
        this.setState({ redirectToUsers: true })
    }


    open = () => this.setState({ open: true })

    render() {
        const userId = this.props.match.params.userId
        if (this.state.redirectToId) {
            return (<Redirect to={`/users/${userId}`} />)
        }
        if (this.state.redirectToUsers) {
            return (<Redirect to={`/users/`} />)
        }

        return (
            <LoginBackground>
                <LoginContainer>
                    <LoginHeading>Edit User</LoginHeading>
                    <Form>
                        <Form.Field>
                            <label>Username</label>
                            <input name='userName'
                                type='text'
                                placeholder={this.state.user.userName}
                                onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>First Name</label>
                            <input name='firstName'
                                type='text'
                                placeholder={this.state.user.firstName}
                                onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input name='lastName'
                                type='text'
                                placeholder={this.state.user.lastName}
                                onChange={this.handleChange} />
                        </Form.Field>
                        <SpaceDiv />
                        <Button basic color='black'
                            type='submit'
                            value='Submit Changes'
                            onClick={this.submitChanges} >
                            Submit Changes
                        </Button>
                        <SpaceDiv />
                        <div>
                            <Button inverted color='red' onClick={this.open}>Delete this User</Button>
                            <Confirm open={this.state.open} onCancel={this.close} onConfirm={() => this.handleDelete(userId)} />
                        </div>
                    </Form>
                </LoginContainer>


            </ LoginBackground>
        )
    }
}
