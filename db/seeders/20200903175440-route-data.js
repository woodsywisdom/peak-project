'use strict';
const fetch = require('node-fetch');

const devilsTowerIdList = [
  105715511, 106062246, 105715541, 105715646, 113654901,
  105714902, 107178574, 107182908, 105715550, 105715613,
  107154062, 105714788, 105715544, 105714830, 105714794,
  105715556, 107300418, 106397694, 105715094, 107801731,
  107157326, 117558551, 107218457, 106202687,
];

const twentyClassicsIdList = [
  106459197, 105933562, 105798994, 105835705, 105848762,
  105836362, 105872293, 105884815, 105717718, 113665378,
  105732422, 105912416, 105924807, 105748496, 105872592,
  105717310, 105860676, 105748786, 105732410, 106138026,
];

const routeGetter = async (idList, areaId) => {

  const requestBuilder = (list) => {
    return (`https://www.mountainproject.com/data/get-routes?routeIds=${list.toString(',')}&key=106405779-732621ae8d7f62d053f134351480e424`)
  };

  const routesJSON = await fetch(requestBuilder(idList));
  const routesObj = await routesJSON.json();
  let seeds = [];
  for (let route of routesObj.routes) {
    let seed = {
      areaId,
      mpId: route.id,
      name: route.name,
      grade: route.rating,
      type: route.type,
      rating: (route.stars - 1),
      length: null,
      creatorId: 1,
      location: route.location.join('>'),
    };
    route.pitches ? seed.pitches = route.pitches : seed.pitches = null,
    seeds.push(seed);
  };
  return seeds;
}
// ...[
//   // { name: "", areaId:  , grade: "", rating:  , type: "", length:  , pitches:  , creatorId: 1 , approach: "", description: ""},
//   { name: "Soler", areaId: 2, grade: "5.9", rating: 3.5, type: "Trad", length: 280, pitches: 2, creatorId: 1, approach: "", description: "Soler is a wonderful two pitch route climbing twin fingercracks in a dihedral. It is probably the easiest summit route on the tower that isn't wider than hands, and may feel easier than the 7s and 8s to those who don't know how to jam." },
//   { name: "TAD", areaId: 2, grade: "5.7", rating: 2, type: "Trad", length: 300, pitches: 2, creatorId: 1, approach: "", description: "An excellent route that is the probably the easiest way to the top of the tower. Both pitches are long and fairly sustained, and the second is easily one of the best moderate hand cracks on the tower." },
//   { name: "El Cracko Diablo", areaId: 2, grade: "5.8", rating: 3.5, type: "Trad", length: null, pitches: 2, creatorId: 1, approach: "", description: "See approach for TAD and Solar. This route starts to the right of TAD, and is in my opinion by far the best route of the three mentioned. Pitch one is a good lead of about 5.7 and is well suited for those getting into trad climbing on the Tower. Pitch two is longer and is very sustained 5.8 climbing. Both pitches swollow up gear and you can protect pitch 2 with as many hand-fist sized hexes and cams as you can carry. The crux will prove to be the small bulge 2/3 up on pitch 2 and the slightly narrowing crack as it tapers toward the top of the route where it ends at the Meadows. NOTE: This route can be rappelled with two ropes in two pitches, but it's recommended that you rappell in three pitches, the third being at the anchors at the ledge about 25-30 feet up from the start of the route. Rappelling in two will increase the likelyhood of having your ropes hung up on the aformentioned ledge when it is pulled." },
// ]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const routes1 = await routeGetter(twentyClassicsIdList, 1);
    const routes2 = await routeGetter(devilsTowerIdList, 3);
    return queryInterface.bulkInsert('Routes', [...routes1, ...routes2], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Routes', null, {});
  }
};
