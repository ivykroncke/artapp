const mongoose = require('mongoose')
const { UserSchema, ArtworkSchema } = require('./schema')

const UserModel = mongoose.model('User', UserSchema)
const ArtworkModel = mongoose.model('Artwork', ArtworkSchema)

module.exports = {
    User: UserModel,
    Artwork: ArtworkModel
}