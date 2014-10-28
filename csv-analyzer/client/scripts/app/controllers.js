var app = angular.module('CSVApp');

app.controller(
    'FileUploadController',

    ['$scope', 'UploadService',
    function($scope, UploadService){

        $scope.init = function() {
            $scope.file_chosen = false;
            $scope.upload_started = false;
            $scope.upload_paused = false;
        };

        $scope.choose_file = function() {
            $scope.file_chosen = true;
        };

        $scope.start_upload = function() {
            $scope.upload_started = true;
        };

        $scope.pause_upload = function() {
            $scope.upload_paused = true;
        };

        $scope.resume_upload = function() {
            $scope.upload_started = true;
            $scope.upload_paused = false;
        };

        $scope.cancel_upload = function() {
            $scope.init();
        };

        // Initialize the scope.
        $scope.init();

    }
]);
