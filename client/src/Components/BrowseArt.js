import React, { Component } from 'react'
import axios from 'axios';

import { StyledImage } from './SharedComponents'
import { TopInfo } from './SharedComponents'
import { Artist } from './SharedComponents'
import { LikeButtons } from './SharedComponents'
import { LikeOrSkip } from './SharedComponents'
import { Icon, Button } from 'semantic-ui-react'


export default class BrowseArt extends Component {

    state = {
        artInfo: {},
        searchArray: [
            'Madonna', 'Still Life', 'Guernica', 'Landscape', 'Night', 'Man', 'Flower',
            'DeKooning', 'Warhol', 'Titian', 'Manet', 'Fraggonnard', 'Bird', 'Field',
            'Blue', 'America', 'Star', 'Meninas', 'moiselle', 'Sunday', 'Night',
            'Dinner', 'Wave', 'Olympia', 'Kiss', 'Luncheon', 'Saville', 'Freud',
            'Jupiter', 'Persistence', 'Pop', 'Hirst', 'Famil', 'king', 'Scream', 'Iris',
            'Ansel', 'Maplethorpe', 'Mehretu', 'Peyton', 'Boticelli', 'Saturn', 'Goya'
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
            return Math.floor(Math.random() * Math.floor(max))
        }
        const i = getRandomInteger(arrayLength)
        console.log(searchArray[i])
        const url = `https://api.artsy.net/api/search?q=${searchArray[i]}`
        axios.defaults.headers['X-XAPP-Token'] = token
        axios.defaults.headers['accept'] = "application/vnd.artsy-v2+json"
        const response = await axios.get(url)
        this.artsyToState(response.data._embedded.results[0])
        console.log(response.data._embedded.results[0])

        searchArray = [...this.state.searchArray]
        searchArray.splice(i, 1)
        this.setState({ searchArray: searchArray })
    }

    artsyToState = (response) => {
        if (!response) {
            this.goToArtsyApi()
        }
        const artInfo = response
        console.log(artInfo)
        let img = ''
        let link = ''
        if (artInfo._links.thumbnail) {
            img = artInfo._links.thumbnail.href
        } else {
            img = 'this was null'
        }
        if (artInfo._links.permalink) {
            link = artInfo._links.permalink.href
        } else {
            link = 'this was null'
        }
        
        let newInfo = {
            title: artInfo.title || 'default art title',
            medium: artInfo.medium || 'this was null',
            description: artInfo.description || 'this was null',
            date: artInfo.date || 'this was null',
            img,
            link  
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

    callToggle = () => {
        this.props.toggleBrowseOrGallery()
    }

    render() {
        return (
            <div>
                <TopInfo>
                    <Artist>{this.state.artInfo.title}</Artist>
                </TopInfo>

                <StyledImage src={this.state.artInfo.img} alt={this.state.artInfo.title} />

                <LikeButtons >
                    <LikeOrSkip onClick={this.saveLike}><Icon name='thumbs up' size='large' /></LikeOrSkip>
                    <LikeOrSkip onClick={this.saveUnLike}><Icon name='thumbs down' size='large' /></LikeOrSkip>
                </ LikeButtons>

                <Button basic color='black' onClick={this.callToggle}>
                    View Your Artwork
                </Button>
            </div>
        )
    }
}
