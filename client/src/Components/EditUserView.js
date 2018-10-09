import React, { Component } from 'react'
import axios from 'axios'

export default class EditUserView extends Component {


    render() {
        return (
            <div>
                <form>
                    Edit User
                    <div>
                        <input name='userName' type='text' placeholder={this.props.username} />
                    </div>
                    <div>
                        <input name='firstName' type='text' placeholder={this.props.firstName} />
                    </div>
                    <div>
                        <input name='lastName' type='text' placeholder={this.props.lastName} />
                    </div>
                </form>
            </div>
        )
    }
}
