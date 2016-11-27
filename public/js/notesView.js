//notesView.js
(function(angular) {

    var theModule = angular.module("notesView", ["ui.bootstrap"]);

    theModule.controller("notesViewController", 
    ["$scope", "$window", "$http",
        function($scope, $window, $http) {
            $scope.notes = [];
            $scope.newNote = createBlankNote();

            //get category name
            var urlParts = $window.location.pathname.split("/");
            var categoryName = urlParts[urlParts.length - 1];

            var notesUrl = "/api/notes/" + categoryName;

            $http.get(notesUrl)
                .then(function(result){
                    //success
                    $scope.notes = result.data;
                }, function(err){
                    //error
                    alert(err);
                });

            $scope.save = function(){
                $http.post(notesUrl, $scope.newNote)
                    .then(function(result){
                        //success
                        $scope.notes.push(result.data);
                        $scope.newNote = createBlankNote();
                    }, function(err){
                        //todo failure
                    })
            };
        }
    ]);

    function createBlankNote() {
        return {
            note: "",
            color: "yellow"
        };
    };

})(window.angular);