var ctx = document.getElementById("skills-chart");
var skillsChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["MongoDB", "ExpressJS", "React JS", "Node JS" /*  "Firebase", "MongoDB","C++" */],
    datasets: [
      {
        data: [85, 50, 80, 30 /* , 80, 80,40 */],
        backgroundColor: "rgb(80, 206, 195)",
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "white",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontColor: "white",
          },
        },
      ],
    },
  },
});


const generateChart = (id, label, value) => {
  let target = document.getElementById(id + "-chart");
  target.parentNode.childNodes[3].innerText = value + "%";

  return new Chart(target, {
    type: "doughnut",
    data: {
      labels: [label, "pendiente"],
      datasets: [
        {
          data: [value, 100 - value],
          backgroundColor: ["rgb(55, 143, 114", "grey"],
          hoverBackgroundColor: "rgb(231, 231, 231)"
        },
      ],
    },
    options: {
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      legend: {
        display: false,
      },
    },
  });
};

generateChart("reactnative", "React Native", 45);
generateChart("electron", "Electron", 50);
generateChart("firebase", "Firebase", 75);
generateChart("html", "HTML", 80);
generateChart("css", "CSS", 90);
generateChart("bootstrap", "Bootstrap", 95);
generateChart("js", "Javascript", 90);
generateChart("photoshop", "Photoshop", 75);
generateChart("3D", "Diseño 3D", 60);
generateChart("english", "Ingles", 75);

let ageSpan = document.getElementById("currentAge");

let currentAge = moment().diff(moment("10/05/1985", "DD/MM/YYYY"), "years");
ageSpan.innerText = currentAge;

//////////////////////////////////////////////////costo por hora de diseño
let pricingPerHour = 0;
let dolarsPerHour = 2.5;

const getdolar = async () => {
  let query = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");
  let apiData = await query.json();
  let currentDolar = parseInt(apiData[1].casa.venta);
  pricingPerHour = Math.ceil((currentDolar * dolarsPerHour) / 10) * 10;
};

getdolar();
