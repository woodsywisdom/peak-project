const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require("express-validator");

const { Route, Area, State } = require("../../db/models");
const { handleValidationErrors } = require("../util/validation");
const { generateToken } = require("../util/auth");


const router = express.Router();


router.get('/:id(\\d+)', asyncHandler(async function (_req, res, next) {
  const route = await Route.findByPk(req.params.id, {
    include: [
      {
        model: Area,
      },
      {
        model: State,
        attributes: ['id', 'name'],
      }
    ]
  });
  if (!route) {
    const err = new Error('Route not found');
    err.status = 404;
    next(err);
    return;
  }
  res.json({ route });
}));

module.exports = router;
