const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require("express-validator");

const { Route, Area, State } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");


const router = express.Router();


router.get('/:id(\\d+)', asyncHandler(async function (req, res, next) {
  const area = await Area.findByPk(req.params.id, {
    include: [
      {
        model: State,
        attributes: ['name', 'id'],
      },
      {
        model: Route,
        attributes: ['name', 'id', 'grade', 'rating', 'type'],
      },
    ],
  });
  if (!area) {
    const err = new Error('Route not found');
    err.status = 404;
    next(err);
    return;
  }
  res.json({ area });
}));

module.exports = router;
