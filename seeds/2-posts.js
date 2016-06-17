
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('posts').del(),

    knex('posts')
     .insert({
       title:  'Longborading in California',
       description: "Chartreuse small batch health goth neutra, VHS meggings williamsburg pickled venmo tilde marfa kickstarter vinyl PBR&B. Bushwick farm-to-table brooklyn, tousled marfa tumblr mustache photo booth vegan. Cardigan 8-bit bushwick, man braid tumblr craft beer selfies tattooed hella.",
       votes: 23,
       image_url: 'https://s-media-cache-ak0.pinimg.com/736x/c3/1c/5b/c31c5bba4051bb8dc018b9244dec17e8.jpg',
       user_id: 1
     }),
   knex('posts')
     .insert({
       title:  'San Diego Longboarding',
       description: "Chartreuse small batch health goth neutra, VHS meggings williamsburg pickled venmo tilde marfa kickstarter vinyl PBR&B. Bushwick farm-to-table brooklyn, tousled marfa tumblr mustache photo booth vegan. Cardigan 8-bit bushwick, man braid tumblr craft beer selfies tattooed hella. Chillwave marfa raw denim, pabst schlitz 3 wolf moon fashion axe godard hoodie kombucha skateboard.",
       votes: 10,
       image_url: 'http://www.johnwesleysurf.com/wp-content/uploads/2015/03/surf1.jpg',
       user_id: 2
     }),
   knex('posts')
     .insert({
       title:  "La Punta",
       description: "Chartreuse small batch health goth neutra, VHS meggings williamsburg pickled venmo tilde marfa kickstarter vinyl PBR&B. Bushwick farm-to-table brooklyn, tousled marfa tumblr mustache photo booth vegan. Cardigan 8-bit bushwick, man braid tumblr craft beer selfies tattooed hella.",
       votes: 13,
       image_url: 'http://www.surfertoday.com/images/stories/playacoco.jpg',
       user_id: 3
     }),
   knex('posts')
     .insert({
       title:  'Bali',
       description: "Chartreuse small batch health goth neutra, VHS meggings williamsburg pickled venmo tilde marfa kickstarter vinyl PBR&B. Bushwick farm-to-table brooklyn, tousled marfa tumblr mustache photo booth vegan. Cardigan 8-bit bushwick, man braid tumblr craft beer selfies tattooed hella. Chillwave marfa raw denim, pabst schlitz 3 wolf moon fashion axe godard hoodie kombucha skateboard. You probably haven't heard of them sartorial listicle, semiotics 3 wolf moon single-origin coffee banh mi flannel jean shorts schlitz vinyl master cleanse kombucha. Cold-pressed kale chips bicycle rights gentrify cronut disrupt. Food truck artisan lomo shabby chic narwhal.",
       votes: 26,
       image_url: 'http://www.surfertoday.com/images/stories/surfingmaldives2.jpg',
       user_id: 1
     }),
   knex('posts')
     .insert({
       title:  'There is a spot next to Google offices..',
       description: "Chartreuse small batch health goth neutra, VHS meggings williamsburg pickled venmo tilde marfa kickstarter vinyl PBR&B. Bushwick farm-to-table brooklyn, tousled marfa tumblr mustache photo booth vegan. Cardigan 8-bit bushwick, man braid tumblr craft beer selfies tattooed hella. Chillwave marfa raw denim, pabst schlitz 3 wolf moon fashion axe godard hoodie kombucha skateboard.",
       votes: 10,
       image_url: 'http://www.surfingmagazine.com/files/2010/03/line-up-545x371.jpg',
       user_id: 2
     }),
   knex('posts')
     .insert({
       title:  'find your true north',
       description: "Chartreuse small batch health goth neutra, VHS meggings williamsburg pickled venmo tilde marfa kickstarter vinyl PBR&B. Bushwick farm-to-table brooklyn, tousled marfa tumblr mustache photo booth vegan. Cardigan 8-bit bushwick, man braid tumblr craft beer selfies tattooed hella. Chillwave marfa raw denim, pabst schlitz 3 wolf moon fashion axe godard hoodie kombucha skateboard.",
       votes: 4,
       image_url: 'http://www.yeity.com/Photo%20Essays/Surfing%20Destinations/Lofotan1.jpg',
       user_id: 3,
     }),
   knex('posts')
     .insert({
       title:  'Costa Rica',
       description: "Chartreuse small batch health goth neutra, VHS meggings williamsburg pickled venmo tilde marfa kickstarter vinyl PBR&B. Bushwick farm-to-table brooklyn, tousled marfa tumblr mustache photo booth vegan. Cardigan 8-bit bushwick, man braid tumblr craft beer selfies tattooed hella. Chillwave marfa raw denim, pabst schlitz 3 wolf moon fashion axe godard hoodie kombucha skateboard. You probably haven't heard of them sartorial listicle, semiotics 3 wolf moon single-origin coffee banh mi flannel jean shorts schlitz vinyl master cleanse kombucha. Cold-pressed kale chips bicycle rights gentrify cronut disrupt. Food truck artisan lomo shabby chic narwhal.",
       votes: 13,
       image_url: 'http://surfspots.ie/images/homebanner2.jpg',
       user_id: 2
     })

  );
};
