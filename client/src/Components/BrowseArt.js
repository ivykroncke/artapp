import React, { Component } from 'react'
import axios from 'axios';

import { StyledImage } from './SharedComponents'
import { TopInfo } from './SharedComponents'
import { Artist } from './SharedComponents'
import { ArtistAndTitleAndYear } from './SharedComponents'
import { TitleAndYear } from './SharedComponents'
import { LikeButtons } from './SharedComponents'
import { LikeOrSkip } from './SharedComponents'


export default class BrowseArt extends Component {

    state = {
        artworks: [{}]
    }

    componentDidMount = async () => {
        const token = await this.getTokenFromApi()
        await this.goToArtsyApi(token)
    }

    getTokenFromApi = async() => {
        const baseTokenUrl = `https://api.artsy.net/api/tokens/xapp_token`
        const clientId = process.env.REACT_APP_CLIENT_ID
        const clientSecret = process.env.REACT_APP_CLIENT_SECRET

        const tokenUrl = `${baseTokenUrl}/?client_id=${clientId}&client_secret=${clientSecret}`
        const tokenResponse = await axios.post(tokenUrl)

        return tokenResponse.data.token
    }

    goToArtsyApi = async (token) => {
        const url = `https://api.artsy.net/api/artists/5130e507f8d955c245000377`
        axios.defaults.headers['X-XAPP-Token'] = token
        axios.defaults.headers['accept'] = "application/vnd.artsy-v2+json"

        const response = await axios.get(url)
        console.log(response.data)
    }

    handleChange = () => {
        const artworks = [...this.state.artworks[0]]
        console.log(artworks)
    }

    saveLike = async () => {
        const artworks = [...this.state.artworks]
        artworks[0].liked = true
        this.setState({ artworks })

        const userId = this.props.userId
        await axios.post(`/api/users/${userId}/artworks`, artworks[0])
    }

    saveUnLike = async () => {
        const artworks = [...this.state.artworks]
        artworks[0].unliked = true
        this.setState({ artworks })

        const userId = this.props.userId
        await axios.post(`/api/users/${userId}/artworks`, artworks[0])
    }

    render() {

        return (
            <div>
                <TopInfo>
                    <ArtistAndTitleAndYear>
                        <Artist>{this.state.artworks[0].artist}</Artist>
                        <TitleAndYear>{this.state.artworks[0].title}, {this.state.artworks[0].year}</TitleAndYear>
                    </ArtistAndTitleAndYear>
                    <LikeButtons >
                        <LikeOrSkip onClick={this.saveLike}>Like</LikeOrSkip>
                        <LikeOrSkip onClick={this.saveUnLike}>Skip</LikeOrSkip>
                    </ LikeButtons>
                </TopInfo>
                <StyledImage src={this.state.artworks[0].img} alt={this.state.artworks[0].title} />
                {/* <div>Style: {this.state.artworks[0].style}</div>
                 */}
            </div>
        )

    }

}