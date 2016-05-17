
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('posts').del(),

    knex('posts')
     .insert({
       title:  'Longborading in California',
       description: "Fap biodiesel polaroid, art party meditation jean shorts chia. Cred slow-carb meh cardigan, small batch selvage aesthetic banjo organic drinking vinegar green juice echo park XOXO chartreuse. Jean shorts kogi godard banjo sartorial, sustainable butcher chicharrones brunch.",
       votes: 23,
       image_url: 'https://s-media-cache-ak0.pinimg.com/736x/c3/1c/5b/c31c5bba4051bb8dc018b9244dec17e8.jpg',
       user_id: 1
     }),
   knex('posts')
     .insert({
       title:  'San Diego Longboarding',
       description: "Fap biodiesel polaroid, art party meditation jean shorts chia. Cred slow-carb meh cardigan, small batch selvage aesthetic banjo organic drinking vinegar green juice echo park XOXO chartreuse. Jean shorts kogi godard banjo sartorial, sustainable butcher chicharrones brunch. Food truck celiac put a bird on it, tofu brooklyn everyday carry next level fashion axe seitan taxidermy fap chambray raw denim. ",
       votes: 10,
       image_url: 'http://indosurflife.com/wp-content/uploads/2012/04/LongboardSurfGirl.jpg',
       user_id: 2
     }),
   knex('posts')
     .insert({
       title:  "La Punta",
       description: "Fap biodiesel polaroid, art party meditation jean shorts chia. Cred slow-carb meh cardigan, small batch selvage aesthetic banjo organic drinking vinegar green juice echo park XOXO chartreuse.",
       votes: 13,
       image_url: 'http://www.surfertoday.com/images/stories/playacoco.jpg',
       user_id: 3
     }),
   knex('posts')
     .insert({
       title:  'Bali',
       description: "Fap biodiesel polaroid, art party meditation jean shorts chia. Cred slow-carb meh cardigan, small batch selvage aesthetic banjo organic drinking vinegar green juice echo park XOXO chartreuse. Jean shorts kogi godard banjo sartorial, sustainable butcher chicharrones brunch. Food truck celiac put a bird on it, tofu brooklyn everyday carry next level fashion axe seitan taxidermy fap chambray raw denim.",
       votes: 26,
       image_url: 'http://www.surfertoday.com/images/stories/surfingmaldives2.jpg',
       user_id: 1
     }),
   knex('posts')
     .insert({
       title:  'There is a spot next to Google offices..',
       description: "Fap biodiesel polaroid, art party meditation jean shorts chia. Cred slow-carb meh cardigan, small batch selvage aesthetic banjo organic drinking vinegar green juice echo park XOXO chartreuse.",
       votes: 10,
       image_url: 'http://www.surfingmagazine.com/files/2010/03/line-up-545x371.jpg',
       user_id: 2
     }),
   knex('posts')
     .insert({
       title:  'find your true north',
       description: "Fap biodiesel polaroid, art party meditation jean shorts chia. Cred slow-carb meh cardigan, small batch selvage aesthetic banjo organic drinking vinegar green juice echo park XOXO chartreuse. Jean shorts kogi godard banjo sartorial, sustainable butcher chicharrones brunch.",
       votes: 4,
       image_url: 'http://www.yeity.com/Photo%20Essays/Surfing%20Destinations/Lofotan1.jpg',
       user_id: 3,
     }),
   knex('posts')
     .insert({
       title:  'Costa Rica',
       description: "Fap biodiesel polaroid, art party meditation jean shorts chia. Cred slow-carb meh cardigan, small batch selvage aesthetic banjo organic drinking vinegar green juice echo park XOXO chartreuse. Jean shorts kogi godard banjo sartorial, sustainable butcher chicharrones brunch. Food truck celiac put a bird on it, tofu brooklyn everyday carry next level fashion axe seitan taxidermy fap chambray raw denim. ",
       votes: 13,
       image_url: 'http://surfspots.ie/images/homebanner2.jpg',
       user_id: 2
     })

  );
};
