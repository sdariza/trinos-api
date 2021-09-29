const express = require('express');
const ApiError = require('../utils/ApiErros');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // throw new ApiError('Bad request', 400);
  res.json({ data: "My user's route" });
});

module.exports = router;
