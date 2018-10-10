import React, { Component } from 'react'
import axios from 'axios';
// import axios from 'axios'

export default class EditUserView extends Component {

    state = {
        user: {}
    }

    getUser = async (event) => {
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
                <form>
                    Edit User
                    <div>
                        <input name='userName' type='text' placeholder={this.state.userName} />
                    </div>
                    <div>
                        <input name='firstName' type='text' placeholder={this.state.firstName} />
                    </div>
                    <div>
                        <input name='lastName' type='text' placeholder={this.state.lastName} />
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
