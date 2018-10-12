import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const HomeBackground = styled.div`
  background-image: url('https://images.unsplash.com/photo-1485518994577-6cd6324ade8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f3f11b8b84945900bb523818d6d594c&auto=format&fit=crop&w=1544&q=80');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`

export const LoginBackground = styled.div`
  background-image: url('https://images.unsplash.com/photo-1485518994577-6cd6324ade8f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6f3f11b8b84945900bb523818d6d594c&auto=format&fit=crop&w=1544&q=80');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoginContainer = styled.div`
  background-color: rgba(235, 244, 253, 0.70);
  padding: 10%;
  text-align: center;
`

export const LoginHeading = styled.div`
  font-family: 'Roboto Slab';
  font-size: 2rem;
  padding-bottom: 1rem;
`

export const Delete = styled.div`
    color: red;
    padding-top: 2rem;
    font-style: italic;
`

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
    width: 100%;
    text-align: center;
`

export const Artist = styled.div`
    text-align: center;
    font-family: Montserrat;
    font-size: 1.75rem;
    margin: 1vh 1vw .5vh 1vw;
    padding: 1rem;
`

export const Title = styled.div`
    text-align: center;
    margin: 1vh 1vw;
    font-size: 1rem;
    font-style: italic;
    padding: 1vh 1vh 2vh 1vh;
`

export const LikeButtons = styled.div`
    align-items: right;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1.25rem;
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


