const Schema = require('mongoose').Schema

const ArtworkSchema = new Schema({
    title: String,
    artist: String,
    style: String,
    date: Number,
    medium: String,
    img: String,
    link: String,
    liked: Boolean,
    unliked: Boolean
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