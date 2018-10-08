const router = require('express').Router({ mergeParams: true })
const { User, Artwork } = require('../db/model')

//Show All Artworks that Belong to a User
router.get('/', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const artworks = user.artworks
  res.send(artworks)
});

//Show One Artwork
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.userId)
  const artwork = user.artworks.id(req.params.id)
  res.send(artwork)
})

//Add Artwork, Post to Database
router.post('/', (req, res) => {
  User.findById(req.params.userId)
  .then(user => {
    const newArtwork = new Artwork(req.body)
    console.log(newArtwork)
    user.artworks.push(newArtwork)
    return user.save()
  })
  .then(user => {
    res.send(user)
  })
})

//Delete Artwork, Remove from Database
router.delete('/:id', (req, res) => {
  User.findById(req.params.userId)
  .then(user => {
    const artworksNotDeleting = user.artworks.filter(artwork => {
      return artwork._id != req.params.id
    })
    user.artworks = artworksNotDeleting
    return user.save()
  })
  .then(user => {
    res.send(user)
  })
})

module.exports = router;