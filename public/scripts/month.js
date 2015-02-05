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
                    workplace: {
                        count: 0,
                        oral: 0,
                        blood: 0,
                    }
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
                        var month = item[2] - 1;

                        // filter
                        $scope.annualReport.oral[month].filter.count += parseIntFilterEmpty(item[3]);
                        $scope.annualReport.oral[month].filter.man += parseIntFilterEmpty(item[4]);
                        $scope.annualReport.oral[month].filter.female += parseIntFilterEmpty(item[5]);
                        // teenage
                        $scope.annualReport.oral[month].filter.teenager.man += parseIntFilterEmpty(item[6]);
                        $scope.annualReport.oral[month].filter.teenager.female += parseIntFilterEmpty(item[7]);
                        // abor
                        $scope.annualReport.oral[month].filter.abor.man += parseIntFilterEmpty(item[8]);
                        $scope.annualReport.oral[month].filter.abor.female += parseIntFilterEmpty(item[9]);

                        // lectures
                        for (var i = 10; i < 22; i+=4) {
                            if (item[i] !== '') {
                                $scope.annualReport.oral[month].lectures.school.count++;
                                $scope.annualReport.oral[month].lectures.school.man += parseIntFilterEmpty(item[i + 1]);
                                $scope.annualReport.oral[month].lectures.school.female += parseIntFilterEmpty(item[i + 2]);
                            }
                        }

                        for (var i = 22; i < 40; i+=6) {
                            if (item[i] !== '') {
                                $scope.annualReport.oral[month].lectures.count++;
                                $scope.annualReport.oral[month].lectures.man += parseIntFilterEmpty(item[i + 2]);
                                $scope.annualReport.oral[month].lectures.female += parseIntFilterEmpty(item[i + 3]);
                            }
                        }

                        // media
                        $scope.annualReport.oral[month].media.newspaper += parseIntFilterEmpty(item[43]);
                        $scope.annualReport.oral[month].media.column += parseIntFilterEmpty(item[45]);
                        $scope.annualReport.oral[month].media.publication += parseIntFilterEmpty(item[47]);
                        $scope.annualReport.oral[month].media.magazine += parseIntFilterEmpty(item[49]);
                        $scope.annualReport.oral[month].media.other += parseIntFilterEmpty(item[51]);

                        // tv
                        $scope.annualReport.oral[month].tv.adv += parseIntFilterEmpty(item[53]);
                        $scope.annualReport.oral[month].tv.report += parseIntFilterEmpty(item[55]);
                        $scope.annualReport.oral[month].tv.interview += parseIntFilterEmpty(item[57]);
                        $scope.annualReport.oral[month].tv.other += parseIntFilterEmpty(item[59]);

                        // ads
                        $scope.annualReport.oral[month].ads.car += parseIntFilterEmpty(item[61]);
                        $scope.annualReport.oral[month].ads.board += parseIntFilterEmpty(item[63]);
                        $scope.annualReport.oral[month].ads.wall += parseIntFilterEmpty(item[65]);
                        $scope.annualReport.oral[month].ads.buman += parseIntFilterEmpty(item[67]);
                        $scope.annualReport.oral[month].ads.other += parseIntFilterEmpty(item[69]);

                        // marquee
                        $scope.annualReport.oral[month].marquee += parseIntFilterEmpty(item[71]);

                        // cloth
                        $scope.annualReport.oral[month].cloth += parseIntFilterEmpty(item[73]);

                        // other
                        $scope.annualReport.oral[month].other += parseIntFilterEmpty(item[75]);

                        // area
                        $scope.annualReport.oral[month].area += parseIntFilterEmpty(item[77])

                        // coach
                        processCoach(month, item[78]);
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
                        var month = item[2] - 1;
                        // fiter
                        $scope.annualReport.colorectal[month].filter.count += parseIntFilterEmpty(item[3]);
                        $scope.annualReport.colorectal[month].filter.man += parseIntFilterEmpty(item[4]);
                        $scope.annualReport.colorectal[month].filter.female += parseIntFilterEmpty(item[5]);
                        for (var i = 6; i < 15; i+=3) {
                            if (item[6] !== '') {
                                $scope.annualReport.colorectal[month].filter.workplace.count++;
                                $scope.annualReport.colorectal[month].filter.workplace.oral += parseIntFilterEmpty(item[i + 1]);
                                $scope.annualReport.colorectal[month].filter.workplace.blood += parseIntFilterEmpty(item[i + 2]);
                            }
                        }

                        // lectures
                        $scope.annualReport.colorectal[month].lectures.count += parseIntFilterEmpty(item[15]);
                        for (var i = 16; i < 28; i+=4) {
                            if (item[i] !== '') {
                                $scope.annualReport.colorectal[month].lectures.man += parseIntFilterEmpty(item[i + 2]);
                                $scope.annualReport.colorectal[month].lectures.female += parseIntFilterEmpty(item[i + 3]);
                            }
                        }

                        // coach
                        processCoach(month, item[62]);
                    });
                    analyticsComplete();
                }
            }
        });
    }

    var processCoach = function (month, item) {
        if (item !== '') {
            var report = [];
            underscore.each(item.split('\n'), function (value, index) {
                var match = value.match(/(\d{2,3}\.\d{1,2}\.\d{1,2}),?(.*)/);
                if (match !== null) {
                    report.push({
                        date: new Date(match[1]),
                        name: match[2]
                    })
                }
            });

            underscore.each(report, function (value, index) {
                if (underscore.where($scope.annualReport.coach[month].data, value).length === 0) {
                    $scope.annualReport.coach[month].count++;
                    $scope.annualReport.coach[month].data.push(value);
                }
            });
        }
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