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
        body {
            padding-top: 70px;
        }
        .container .credit {
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
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
          </button>
          {{ HTML::linkRoute('default', '大腸癌篩檢已篩/首篩/未首篩分析', null, ['class' => 'navbar-brand']) }}
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li>
                    {{ HTML::linkRoute('month', '月報表') }}
                </li>
            </ul>
        </div>
      </div>
    </div>

    <!--[if lt IE 10]>
        <div class="alert alert-danger" role="alert">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">警告</span>
            您的瀏覽器需要更新，您適合更好的瀏覽器增加使用者體驗。
            <p class="small text-info">支援Chrome, Firefox, IE10以上</small>
            <ul>
                <li>
                    <a href="https://www.google.com.tw/chrome/browser/desktop/index.html" class="alert-link" target="_blank">Chrome</a>
                </li>
                <li>
                    <a href="http://mozilla.com.tw/firefox/new/" class="alert-link" target="_blank">Firefox</a>
                </li>
                <li>
                    <a href="http://windows.microsoft.com/zh-tw/internet-explorer/ie-11-worldwide-languages" class="alert-link" target="_blank">IE 11</a>
                </li>
            </ul>
        </div>
    <![endif] -->
    <div class="container">
      @yield('main')
    </div>
    <footer>
      <div class="container">
        <p class="credit small">Designed by <a href="http://www.i-uix.com" target="_blank">i-uix</a></p>
        <p class="small">Copyright &copy; 2015 <a href="http://www.i-uix.com" target="_blank">i-uix</a>. All Rights Reserved.</p>
      </div>
    </footer>
</body>
</html>