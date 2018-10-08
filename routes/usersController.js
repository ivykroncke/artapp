const router = require('express').Router({ mergeParams: true })

router.get('/', function(req, res) {
  res.send('users controller hit');
});

module.exports = router;
