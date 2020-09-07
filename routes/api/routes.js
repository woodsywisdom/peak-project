const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require("express-validator");

const { Route, Area, State, User } = require("../../db/models");
const { Op } = require('sequelize')
const { handleValidationErrors } = require("../util/validation");
const { generateToken, getCurrentUser } = require("../util/auth");


const router = express.Router();


router.get('/:id(\\d+)', asyncHandler(async function (req, res, next) {
  const route = await Route.findByPk(req.params.id, {
    include: [
      {
        model: Area,
      },
      {
        model: User,
        attributes: ['username', 'id'],
      },
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

router.post('/',
  getCurrentUser,
  asyncHandler(async (req, res) => {
    const newRoute = req.body;
    try {
      const createdRoute = await Route.create(newRoute);
      res.json(createdRoute);

    } catch (err) {
      console.error(err);
      res.end();
    }
  }));

router.put('/:id(\\d+)',
  asyncHandler( async (req, res) => {
    const {
      name,
      firstAscent,
      length,
      pitches,
      type,
      isTopRope,
    } = req.body;
    const route = await Route.findByPk(req.params.id, {
      include: [
        {
          model: Area,
        },
        {
          model: User,
          attributes: ['username', 'id'],
        },
      ],
    });
    route.name = name;
    route.firstAscent = firstAscent;
    route.length = length;
    route.pitches = pitches;
    route.type = type;
    route.isTopRope = isTopRope;
    try {
      await route.save();
      res.json(route);
    } catch (err) {
      console.error(err);
    }
  }));

router.delete('/:id(\\d+)',
  getCurrentUser,
  asyncHandler(async (req, res) => {
    const route = await Route.findByPk(req.params.id);
    if (route.creatorId === req.user.id) {
      try {
        await route.destroy();
        res.json({ success: true });
      } catch (err) {
        console.error(err);
      }
    } else {
      const err = Error("Must be the creator of a route to delete");
      err.title = "Unauthorized delete.";
      res.send(err);
    }
  }));

router.get('/twenty-classics', asyncHandler(async (req, res) => {
  const twentyClassicsIdList = [
    106459197, 105933562, 105798994, 105835705, 105848762,
    105836362, 105872293, 105884815, 105717718, 113665378,
    105732422, 105912416, 105924807, 105748496, 105872592,
    105717310, 105860676, 105748786, 105732410, 106138026,
  ];
  const routes = await Route.findAll({
    where: {
      mpId: {
        [Op.in]: twentyClassicsIdList,
      }
    }
  });
  res.json({ ...routes });
}));

module.exports = router;
