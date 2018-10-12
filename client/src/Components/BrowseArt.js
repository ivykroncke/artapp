import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

import { StyledImage } from './SharedComponents'
import { TopInfo } from './SharedComponents'
import { Artist } from './SharedComponents'
import { LikeButtons } from './SharedComponents'
import { LikeOrSkip } from './SharedComponents'

import { Icon } from 'semantic-ui-react'


export default class BrowseArt extends Component {

    state = {
        artInfo: {},
        searchArray: [
            'Madonna', 'Still Life', 'Guernica', 'Landscape', 'Night', 'Man', 'Floral',
            'DeKooning', 'Warhol', 'Titian', 'Manet', 'Fraggonnard', 'Bird', 'Field',
            'Blue', 'America', 'Starry', 'Meninas', 'Demoiselles', 'Sunday', 'Night',
            'Cafe', 'Wave', 'Olympia', 'Kiss', 'Luncheon', 'Saville', 'Freud', 'Venus',
            'Venus', 'Peristence', 'Pop', 'Hirst', 'Ermine', 'Washington', 'Scream', 'Iris',
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
            return Math.floor(Math.random() * Math.floor(max))}
        const i = getRandomInteger(arrayLength)

        const url = `https://api.artsy.net/api/search?q=${searchArray[i]}`
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
        console.log(artInfo)
        let newInfo = {
            title: artInfo.title,
            medium: artInfo.medium,
            description: artInfo.description,
            date: artInfo.date,
            img: artInfo._links.thumbnail.href,
            link: artInfo._links.permalink.href
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
        const moreInfo = this.state.artInfo.link
        console.log(moreInfo)
        return (
            <div>
                <TopInfo>
                    <Artist>{this.state.artInfo.title}</Artist>
                </TopInfo>

                <StyledImage src={this.state.artInfo.img} alt={this.state.artInfo.title} 
                    href={`${moreInfo}`}/>

                <LikeButtons >
                    <LikeOrSkip onClick={this.saveLike}><Icon name='thumbs up' size='large' /></LikeOrSkip>
                    <LikeOrSkip onClick={this.saveUnLike}><Icon name='thumbs down' size='large' /></LikeOrSkip>
                </ LikeButtons>
                <div>
                    <div> {this.state.artInfo.description}</div>
                    <a href={`${moreInfo}`} target='_blank'> More Information </a>
                </div>

            </div>
        )

    }

}