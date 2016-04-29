var app = angular.module('myApp', ['ngAnimate']);

app.controller('main', function ($scope) {
  $scope.vm = {};

  $scope.voteUp = function (position) {
    $scope.data[position].votes++;
  }

  $scope.voteDown = function (position) {
    $scope.data[position].votes--;
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
      date: new Date(),
      votes: 4,
      comments: []
    },
    {
      title:  'Boulder',
      image: 'http://im.rediff.com/news/2016/mar/01smith1.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Nick MacIntyre",
      date: 'Fri Apr 15 2016 19:26:58 GMT-0600 (MDT)',
      votes: 0,
      comments: []
    },
    {
      title:  'Tel Aviv',
      image: 'http://www.planwallpaper.com/static/images/beautiful-sunset-images-196063.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Coutrney and Mike",
      date: new Date(),
      votes: 9,
      comments: []
    }
  ];

})
