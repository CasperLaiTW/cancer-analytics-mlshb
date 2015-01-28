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
                    teenager: {
                        man: 0,
                        female: 0
                    },
                    abor: {
                        man: 0,
                        female: 0
                    }
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

                        // filter
                        $scope.annualReport.oral[month].filter.count++;
                        $scope.annualReport.oral[month].filter.man += parseIntFilterEmpty(item[4]);
                        $scope.annualReport.oral[month].filter.female += parseIntFilterEmpty(item[5]);
                        $scope.annualReport.oral[month].filter.teenager.man += parseIntFilterEmpty(item[7]);
                        $scope.annualReport.oral[month].filter.teenager.female += parseIntFilterEmpty(item[8]);
                        $scope.annualReport.oral[month].filter.abor.man += parseIntFilterEmpty(item[10]);
                        $scope.annualReport.oral[month].filter.abor.female += parseIntFilterEmpty(item[11]);

                        // lectures
                        $scope.annualReport.oral[month].lectures.count++;
                        $scope.annualReport.oral[month].lectures.man += parseIntFilterEmpty(item[16]);
                        $scope.annualReport.oral[month].lectures.female += parseIntFilterEmpty(item[17]);
                        if (item[9] === '學生') {
                            $scope.annualReport.oral[month].lectures.school.count++;
                            $scope.annualReport.oral[month].lectures.school.man += parseIntFilterEmpty(item[16]);
                            $scope.annualReport.oral[month].lectures.school.female += parseIntFilterEmpty(item[17]);
                        }
                        // media
                        $scope.annualReport.oral[month].media.newspaper += parseIntFilterEmpty(item[23]);
                        $scope.annualReport.oral[month].media.column += parseIntFilterEmpty(item[25]);
                        $scope.annualReport.oral[month].media.publication += parseIntFilterEmpty(item[27]);
                        $scope.annualReport.oral[month].media.magazine += parseIntFilterEmpty(item[29]);
                        $scope.annualReport.oral[month].media.other += parseIntFilterEmpty(item[31]);

                        // tv
                        $scope.annualReport.oral[month].tv.adv += parseIntFilterEmpty(item[33]);
                        $scope.annualReport.oral[month].tv.report += parseIntFilterEmpty(item[35]);
                        $scope.annualReport.oral[month].tv.interview += parseIntFilterEmpty(item[37]);
                        $scope.annualReport.oral[month].tv.other += parseIntFilterEmpty(item[39]);

                        // ads
                        $scope.annualReport.oral[month].ads.car += parseIntFilterEmpty(item[41]);
                        $scope.annualReport.oral[month].ads.board += parseIntFilterEmpty(item[43]);
                        $scope.annualReport.oral[month].ads.wall += parseIntFilterEmpty(item[45]);
                        $scope.annualReport.oral[month].ads.buman += parseIntFilterEmpty(item[47]);
                        $scope.annualReport.oral[month].ads.other += parseIntFilterEmpty(item[49]);

                        // marquee
                        $scope.annualReport.oral[month].marquee += parseIntFilterEmpty(item[51]);

                        // cloth
                        $scope.annualReport.oral[month].cloth += parseIntFilterEmpty(item[53]);

                        // other
                        $scope.annualReport.oral[month].other += parseIntFilterEmpty(item[55]);

                        // area
                        if (item[57] !== '') {
                            $scope.annualReport.oral[month].area++;
                        }

                        // coach
                        if (item[58] !== '' && underscore.where($scope.annualReport.coach[month].data, {date: item[58], name: item[59]}).length === 0) {
                            $scope.annualReport.coach[month].count++;
                            $scope.annualReport.coach[month].data.push({
                                date: item[58],
                                name: item[59]
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
                        $scope.annualReport.colorectal[month].filter.man += parseIntFilterEmpty(item[4]);
                        $scope.annualReport.colorectal[month].filter.female += parseIntFilterEmpty(item[5]);
                        $scope.annualReport.colorectal[month].filter.workplace++;
                        $scope.annualReport.colorectal[month].filter.workplaceCount += item[7] === '' ? 0 : parseIntFilterEmpty(item[7]);

                        // lectures
                        $scope.annualReport.colorectal[month].lectures.count++;
                        $scope.annualReport.colorectal[month].lectures.man += parseIntFilterEmpty(item[12]);
                        $scope.annualReport.colorectal[month].lectures.female += parseIntFilterEmpty(item[13]);

                        // coach
                        if (item[49] !== '' && underscore.where($scope.annualReport.coach[month].data, {date: item[49], name: item[50]}).length === 0) {
                            $scope.annualReport.coach[month].count++;
                            $scope.annualReport.coach[month].data.push({
                                date: item[49],
                                name: item[50]
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

var parseIntFilterEmpty = function (value) {
  return parseInt(value) || 0;
}

app.controller('monthCtrl', monthCtrl);