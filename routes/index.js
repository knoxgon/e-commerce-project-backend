const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({message: 'Initial homepage'})
});

module.exports = router;
