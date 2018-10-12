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
        artInfo: {},
        searchArray: [
            'Tree', 'Woman', 'Madonna', 'Fruit'
        ]
    }

    componentDidMount = async () => {
        const token = await this.getTokenFromApi()
        await this.goToArtsyApi(token)
    }

    getTokenFromApi = async () => {
        const baseTokenUrl = `https://api.artsy.net/api/tokens/xapp_token`
        const clientId = process.env.REACT_APP_CLIENT_ID
        const clientSecret = process.env.REACT_APP_CLIENT_SECRET

        const tokenUrl = `${baseTokenUrl}/?client_id=${clientId}&client_secret=${clientSecret}`
        const tokenResponse = await axios.post(tokenUrl)

        return tokenResponse.data.token
    }

    goToArtsyApi = async (token) => {
        let searchArray = this.state.searchArray
        const arrayLength = this.state.searchArray.length
        const getRandomInteger = (max) => {
            return Math.floor(Math.random() * Math.floor(max))}
        const i = getRandomInteger(arrayLength)

        const url = `https://api.artsy.net/api/search?q=${searchArray[i]}+more:pagemap:metatags-og_type:artworks`
        axios.defaults.headers['X-XAPP-Token'] = token
        axios.defaults.headers['accept'] = "application/vnd.artsy-v2+json"
        const response = await axios.get(url)
        this.artsyToState(response.data._embedded.results[0])

        searchArray = [...this.state.searchArray]
        searchArray.splice(i, 1)
        this.setState({ searchArray: searchArray })
    }

    artsyToState = (response) => {
        const artInfo = response
        let newInfo = {
            title: artInfo.title,
            medium: artInfo.medium,
            date: artInfo.date,
            img: artInfo._links.thumbnail.href
        }
        this.setState({ artInfo: newInfo })
    }

    saveLike = async () => {
        const artInfo = { ...this.state.artInfo }
        artInfo.liked = true
        this.setState({ artInfo })
        const userId = this.props.userId
        await axios.post(`/api/users/${userId}/artworks`, artInfo)
        const token = await this.getTokenFromApi()
        await this.goToArtsyApi(token)
    }

    saveUnLike = async () => {
        const artInfo = { ...this.state.artInfo }
        artInfo.unliked = true
        this.setState({ artInfo })
        const userId = this.props.userId
        await axios.post(`/api/users/${userId}/artworks`, artInfo)
        const token = await this.getTokenFromApi()
        await this.goToArtsyApi(token)
    }

    render() {

        return (
            <div>
                <div> </div>
                <TopInfo>
                    <ArtistAndTitleAndYear>
                        <Artist>Artist</Artist>
                        <TitleAndYear>{this.state.artInfo.title}, {this.state.artInfo.date}</TitleAndYear>
                    </ArtistAndTitleAndYear>
                    <LikeButtons >
                        <LikeOrSkip onClick={this.saveLike}>Like</LikeOrSkip>
                        <LikeOrSkip onClick={this.saveUnLike}>Skip</LikeOrSkip>
                    </ LikeButtons>
                </TopInfo>
                <StyledImage src={this.state.artInfo.img} alt={this.state.artInfo.title} />
            </div>
        )

    }

}