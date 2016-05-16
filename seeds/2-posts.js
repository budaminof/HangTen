
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('posts').del(),

    knex('posts')
     .insert({
       title:  'Longborading in the California',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       votes: 23,
       image_url: 'https://s-media-cache-ak0.pinimg.com/736x/c3/1c/5b/c31c5bba4051bb8dc018b9244dec17e8.jpg',
       user_id: 1
      //  created_at: new Date("April 3, 2016")
     }),
   knex('posts')
     .insert({
       title:  'San Diego Longboarding',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       votes: 10,
       image_url: 'http://indosurflife.com/wp-content/uploads/2012/04/LongboardSurfGirl.jpg',
       user_id: 2
      //  created_at: new Date("March 25, 2016")
     }),
   knex('posts')
     .insert({
       title:  "La Punta",
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       votes: 13,
       image_url: 'http://www.surfertoday.com/images/stories/playacoco.jpg',
       user_id: 3
      //  created_at: new Date("March 24, 2016")
     }),
   knex('posts')
     .insert({
       title:  'Bali',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       votes: 35,
       image_url: 'http://www.surfertoday.com/images/stories/surfingmaldives2.jpg',
       user_id: 1
      //  created_at: new Date("March 02, 2016")
     }),
   knex('posts')
     .insert({
       title:  'There is a spot next to Google offices..',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       votes: 10,
       image_url: 'http://www.surfingmagazine.com/files/2010/03/line-up-545x371.jpg',
       user_id: 2
      //  created_at: new Date("May 5, 2016")
     }),
   knex('posts')
     .insert({
       title:  'find your true north',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       votes: 4,
       image_url: 'http://www.yeity.com/Photo%20Essays/Surfing%20Destinations/Lofotan1.jpg',
       user_id: 3,
      //  created_at: new Date("March 9, 2016")
     }),
   knex('posts')
     .insert({
       title:  'Costa Rica',
       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
       votes: 13,
       image_url: 'http://surfspots.ie/images/homebanner2.jpg',
       user_id: 2
      //  created_at: new Date("February 26, 2016")
     })

  );
};
