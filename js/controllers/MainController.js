// JavaScript source code
app.controller('MainController', ['$scope', function ($scope) {

    $scope.name = "Oleksandr Tkachenko";
    $scope.logo = 'img/ia.jpg';
    $scope.age = 25;
    $scope.position = "Front-end developer";
    $scope.skills =
        [
            {
                style:"success",
                value:90,
                title: 'HTML/CSS',
                description: 'Twitter Bootstrap and CSS3 animations'
            },
            {
                style: "info",
                value: 50,
                title: 'JQuery',
                description: '+JavaScript'
            },
            {
                style: "warning",
                value: 10,
                title: 'Angular.js',
                description: 'basic understanding but eager to know more'
            },
            {
                style: "danger",
                value: 50,
                title: 'Photoshop'
            }
        ]

}]);
