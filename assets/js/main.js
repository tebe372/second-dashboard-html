(function () {
  initCharts('line-container-product', ['Mar 13', 'Mar 20', 'Mar 27', 'Apr 03', 'Apr 10', 'Apr 17', 'Apr 24', 'May 1'], [56000, 54000, 55100, 50076, 53500, 52000, 32000, '']);
  initCharts('line-container-segment', ['Mar 13', 'Mar 20', 'Mar 27', 'Apr 03', 'Apr 10', 'Apr 17', 'Apr 24', 'May 1'], ['', 7500, 22500, 22100, 4900, 0, 2600, '']);
  initCharts('line-container-url', ['Mar 13', 'Mar 20', 'Mar 27', 'Apr 03', 'Apr 10', 'Apr 17', 'Apr 24', 'May 1'], [3050, 3225, 3400, 3060, 3250, 3200, 1800, '']);
  initCharts('line-container-org', ['Mar 13', 'Mar 20', 'Mar 27', 'Apr 03', 'Apr 10', 'Apr 17', 'Apr 24', 'May 1'], [320, 265, 375, 260, 250, 510, 210, '']);
  initCharts('line-container-search', ['Mar 13', 'Mar 20', 'Mar 27', 'Apr 03', 'Apr 10', 'Apr 17', 'Apr 24', 'May 1'], [42, 44, 62, 55, 93, 60, 23, '']);
  initCharts('line-container-zipcode', ['Mar 13', 'Mar 20', 'Mar 27', 'Apr 03', 'Apr 10', 'Apr 17', 'Apr 24', 'May 1'], [420, 400, 850, 410, 390, 1110, 1150, '']);
})();

function findTick(x, ticks, range) {
  for (var tickValue in ticks) {
    if (Math.abs(x - tickValue) <= range) {
      return ticks[tickValue];
    }
  }
}

function initCharts(id, categories, data) {
  Highcharts.chart(id, {
    chart: {
      style: {
        fontFamily: "Inter",
        fontWeight: 400,
      },
      backgroundColor: "#EDF7F9"
    },

    credits: {
      enabled: false,
    },

    colors: ["#1A71F3"],

    title: {
      text: '',
    },

    yAxis: {
      title: {
        text: '',
      },
      labels: {
        formatter: function () {
          if (this.value >= 1000)
            return this.value/1000 + 'k';
          else
            return this.value;
        },
        style: {
          fontSize: "14px",
        },
      },
      gridLineWidth: 0,
    },

    xAxis: {
      categories: categories,
      labels: {
        useHTML: true,
        overflow: "justify",
        style: {
          color: "#898989",
          fontSize: "14px",
        },
        y: 30,
      },
      tickmarkPlacement: 'on',
      tickWidth: 0,
      lineWidth: 0,
      maxPadding: 0,
      minPadding: 0,
      gridLineWidth: 1,
      gridLineColor: "#EAEAEA",
      gridZIndex: 3,
    },
    
    legend: {
      layout: "horizontal",
      align: "left",
      verticalAlign: "top",
      enabled: true,
      itemWidth: 0,
      itemStyle: {
        fontSize: "11px",
      },
      y: 0,
      x: 60,
      itemMarginBottom: 10,
      symbolWidth: 16,
      symbolHeight: 0,
    },

    plotOptions: {
      line: {
        lineWidth: 1,
        marker: {
          enabled: true,
          fillColor: "#FFFFFF",
          lineWidth: 1,
          lineColor: '#1A71F3',
          radius: 6,
          states: {
            hover: {
              fillColor: "#1A71F3",
              radius: 6,
              radiusPlus: 0,
              lineWidth: 1,
              lineWidthPlus: 0,
            },
          }
        },
        states: {
          hover: {
            lineWidthPlus: 0,
          }
        },
      }
    },

    tooltip: {
      crosshairs: true,
      borderRadius: 8,
      formatter: function () {
        return '<span style="color:'+ this.series.color +'"> ● </span>' + ' ' + Intl.NumberFormat().format(this.y);
      },
    },

    series: [{
      tooltip: {
        followPointer: false,
        distance: -50,
      },
      point: {
        events: {
          mouseOver: function(e) {
            var tick = findTick(this.x, this.series.xAxis.ticks, 0);
            this.selectedTick = tick;
            
            if (tick) {
              tick.label.css({
                marginLeft: "-13px",
                marginTop: "-6px",
                color: "#FFFFFF",
                background: "#1A71F3",
                padding: "6px 15px",
                borderRadius: "30px",
                height: "30px",
                zIndex: 9999,
              });
            }
          },
          mouseOut: function(e) {
            if (this.selectedTick) {
              this.selectedTick.label.css({
                marginLeft: "0px",
                marginTop: "0px",
                color: '#565f76',
                backgroundColor: "#EDF7F9",
                padding: 0,
                borderRadius: 0,
                height: "30px",
                zIndex: 1000,
              });
              this.selectedTick = null;
            }
          }
        }
      },
      name: 'Sessions',
      data: data,
    }],

  });
}