var app = angular.module('CSVApp');

app.controller(
    'FileUploadController',

    ['$scope', 'FileUploadService',
    function($scope, FileUploadService){

        $scope.init = function() {
            $scope.file_chosen = false;
            $scope.upload_started = false;
            $scope.upload_paused = false;
        };

        $scope.choose_file = function() {
            $scope.file_chosen = true;

            // putting dummy values for now. this would be some `File` object
            // ultimately
            $scope.file = {};
        };

        $scope.start_upload = function() {
            FileUploadService.start_upload($scope.file);

            $scope.upload_started = true;
        };

        $scope.pause_upload = function() {
            FileUploadService.pause_upload($scope.file);

            $scope.upload_paused = true;
        };

        $scope.resume_upload = function() {
            FileUploadService.resume_upload($scope.file);

            $scope.upload_started = true;
            $scope.upload_paused = false;
        };

        $scope.cancel_upload = function() {
            FileUploadService.cancel_upload($scope.file);

            $scope.init();
        };

        // Initialize the scope.
        $scope.init();

    }
]);
