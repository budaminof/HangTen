var app = angular.module('myApp', ['ngAnimate']);

app.controller('main', function ($scope) {
  $scope.vm = {};

  $scope.voteUp = function (post) {
    post.votes++;
  }

  $scope.voteDown = function (post) {
      post.votes--;
  }

  $scope.sort = function (sortedBy) {
    $scope.vm.sort = sortedBy;
  }

  $scope.data = [
    {
      title:  'Aspen',
      image: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Bud Anin",
      date: new Date("April 4, 2013"),
      votes: 4,
      comments: []
    },
    {
      title:  'Boulder',
      image: 'http://im.rediff.com/news/2016/mar/01smith1.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Nick MacIntyre",
      date: new Date("January 6, 2020"),
      votes: 0,
      comments: []
    },
    {
      title:  'Tel Aviv',
      image: 'http://www.planwallpaper.com/static/images/beautiful-sunset-images-196063.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Coutrney and Mike",
      date: new Date("July 5, 2010"),
      votes: 9,
      comments: []
    },
    {
      title:  'New York',
      image: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Category-Creative/UK/UK_Creative_462809583.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Seth the awesome",
      date: new Date("Januray 19, 2006"),
      votes: 9,
      comments: []
    },
    {
      title:  'Denver',
      image: 'http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Seth the awesome",
      date: new Date("May 12, 2013"),
      votes: 20,
      comments: []
    }
  ];

})
