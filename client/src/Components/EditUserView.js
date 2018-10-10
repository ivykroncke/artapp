import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios';
// import axios from 'axios'

export default class EditUserView extends Component {

    state = {
        user: {},
        redirect: false
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
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    submitChanges = async (event) => {
        event.preventDefault()
        const userId = this.props.match.params.userId
        const editedUser = this.state.user
        await axios.put(`/api/users/${userId}`, editedUser)
        this.setState({ redirect: true })
    }

    render() {
        const userId = this.props.match.params.userId
        if(this.state.redirect) {
            return ( <Redirect to={`/users/${userId}`} /> )
        }

        return (
            <div>
                <h1>Edit User</h1>
                <form>
                    <div> Edit Username:
                        <input name='userName' 
                        type='text' 
                        placeholder={this.state.user.userName} 
                        onChange={this.handleChange}/>
                    </div>
                    <div>  Edit First Name:
                        <input name='firstName' 
                        type='text' 
                        placeholder={this.state.user.firstName} 
                        onChange={this.handleChange}/>
                    </div>
                    <div> Edit Last Name:
                        <input name='lastName' 
                        type='text' 
                        placeholder={this.state.user.lastName} 
                        onChange={this.handleChange}/>
                    </div>
                    <input
                        type='submit'
                        value='Submit Changes'
                        onClick={this.submitChanges}
                    />
                </form>
            </div>
        )
    }
}
