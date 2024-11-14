// Line Chart (Daily P/L)
const ctxLine = document.getElementById("lineChart").getContext("2d");
new Chart(ctxLine, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Daily P/L",
        data: [50, -30, 70, -20, 90],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  },
  options: { responsive: true },
});

// Bar Chart (Win/Loss)
const ctxBar = document.getElementById("barChart").getContext("2d");
new Chart(ctxBar, {
  type: "bar",
  data: {
    labels: ["Win", "Loss"],
    datasets: [
      {
        label: "Win/Loss Count",
        data: [70, 30],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  },
  options: { responsive: true },
});

// Donut Chart (Strategy Success Rate)
const ctxDonut = document.getElementById("donutChart").getContext("2d");
new Chart(ctxDonut, {
  type: "doughnut",
  data: {
    labels: ["FVG", "Order Block", "Breakout"],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
  },
  options: { responsive: true },
});
