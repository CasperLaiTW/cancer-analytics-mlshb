var app = angular.module('analytics', ['ngUnderscore', 'ui.bootstrap', 'dialogs.main', 'oitozero.ngSweetAlert']);

app.config(function ($interpolateProvider, dialogsProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
    dialogsProvider.useBackdrop('static');
});

var analyticsCtrl = function ($scope, underscore, dialogs, $rootScope, SweetAlert) {

    $scope.mixed = true;

    $scope.analytics = function () {
        if (document.getElementById('source').files.length === 0) {
            dialogs.error('發生錯誤', '請選擇檔案');
            return;
        }
        var dlg = dialogs.wait(undefined, undefined, 0);
        $scope.first = {};
        $scope.needWork = {};
        $scope.isDone = {};
        $scope.areas = [];

        $('#source').parse({
            config: {
                encoding: 'big5',
                complete: function (results) {
                    results.data.shift();
                    if (results.data.length == 0) {
                        return;
                    }
                    var total = results.data.length;
                    underscore.each(results.data, function (item, key) {
                        progress(key / total *   100);
                        if (underscore.size(item) != 1) {
                            var words = item[6].split(/(　|\s)?\d+/);
                            var area = words[0];
                            if (underscore.indexOf($scope.areas, area) === -1) {
                                $scope.areas.push(area);
                            }
                            if (item[0] === 'V' && item[1] !== '') {
                                // 首篩已篩
                                var count = $scope.isDone[area] === undefined ? 0 : $scope.isDone[area];
                                $scope.isDone[area] = count + 1;
                            } else if(item[1] === '' && item[0] === '') {
                                // 未篩人數
                                var count = $scope.needWork[area] === undefined ? 0 : $scope.needWork[area];
                                $scope.needWork[area] = count + 1;
                            } else if (item[0] === 'V' && item[1] === '') {
                                // 符合首篩
                                var count = $scope.first[area] === undefined ? 0 : $scope.first[area];
                                $scope.first[area] = count + 1;
                            }
                        }
                    });
                    $scope.$apply();
                }
            },
            before: function () {
                $rootScope.$broadcast('dialogs.wait.progress',{'progress' : 0});
            }

        });
    };

    var progress = function (progress) {
        if (progress > 99) {
            $rootScope.$broadcast('dialogs.wait.complete');
            SweetAlert.swal("Good job!", "分析完成!", "success");
        } else {
            $rootScope.$broadcast('dialogs.wait.progress',{'progress' : progress});
        }
    };
};

app.controller('analyticsCtrl', analyticsCtrl);

app.filter('zero', function () {
    return function(input) {
        if (input) {
            return input;
        }
        return 0;
    }
});