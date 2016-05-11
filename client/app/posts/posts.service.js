(function() {
  'use strict';

  angular.module('app.posts')
    .factory('postsService', factory);

    factory.$inject = [
      '$log'
    ];

    function factory($log) {
      var _activePost = {};
      var _posts = [
        {
          title:  'Aspen',
          image: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
          author: "Bud Anin",
          date: new Date("May 10, 2016"),
          votes: 4,
          show: false,
          comments: [
            {
              author: "Lincoln",
              text: "sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              author: "Bud",
              text: "sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          ]
        },
        {
          title:  'Boulder',
          image: 'http://www.planwallpaper.com/static/images/beautiful-sunset-images-196063.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
          author: "Nick MacIntyre",
          date: new Date("April 24, 2016"),
          votes: 0,
          show: false,
          comments: [
            {
              author: "Mike",
              text: "sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              author: "Cooper",
              text: "sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          ]
        },
        {
          title:  'Tel Aviv',
          image: 'http://hdwallpapershdpics.com/wp-content/uploads/2015/08/Cool-Tiger-Wallpaper-1920x1080-HD.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
          author: "Coutrney and Mike",
          date: new Date("July 5, 2010"),
          votes: 9,
          show: false,
          comments: [
            {
              author: "Summer",
              text: "sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              author: "Seth",
              text: "sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          ]
        },
        {
          title:  'New York',
          image: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
          author: "Seth the awesome",
          date: new Date("Januray 19, 2006"),
          votes: 9,
          show: false,
          comments: [
            {
              author: "Courtney",
              text: "sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              author: "Akyuna",
              text: "sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          ]
        },
        {
          title:  'Denver',
          image: 'http://im.rediff.com/news/2015/dec/24tpoty20.jpg',
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
          author: "Seth the awesome",
          date: new Date("May 12, 2013"),
          votes: 20,
          show: false,
          comments: []
        }
      ];

      return {
        addPost: addPost,
        getPosts: getPosts,
        makeAComment: makeAComment,
        submitComment: submitComment,
        sort: {criteria: "-date"},
        search: {query: ""}
      }

      function addPost(post){
        post.votes = 0;
        post.comments = [];
        post.show = false;
        post.date = new Date();

        _posts.push(post);
        return
      }

      function getPosts() {
        return _posts;
      }

      function makeAComment(post){
        _activePost = post;
        return
      }

      function submitComment(comment){
        _activePost.comments.push(comment);
        _activePost = null;
        return
      }

    }

})();
