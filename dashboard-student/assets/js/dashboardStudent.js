// Bar Graph

const barData = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Attendance",
      data: [12, 19, 3, 5, 10, 7, 5, 19, 23, 5, 10, 3],
      backgroundColor: [
        "#59CB94",
        "#3C79FA",
        "#59CB94",
        "#3C79FA",
        "#59CB94",
        "#3C79FA",
        "#59CB94",
        "#3C79FA",
        "#59CB94",
        "#3C79FA",
        "#59CB94",
        "#3C79FA",
        "#59CB94",
      ],
    },
  ],
};
const barConfig = {
  type: "bar",
  data: barData,
  options: {
    legend: {
      labels: {
        fontColor: "#091244",
        fontSize: 16,
        fontFamily: "Circular Std Medium",
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: "#091244",
            fontSize: 14,
            fontFamily: "Circular Std Medium",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#091244",
            fontSize: 14,
            fontFamily: "Circular Std Medium",
          },
        },
      ],
    },
  },
};
let myChart = document.getElementById("myChart").getContext("2d");
let barChart = new Chart(myChart, barConfig);
