const Schema = require('mongoose').Schema

const ArtworkSchema = new Schema({
    title: String,
    artist: String,
    style: String,
    year: Number,
    img: String
})

const UserSchema = new Schema ({
    userName: String,
    firstName: String,
    lastName: String,
    artworks: [ArtworkSchema]
})

module.exports = {
    UserSchema,
    ArtworkSchema
}