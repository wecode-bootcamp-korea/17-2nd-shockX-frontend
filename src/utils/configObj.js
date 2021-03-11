const configObj = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
    margin: [40],
  },
  title: {
    text: "Item Count",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: false,
      cursor: "pointer",
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
  series: [
    {
      name: "Brands",
      colorByPoint: true,
      data: [
        {
          name: "Air Jordan",
          y: 60,
          color: "#F77068",
        },
        {
          name: "Kobe",
          y: 30,
          color: "#4F71F7",
        },
        {
          name: "Nike Bsketball",
          y: 10,
          color: "#9560FA",
        },
      ],
    },
  ],
};

export default configObj;
