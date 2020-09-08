const express = require('express');
const asyncHandler = require('express-async-handler');

const { Area, State } = require("../../db/models");

const router = express.Router();

router.get('/all', asyncHandler(async (req, res) => {
  const states = await State.findAll({
    include: Area,
  });
  if (!states) {
    const err = new Error('States list not found');
    err.status = 404;
    next(err);
    return;
  }
  res.json({ states });
}));

module.exports = router;
