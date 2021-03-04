import Highcharts from "highcharts";

export const ChartMockData = {
  data: [
    530,
    500,
    535,
    540,
    500,
    510,
    520,
    535,
    525,
    550,
    555,
    520,
    535,
    540,
    525,
    530,
    510,
    500,
    550,
    510,
    520,
    535,
    540,
    510,
    500,
    550,
    530,
    530,
    525,
    535,
    540,
  ],
};
export const Options = {
  chart: {
    type: "areaspline", // bar차트. 아무 설정이 없으면 line chart가 된다.
  },
  title: {
    text: "",
  },
  credits: {
    enabled: false,
  },
  xAxis: {
    type: "monthtime",
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  legend: {
    enabled: false,
  },
  plotOptions: {
    area: {
      fillColor: {
        linearGradient: {
          x1: 0,
          y1: 0,
          x2: 0,
          y2: 1,
        },
        stops: [
          [0, Highcharts.getOptions().colors[2]],
          [
            2,
            Highcharts.color(Highcharts.getOptions().colors[2])
              .setOpacity(0)
              .get("rgba"),
          ],
        ],
      },
      marker: {
        radius: 0,
      },
      lineWidth: 1,
      lineColor: 1,
      states: {
        hover: {
          lineWidth: 1,
        },
      },
      threshold: null,
    },
  },
  series: [{ type: "area", name: "data", data: ChartMockData.data }],
};
