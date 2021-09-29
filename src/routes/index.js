const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('index', req.query);
  // res.render('index', { title: 'Express' });
  res.json({ data: 'Hola mundo' });
});

module.exports = router;
