@section('main')
    <div ng-controller="analyticsCtrl">
        <div class="jumbotron">
            <h1>名單分析</h1>
            <div class="form-group">
                <input type="file" id="source" accept=".txt">
                <p class="help-block">請選擇名單</p>
            </div>
            <button type="button" class="btn btn-default" ng-click="analytics();">開始分析</button>
        </div>

        <div class="result">
            <h6>未篩含首篩名單</h6>
            <table class="table table-striped">
                <thead>
                    <th>
                        <tr>地區</tr>
                        <tr>數量</tr>
                    </th>
                </thead>
                <tbody>
                    <tr ng-repeat="(key, value) in first">
                        <td><% key %></td>
                        <td><% value %></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="result">
            <h6>已篩</h6>
            <table class="table table-striped">
                <thead>
                    <th>
                        <tr>地區</tr>
                        <tr>數量</tr>
                    </th>
                </thead>
                <tbody>
                    <tr ng-repeat="(key, value) in needWork">
                        <td><% key %></td>
                        <td><% value %></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
@stop

@section('scripts')
    {{ HTML::script('/scripts/app.js') }}
@stop