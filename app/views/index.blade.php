@section('main')
    <div ng-controller="analyticsCtrl">
        <div class="jumbotron">
            <h1>名單分析</h1>
            <div class="form-group">
                <label for="source">
                    <input type="file" id="source" accept=".txt,.csv">
                    請選擇名單
                </label>
            </div>
            <button type="button" class="btn btn-primary" ng-click="analytics();">開始分析</button>
        </div>

        <div class="result" ng-show="mixed">
            <h6 class="page-header"></h6>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>地區</th>
                        <th>首篩已篩數</th>
                        <th>首篩數</th>
                        <th>未篩數</th>
                        <th>總數</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="(key, value) in areas">
                        <td><% value %></td>
                        <td><% isDone[value] | zero %></td>
                        <td><% first[value] | zero %></td>
                        <td><% needWork[value] | zero %></td>
                        <td><% isDone[value] + first[value] + needWork[value] %></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="result" ng-hide="mixed">
            <h6 class="page-header">首篩名單</h6>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>地區</th>
                        <th>數量</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="(key, value) in first">
                        <td><% key %></td>
                        <td><% value %></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="result"  ng-hide="mixed">
            <h6 class="page-header">未篩名單</h6>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>地區</th>
                        <th>數量</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="(key, value) in needWork">
                        <td><% key %></td>
                        <td><% value %></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="result"  ng-hide="mixed">
            <h6 class="page-header">已篩名單</h6>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>地區</th>
                        <th>數量</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="(key, value) in isDone">
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