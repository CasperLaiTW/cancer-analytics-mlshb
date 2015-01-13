var app = angular.module('analytics', ['ngUnderscore', 'ui.bootstrap', 'dialogs.main']);

app.config(function ($interpolateProvider, dialogsProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
    dialogsProvider.useBackdrop('static');
});

var analyticsCtrl = function ($scope, underscore, dialogs, $rootScope) {

    $scope.analytics = function () {
        var dlg = dialogs.wait(undefined, undefined, 0);
        $scope.first = {};
        $scope.needWork = {};
        Papa.parse(document.getElementById('source').files[0], {
            config: {
                header: true,
                fastMode: true
            },
            before: function () {
                $rootScope.$broadcast('dialogs.wait.progress',{'progress' : 0});
            },
            complete: function(results) {
                results.data.shift();
                if (results.data.length == 0) {
                    return;
                }
                var total = results.data.length;

                underscore.each(results.data, function (item, key) {
                    progress(key / total * 100);

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

    var progress = function (progress) {
        if (progress > 99) {
            $rootScope.$broadcast('dialogs.wait.complete');
        } else {
            $rootScope.$broadcast('dialogs.wait.progress',{'progress' : progress});
        }
    };
};


app.controller('analyticsCtrl', analyticsCtrl);
