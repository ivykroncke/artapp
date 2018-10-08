require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
)

const { User, Artwork } = require('./model')

const thedavid = new Artwork({
    title: 'The David',
    artist: 'Michaelangelo',
    style: 'Italian Renaissance/Realism',
    year: 1504
})

const soupcans = new Artwork({
    title: 'Campbell\'s Soup Cans',
    artist: 'Andy Warhol',
    style: 'Pop',
    year: 1962
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