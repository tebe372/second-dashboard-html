(function () {
  initCharts();
})();

function findTick(x, ticks, range) {
  for (var tickValue in ticks) {
    if (Math.abs(x - tickValue) <= range) {
      return ticks[tickValue];
    }
  }
}

function initCharts() {
  Highcharts.chart('line-container-1', {
    chart: {
      style: {
        fontFamily: "Inter",
        fontWeight: 400,
      },
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
        style: {
          fontSize: "14px",
        },
      },
      gridLineWidth: 0,
    },

    xAxis: {
      categories: ['Mar 13', 'Mar 20', 'Mar 27', 'Apr 03', 'Apr 10', 'Apr 17', 'Apr 24', 'May 1'],
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
              });
            }
          },
          mouseOut: function(e) {
            if (this.selectedTick) {
              this.selectedTick.label.css({
                marginLeft: "0px",
                marginTop: "0px",
                color: '#565f76',
                background: "#FFFFFF",
                padding: 0,
                borderRadius: 0,
                height: "30px",
              });
              this.selectedTick = null;
            }
          }
        }
      },
      name: 'Sessions',
      data: [56000, 54000, 55100, 50076, 53500, 52000, 32000, '']
    }],

  });
}