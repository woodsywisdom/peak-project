'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Areas', [
        // { name: "", elevation: "", stateId:  , parentId: , approach: "", description: ""}
        { name: "Devil's Tower", elevation: '4,358 ft', stateId: 50, parentId: null, approach: "Drive to Sundance, Wyoming, and then take highway 24 north from I-90. Just follow the signs, and drive towards the big chunk of stone. Turn into the monument and pay the entrance fee. Then continue to the visitor's center. From here, make sure to register for the climb (this is free - used for record keeping and rescues, etc.). Then, approaches differ by route from here.", description: "The native name for Devils Tower is Bears Lodge. This is a special place for many people besides climbers, and it is important to respect the closure for the entire month of June!" },
        { name: "South and East Faces", elevation: "4,601 ft", stateId: 50 , parentId: 1 , approach: "From the Devil's Tower parking lot, take the paved trail towards the tower. Take a right when the trail forks, and follow this trail around towards the south face. Look for a climber's trail taking off up towards the tower when you see a viewing tube (for looking at the old wooden ladder near Bon Homme). Follow this good trail up to some slabs near Durrance, then climb up and to the right, following the slabs around the tower. From here, it depends which route you are doing as to how far to go. Some of these approach rocks are really slick, so be careful with heavy loads.", description: "The South and East Faces both share the same approach. The South and East face routes are very popular, perhaps because they end up at the meadows. Once at the meadows, it is easy to top out. The most climbed routes on the tower (besides Durrance) are on the East face, including Soler and Tad. The South face also holds some popular routes, including Bon Homme Variation and Walt Bailey. Most routes are 2 long pitches to the meadows, with Walt Bailey being only one pitch. Rappel off the meadows chain anchors with two ropes for 3 rappels to reach the ground. Also, some routes have their own set of rap anchors."}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Areas', null, {});
  }
};
