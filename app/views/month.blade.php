@section('main')
    <div ng-controller="monthCtrl" ng-init="init();">
        <div class="jumbotron">
            <h1></h1>
            <div class="form-group">
                <label for="source1">
                    <input type="file" id="source1" accept=".txt,.csv">
                    口腔癌-月報表
                </label>
            </div>
            <div class="form-group">
                <label for="source2">
                    <input type="file" id="source2" accept=".txt,.csv">
                    大腸癌-月報表
                </label>
            </div>
            <button type="button" class="btn btn-primary" ng-click="analytics();">開始分析</button>
        </div>
        <div class="result">
            <table class="table table-bordered small">
                <thead>
                    <tr>
                        <th>類別</th>
                        <th colspan="10">設站篩檢</th>
                        <th colspan="12">宣導講座</th>
                        <th colspan="17">辦理檳榔防制地方宣導工作</th>
                        <th rowspan="3">訪查學校周邊檳榔攤</th>
                        <th rowspan="3">診所輔導/訪視</th>
                    </tr>
                    <tr>
                        <th rowspan="2">季別</th>
                        <th colspan="4">口腔黏膜篩檢</th>
                        <th colspan="6">糞便潛血檢查</th>
                        <th colspan="4">校園宣導</th>
                        <th colspan="4">口腔癌防制</th>
                        <th colspan="4">大腸癌防制</th>
                        <th colspan="5">平面報導(則)</th>
                        <th colspan="4">電視、廣告（檔次）</th>
                        <th colspan="5">戶外廣告</th>
                        <th>跑馬燈</th>
                        <th>紅布條</th>
                        <th>其他</th>
                    </tr>
                    <tr>
                        <th>設站場次</th>
                        <th>篩檢總人數</th>
                        <th>篩檢人數-男性</th>
                        <th>篩檢人數-女性</th>
                        <th>設站場次</th>
                        <th>篩檢總人數</th>
                        <th>篩檢人數-男性</th>
                        <th>篩檢人數-女性</th>
                        <th>職場設站</th>
                        <th>篩檢人數</th>
                        <th>宣導場次</th>
                        <th>總人數</th>
                        <th>男性數</th>
                        <th>女性數</th>
                        <th>宣導場次</th>
                        <th>總人數</th>
                        <th>男性數</th>
                        <th>女性數</th>
                        <th>宣導場次</th>
                        <th>總人數</th>
                        <th>男性數</th>
                        <th>女性數</th>
                        <th>新聞稿</th>
                        <th>社區專欄</th>
                        <th>苗栗季刊</th>
                        <th>雜誌</th>
                        <th>其他</th>
                        <th>廣告</th>
                        <th>新聞報導</th>
                        <th>節目專訪</th>
                        <th>其他</th>
                        <th>車體</th>
                        <th>看板</th>
                        <th>牆面彩繪</th>
                        <th>大型布幔</th>
                        <th>其他</th>
                        <th>跑馬燈</th>
                        <th>紅布條</th>
                        <th>其他</th>
                    </tr>
                </thead>
                <tbody>
                    <tr ng-repeat="(key, value) in annualReport.oral">
                        <td><% key+1 %> 月</td>
                        <td><% value.filter.count %></td>
                        <td><% value.filter.man + value.filter.female %></td>
                        <td><% value.filter.man %></td>
                        <td><% value.filter.female %></td>
                        <td><% annualReport.colorectal[key].filter.count %></td>
                        <td><% annualReport.colorectal[key].filter.man + annualReport.colorectal[key].filter.female %></td>
                        <td><% annualReport.colorectal[key].filter.man %></td>
                        <td><% annualReport.colorectal[key].filter.female %></td>
                        <td><% annualReport.colorectal[key].filter.workplace %></td>
                        <td><% annualReport.colorectal[key].filter.workplaceCount %></td>
                        <td><% value.lectures.school.count %></td>
                        <td><% value.lectures.school.man + value.lectures.school.female %></td>
                        <td><% value.lectures.school.man %></td>
                        <td><% value.lectures.school.female %></td>
                        <td><% value.lectures.count %></td>
                        <td><% value.lectures.man + value.lectures.female %></td>
                        <td><% value.lectures.man %></td>
                        <td><% value.lectures.female %></td>
                        <td><% annualReport.colorectal[key].lectures.count %></td>
                        <td><% annualReport.colorectal[key].lectures.man + annualReport.colorectal[key].lectures.female %></td>
                        <td><% annualReport.colorectal[key].lectures.man %></td>
                        <td><% annualReport.colorectal[key].lectures.female %></td>
                        <td><% value.media.newspaper %></td>
                        <td><% value.media.column %></td>
                        <td><% value.media.publication %></td>
                        <td><% value.media.magazine %></td>
                        <td><% value.media.other %></td>
                        <td><% value.tv.adv %></td>
                        <td><% value.tv.report %></td>
                        <td><% value.tv.interview %></td>
                        <td><% value.tv.other %></td>
                        <td><% value.ads.car %></td>
                        <td><% value.ads.board %></td>
                        <td><% value.ads.wall %></td>
                        <td><% value.ads.buman %></td>
                        <td><% value.ads.other %></td>
                        <td><% value.marquee %></td>
                        <td><% value.cloth %></td>
                        <td><% value.other %></td>
                        <td><% value.area %></td>
                        <td><% annualReport.coach[key].count %></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
@stop

@section('scripts')
    {{ HTML::script('/scripts/app.js') }}
    {{ HTML::script('/scripts/month.js') }}
@stop