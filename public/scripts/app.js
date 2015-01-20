var app = angular.module('analytics', ['ngUnderscore', 'ui.bootstrap', 'dialogs.main', 'oitozero.ngSweetAlert']);

app.config(function ($interpolateProvider, dialogsProvider) {
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
    dialogsProvider.useBackdrop('static');
});

app.filter('zero', function () {
    return function(input) {
        if (input) {
            return input;
        }
        return 0;
    }
});