import React, { Component } from 'react'
import axios from 'axios';
// import axios from 'axios'

export default class EditUserView extends Component {

    state = {
        user: {}
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

    render() {

        return (
            <div>
                <h1>Edit User</h1>
                <form>
                    <div> Edit Username:
                        <input name='userName' type='text' placeholder={this.state.user.userName} />
                    </div>
                    <div>  Edit First Name:
                        <input name='firstName' type='text' placeholder={this.state.user.firstName} />
                    </div>
                    <div> Edit Last Name:
                        <input name='lastName' type='text' placeholder={this.state.user.lastName} />
                    </div>
                    <input
                        type='submit'
                        value='Submit Changes'
                        onClick={this.getUser}
                    />
                </form>
            </div>
        )
    }
}
