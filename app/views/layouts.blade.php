<!DOCTYPE html>
<html lang="zh-tw">
<head>
    <meta charset="utf-8">
    <title>首篩/未篩分析</title>
    {{ HTML::style("/vendor/bootstrap/dist/css/bootstrap.min.css") }}
    {{ HTML::style('/vendor/angular-dialog-service/dist/dialogs.min.css') }}
    {{ HTML::style("/vendor/flat-ui/dist/css/flat-ui.min.css") }}
    {{ HTML::style('/vendor/sweetalert/lib/sweet-alert.css') }}

    <style>
        .container .credit{
            margin: 20px 0;
        }
    </style>

    <!--[if lt IE 9]>
    {{ HTML::script("//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js") }}
    {{ HTML::script("//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js") }}
    <![endif]-->
    {{ HTML::script("/vendor/flat-ui/dist/js/vendor/jquery.min.js") }}
    {{ HTML::script("/vendor/angularjs/angular.min.js") }}
    {{ HTML::script('/vendor/angular-sanitize/angular-sanitize.min.js') }}
    {{ HTML::script("/vendor/angular-route/angular-route.min.js") }}

    {{ HTML::script('/vendor/bootstrap/dist/js/bootstrap.min.js') }}
    {{ HTML::script('/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js') }}

    {{ HTML::script("/vendor/flat-ui/dist/js/flat-ui.min.js") }}

    {{ HTML::script("/vendor/ng-underscore/build/ng-underscore.min.js") }}
    {{ HTML::script("/vendor/papaparse/papaparse.min.js") }}
    {{ HTML::script('/vendor/angular-dialog-service/dist/dialogs.min.js') }}
    {{ HTML::script('/vendor/sweetalert/lib/sweet-alert.min.js') }}
    {{ HTML::script('/vendor/angular-sweetalert/SweetAlert.min.js') }}

    @yield('scripts')
</head>
<body ng-app="analytics">
    <!-- Static navbar -->
    <div class="navbar navbar-default" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">首篩/未首篩分析</a>
        </div>
      </div>
    </div>

    <div class="container">
        @yield('main')
    </div>
    <footer>
        <div class="container">
            <p class="credit small">Copyright &copy; 2015 iuix. All Rights Reserved.</p>
        </div>
    </footer>
</body>
</html>