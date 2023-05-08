(function () {
  initCharts();
})();

function initCharts() {
  Highcharts.chart('line-container-1', {
    chart: {
      style: {
        fontFamily: "Inter-Regular, sans-serif",
        fontWeight: 400,
      },
    },

    credits: {
      enabled: false,
    },

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
      type: "datetime",
      labels: {
        overflow: "justify",
        formatter: function () {
          return Highcharts.dateFormat("%b %d", this.value);
        },
        style: {
          color: "#898989",
          fontSize: "14px",
        },
        y: 25,
      },
      tickWidth: 0,
      lineWidth: 0,
      tickInterval: 1000 * 3600 * 24 * 7,
      maxPadding: 0,
      minPadding: 0,
      gridLineWidth: 1,
      gridLineColor: "#EAEAEA",
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
      y: 20,
      x: 20,
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
        pointInterval: 1000 * 3600 * 24 * 7,
        pointStart: Date.UTC(2023, 2, 13, 0, 0, 0),
        states: {
          hover: {
            lineWidthPlus: 0,
          }
        },
      },
    },

    tooltip: {
      crosshairs: true,
      borderRadius: 8,
      formatter: function () {
        return '<span> ● </span>' + ' ' + Intl.NumberFormat().format(this.y);
      }
    },

    series: [{
      name: 'Sessions',
      data: [56000, 54000, 55100, 50076, 53500, 52000, 32000]
    }],

  });
}