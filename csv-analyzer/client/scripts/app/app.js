var app = angular.module('CSVApp', ['ngRoute']);

// Application's route config
app.config(['$routeProvider', function($routeProvider){

    $routeProvider.when('/upload_file', {
        action: 'upload_new_file',
        templateUrl: 'templates/upload_file.html'
    });

    $routeProvider.when('/upload_file/:filename', {
        action: 'upload_given_file',
        templateUrl: 'templates/upload_file.html'
    });

    $routeProvider.when('/analyze_file/:filename', {
        action: 'analyze_file',
        templateUrl: 'templates/analyze_file.html'
    });

    $routeProvider.when('/upload_realtime_data', {
        action: 'upload_data_new_pipeline',
        templateUrl: 'templates/upload_realtime_data.html'
    });

    $routeProvider.when('/upload_realtime_data/:pipeline_id', {
        action: 'upload_data_existing_pipeline',
        templateUrl: 'templates/upload_realtime_data.html'
    });

    $routeProvider.when('/analyze_realtime_data/:pipeline_id', {
        action: 'upload_data',
        templateUrl: 'templates/analyze_realtime_data.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/upload_file'
    });

}]);

angular.element(document).ready(function(){
    angular.bootstrap(document, [app.name]);
});

