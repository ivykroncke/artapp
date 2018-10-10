import React, { Component } from 'react'

export default class BrowseArt extends Component {
    render() {
        return (
            <div>
                <img src='http://www.fillmurray.com/200/200' alt='fillmurray' />
                <div> Like </div> <div> Skip </div>
                <div>Info about this artist</div>
                {this.props.lastName}
            </div >
        )
    }
}
