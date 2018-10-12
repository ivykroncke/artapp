import styled from 'styled-components'
import { Link } from 'react-router-dom'

//Container for Dashboard.js
export const Container = styled.div`
    text-align: center;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`

export const StyledHOne = styled.h1`
    text-align: center;
    font-size: 18rem;
    padding: 6rem;
`

//BrowseArt Image Settings
export const StyledImage = styled.img`
    max-width: 75vw;
    max-height: 75vh;
`

//Top Info Bar for BrowseArt
export const TopInfo = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    padding: 20px 20px 10px 20px;
`

export const Artist = styled.div`
    text-align: left;
    font-size: 24px;
    padding-bottom: 5px;
`

export const ArtistAndTitleAndYear = styled.div`
    margin-left: 10%;
`

export const TitleAndYear = styled.div`
    text-align: left;
    font-size: 12px;
`

export const LikeButtons = styled.div`
    align-items: right;
`

export const LikeOrSkip = styled.div`
    :hover {
        color: lightgray;
    }
`

//CSS Grid for Gallery Page
export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 50vw 50vw;
  grid-gap: 1fr;
  align-items: center;
`

export const GridImage = styled.img`
  max-width: 25vw;
  padding: 3vw 3vh;
`

export const GalleryHeading = styled.div`
    width: 75%;
    padding: 20px 20px 10px 20px;
    text-align: left;
    font-size: 24px;
`


