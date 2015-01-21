var monthCtrl = function ($scope, $rootScope, underscore, SweetAlert, $filter) {
    $scope.annualReport = {
        oral: [],
        colorectal: [],
        coach: []
    };

    function initReport() {
        for(var i = 0; i < 12; i++) {
            $scope.annualReport.oral[i] = {
                filter: {
                    count: 0,
                    man: 0,
                    female: 0,
                },
                lectures: {
                    school: {
                        count: 0,
                        man: 0,
                        female: 0
                    },
                    count: 0,
                    man: 0,
                    female: 0
                },
                media: {
                    newspaper: 0,
                    column:0,
                    publication:0,
                    magazine:0,
                    other:0
                },
                tv: {
                    adv: 0,
                    report:0,
                    interview:0,
                    other:0
                },
                ads: {
                    car: 0,
                    board: 0,
                    wall: 0,
                    buman: 0,
                    other: 0
                },
                marquee: 0,
                cloth: 0,
                other:0,
                area: 0,
            };

            $scope.annualReport.colorectal[i] = {
                filter: {
                    count: 0,
                    man: 0,
                    female: 0,
                    workplace: 0,
                    workplaceCount: 0
                },
                lectures: {
                    count: 0,
                    man: 0,
                    female: 0
                },
            };

            $scope.annualReport.coach[i] = {
                count: 0,
                data: []
            }
        }
    }

    $scope.init = function () {
        initReport();
    }

    $scope.analytics = function () {
        if ($('#source1').val() === '' || $('#source2').val() === '') {
            swal("請選擇檔案", "發生錯誤", "error");
            return;
        }
        oralSource(colorectalSource);
    }

    var oralSource = function (callback) {
        $('#source1').parse({
            config: {
                complete: function (results) {
                    results.data.shift();
                    if (results.data.length == 0) {
                        callback();
                        return;
                    }
                    underscore.each(results.data, function (item, key) {
                        if (underscore.size(item) === 1) {
                            return;
                        }
                        var month = new Date(item[2]).getMonth();

                        // fiter
                        $scope.annualReport.oral[month].filter.count++;
                        $scope.annualReport.oral[month].filter.man += parseInt(item[4]);
                        $scope.annualReport.oral[month].filter.female += parseInt(item[5]);

                        // lectures
                        $scope.annualReport.oral[month].lectures.count++;
                        $scope.annualReport.oral[month].lectures.man += parseInt(item[10]);
                        $scope.annualReport.oral[month].lectures.female += parseInt(item[11]);
                        if (item[9] === '學生') {
                            $scope.annualReport.oral[month].lectures.school.count++;
                            $scope.annualReport.oral[month].lectures.school.man += parseInt(item[10]);
                            $scope.annualReport.oral[month].lectures.school.female += parseInt(item[11]);
                        }
                        // media
                        switch(item[16])
                        {
                            case '新聞稿':
                                $scope.annualReport.oral[month].media.newspaper += parseInt(item[18]);
                                break;
                            case '社區專欄':
                                $scope.annualReport.oral[month].media.column += parseInt(item[18]);
                                break;
                            case '苗栗季刊':
                                $scope.annualReport.oral[month].media.publication += parseInt(item[18]);
                                break;
                            case '雜誌':
                                $scope.annualReport.oral[month].media.magazine += parseInt(item[18]);
                                break;
                            default:
                                $scope.annualReport.oral[month].media.other += parseInt(item[18]);
                                break;

                        }

                        // tv
                        switch(item[19])
                        {
                            case '廣告':
                                $scope.annualReport.oral[month].tv.adv += parseInt(item[21]);
                                break;
                            case '新聞報導':
                                $scope.annualReport.oral[month].tv.report += parseInt(item[21]);
                                break;
                            case '節目專訪':
                                $scope.annualReport.oral[month].tv.interview += parseInt(item[21]);
                                break;
                            default:
                                $scope.annualReport.oral[month].tv.adv += parseInt(item[21]);
                                break;
                        }

                        // ads
                        switch(item[22])
                        {
                            case '車體':
                                $scope.annualReport.oral[month].ads.car += parseInt(item[24]);
                                break;
                            case '看板':
                                $scope.annualReport.oral[month].ads.board += parseInt(item[24]);
                                break;
                            case '牆面彩繪':
                                $scope.annualReport.oral[month].ads.wall += parseInt(item[24]);
                                break;
                            case '大型布幔':
                                $scope.annualReport.oral[month].ads.buman += parseInt(item[24]);
                                break;
                            default:
                                $scope.annualReport.oral[month].ads.other += parseInt(item[24]);
                                break;
                        }

                        // marquee
                        $scope.annualReport.oral[month].marquee += parseInt(item[26]);

                        // cloth
                        $scope.annualReport.oral[month].cloth += parseInt(item[28]);

                        // other
                        $scope.annualReport.oral[month].other += item[29] !== '' ? 1 : 0;

                        // area
                        if (item[30] !== '') {
                            $scope.annualReport.oral[month].area++;
                        }

                        // coach
                        if (item[32] !== '' && underscore.where($scope.annualReport.coach[month].data, {date: item[32], name: item[33]}).length === 0) {
                            $scope.annualReport.coach[month].count++;
                            $scope.annualReport.coach[month].data.push({
                                date: item[32],
                                name: item[33]
                            });
                        }
                    });
                    callback();
                }
            }
        });
    }

    var colorectalSource = function (callback) {
        $('#source2').parse({
            config: {
                complete: function (results) {
                    results.data.shift();
                    if (results.data.length == 0) {
                        analyticsComplete();
                        return;
                    }
                    underscore.each(results.data, function (item, key) {
                        if (underscore.size(item) === 1) {
                            return;
                        }
                        var month = new Date(item[2]).getMonth();
                        // fiter
                        $scope.annualReport.colorectal[month].filter.count++;
                        $scope.annualReport.colorectal[month].filter.man += parseInt(item[4]);
                        $scope.annualReport.colorectal[month].filter.female += parseInt(item[5]);
                        $scope.annualReport.colorectal[month].filter.workplace++;
                        $scope.annualReport.colorectal[month].filter.workplaceCount += item[7] === '' ? 0 : parseInt(item[7]);

                        // lectures
                        $scope.annualReport.colorectal[month].lectures.count++;
                        $scope.annualReport.colorectal[month].lectures.man += parseInt(item[12]);
                        $scope.annualReport.colorectal[month].lectures.female += parseInt(item[13]);

                        // coach
                        if (item[29] !== '' && underscore.where($scope.annualReport.coach[month].data, {date: item[29], name: item[30]}).length === 0) {
                            $scope.annualReport.coach[month].count++;
                            $scope.annualReport.coach[month].data.push({
                                date: item[29],
                                name: item[30]
                            });
                        }
                    });
                    analyticsComplete();
                }
            }
        });
    }

    var analyticsComplete = function () {
        SweetAlert.swal("Good job!", "分析完成!", "success");
        // $scope.$apply();
    };
}

app.controller('monthCtrl', monthCtrl);