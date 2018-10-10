require('dotenv').config()
const mongoose = require('mongoose')

//These artworks are in the seeds to represent artworks that
//these users have already selected. For them to be selected,
//they must have a liked: true or unliked: true value.
//Otherwise they would not 'belong to' the users or be
//stored in the users API.

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
)

const { User, Artwork } = require('./model')

const thedavid = new Artwork({
    title: 'The David',
    artist: 'Michaelangelo',
    style: 'Italian Renaissance/Realism',
    year: 1504,
    img: 'https://www.visittuscany.com/shared/visittuscany/immagini/blogs/idea/david-michelangelo-accademia.jpg?__scale=w:1333,h:1000,t:2,q:85',
    liked: true,
    unliked: false
})

const soupcans = new Artwork({
    title: 'Mona Lisa',
    artist: 'Michaelangelo',
    style: 'Late Rennaissance',
    year: 1504,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    liked: true,
    unliked: false
})

const maria = new User({
    userName: 'tiamaria',
    firstName: 'Maria',
    lastName: 'Gaby',
    artworks: [
        soupcans
    ]
})

const michael = new User({
    userName: 'bustersbrother',
    firstName: 'Michael',
    lastName: 'Bluth',
    artworks: [
        thedavid,
        soupcans
    ]
})

User.remove({})
  .then(() => maria.save())
  .then(() => michael.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())