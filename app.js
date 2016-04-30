var app = angular.module('myApp', ['ngAnimate', 'angularMoment', 'ngMessages']);

app.controller('main', function ($scope) {
  $scope.vm = {};
  $scope.form = {};
  $scope.activePost = {};
  $scope.comment = {};

  $scope.voteUp = function (post) {
    post.votes++;
  }

  $scope.voteDown = function (post) {
      post.votes--;
  }

  $scope.sort = function (sortedBy) {
    $scope.vm.sort = sortedBy;
  }

  $scope.formSubmit = function (){
    $scope.form.votes = 0;
    $scope.form.comments = [];
    $scope.form.show= false;
    $scope.form.date = new Date();

    $scope.data.push($scope.form);
    $scope.form = {}
  }

  $scope.formClose = function () {
    $scope.form = {};
    $scope.myForm.$setUntouched();
  }

  $scope.commentShow = function (post) {
    post.show = !post.show;
  }

  $scope.commentSubmit = function () {
    $scope.activePost.comments.push($scope.comment);
    $scope.comment = {};
    $scope.commentForm.$setUntouched();
  }

  $scope.commentClose = function () {
    $scope.comment = {};
    $scope.commentForm.$setUntouched();
  }

  $scope.makeAComment = function (post){
    $scope.activePost = post;
  }

  $scope.data = [
    {
      title:  'Aspen',
      image: 'https://media.giphy.com/media/yYSSBtDgbbRzq/giphy.gif',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Bud Anin",
      date: new Date("April 29, 2016"),
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
      image: 'https://media.giphy.com/media/GdzdVs64GIOFa/giphy.gif',
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
      image: 'https://media.giphy.com/media/jxhJ8ylaYIPbG/giphy.gif',
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
      image: 'https://media.giphy.com/media/l4Ki7Y9DfsUnvawEg/giphy.gif',
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
      image: 'https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Seth the awesome",
      date: new Date("May 12, 2013"),
      votes: 20,
      show: false,
      comments: []
    }
  ];
})

.controller('timeController', function($scope) {
  // bind the controller to vm (view-model)
  $scope.view = {};

  // create a new time variable with the current date
  $scope.view.time = new Date();

});
