<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首篩/未首篩分析</title>
    {{ HTML::style("/vendor/flat-ui/dist/css/vendor/bootstrap.min.css") }}
    {{ HTML::style("/vendor/flat-ui/dist/css/flat-ui.min.css") }}

    <!--[if lt IE 9]>
    {{ HTML::script("//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js") }}
    {{ HTML::script("//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js") }}
    <![endif]-->
    <style>
      body {
        min-height: 2000px;
        padding-top: 70px;
      }
    </style>
</head>
<body>
    <!-- Static navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">首篩/未首篩分析</a>
        </div>
      </div>
    </div>

    <div class="container">
        @yield('main')
    </div>
    {{ HTML::script("/vendor/flat-ui/dist/js/vendor/jquery.min.js") }}
    {{ HTML::script("/vendor/flat-ui/dist/js/flat-ui.min.js") }}
    @yield('scripts')
</body>
</html>