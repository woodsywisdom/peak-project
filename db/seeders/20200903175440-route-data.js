'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Routes', [
        // { name: "", areaId:  , grade: "", rating:  , type: "", length:  , pitches:  , creatorId: 1 , approach: "", description: ""},
        { name: "Soler", areaId: 2 , grade: "5.9", rating: 3.5 , type: "Trad", length: 280 , pitches: 2 , creatorId: 1 , approach: "", description: "Soler is a wonderful two pitch route climbing twin fingercracks in a dihedral. It is probably the easiest summit route on the tower that isn't wider than hands, and may feel easier than the 7s and 8s to those who don't know how to jam."},
        { name: "TAD", areaId: 2 , grade: "5.7", rating: 2 , type: "Trad", length: 300, pitches: 2 , creatorId: 1 , approach: "", description: "An excellent route that is the probably the easiest way to the top of the tower. Both pitches are long and fairly sustained, and the second is easily one of the best moderate hand cracks on the tower."},
        { name: "El Cracko Diablo", areaId: 2 , grade: "5.8", rating: 3.5 , type: "Trad", length: null , pitches: 2 , creatorId: 1 , approach: "", description: "See approach for TAD and Solar. This route starts to the right of TAD, and is in my opinion by far the best route of the three mentioned. Pitch one is a good lead of about 5.7 and is well suited for those getting into trad climbing on the Tower. Pitch two is longer and is very sustained 5.8 climbing. Both pitches swollow up gear and you can protect pitch 2 with as many hand-fist sized hexes and cams as you can carry. The crux will prove to be the small bulge 2/3 up on pitch 2 and the slightly narrowing crack as it tapers toward the top of the route where it ends at the Meadows. NOTE: This route can be rappelled with two ropes in two pitches, but it's recommended that you rappell in three pitches, the third being at the anchors at the ledge about 25-30 feet up from the start of the route. Rappelling in two will increase the likelyhood of having your ropes hung up on the aformentioned ledge when it is pulled."},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Routes', null, {});
  }
};
