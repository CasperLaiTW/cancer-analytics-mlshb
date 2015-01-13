var app = angular.module('analytics', ['ngUnderscore']);

app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
});

var analyticsCtrl = function ($scope, underscore) {

    $scope.analytics = function () {
        $scope.first = {};
        $scope.needWork = {};
        Papa.parse(document.getElementById('source').files[0], {
            config: {
                header: true,
                fastMode: true
            },
            complete: function(results) {
                results.data.shift();
                underscore.each(results.data, function (item) {
                    if (item.length != 1) {
                        var words = item[6].split(/(　|\s)?\d+/);
                        var area = words[0];
                        if (item[0] === 'V') {
                            var count = $scope.first[area] === undefined ? 0 : $scope.first[area];
                            $scope.first[area] = count + 1;
                        } else if(item[1] === 'V') {
                            var count = $scope.needWork[area] === undefined ? 0 : $scope.needWork[area];
                            $scope.needWork[area] = count + 1;
                        }
                    }
                });
                $scope.$apply();
            }
        });
    };
};


app.controller('analyticsCtrl', analyticsCtrl);
