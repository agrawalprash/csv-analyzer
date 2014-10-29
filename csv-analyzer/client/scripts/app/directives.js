var app = angular.module('CSVApp');

/*
fileModel directive.

Usage: <input type='file' file-model='myFile'>

Description: This directive presents a file selector dialog and saves the
obtained File object in the scope variable which is passed to file-model (in
this case 'myFile').
*/
app.directive(
    'fileModel',

    ['$parse',
    function($parse){

        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);

                element.bind('change', function(){
                    scope.$apply(function(){
                        model.assign(scope, element[0].files[0]);
                    });
                });
            }
        };

    }
]);
