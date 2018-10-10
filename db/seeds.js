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
    liked: true,
    unliked: false
})

const soupcans = new Artwork({
    title: 'Mona Lisa',
    artist: 'Michaelangelo',
    style: 'Late Rennaissance',
    year: 1504,
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