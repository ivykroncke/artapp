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
    date: 1504,
    medium: 'sculpture',
    img: 'https://www.visittuscany.com/shared/visittuscany/immagini/blogs/idea/david-michelangelo-accademia.jpg?__scale=w:1333,h:1000,t:2,q:85',
    link: 'https://www.google.com',
    liked: true,
    unliked: false
})

const soupcans = new Artwork({
    title: 'Mona Lisa',
    artist: 'Michaelangelo',
    style: 'Late Rennaissance',
    date: 1504,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
    link: 'https://www.google.com',
    liked: true,
    unliked: false
})

const julian = new User({
    userName: 'jlb_1987',
    firstName: 'Julian ',
    lastName: 'Bell',
    artworks: [
        soupcans
    ]
})

const poppy = new User({
    userName: 'poppymorrison',
    firstName: 'Poppy',
    lastName: 'Morrison',
    artworks: [
        thedavid,
        soupcans
    ]
})

User.remove({})
  .then(() => julian.save())
  .then(() => poppy.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())