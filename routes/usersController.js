const router = require('express').Router({ mergeParams: true })
const { User } = require('../db/model')

//Show All Users
router.get('/', async (req, res) => {
  const users = await User.find()
  res.send(users)
})

//Show One
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  res.send(user)
})

module.exports = router;
