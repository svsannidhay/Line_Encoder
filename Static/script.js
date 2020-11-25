function randomBinaryArrayGen(){
  let arr = [];
  for(let i=1;i<=13;i++){
    arr.push(Math.floor((Math.random() * 1.99)));
  }
  return arr;
}
function validate() {
  let input = document.getElementById("inputNrz");
  let string = input.value;
  let valid = true;
  for(let i=0;i<string.length;i++){
    if(string[i]=='0'||string[i]=='1'){

    }else{
        valid = false;
    }
  }
  return valid;
}
/*//////////////////////////////////////////////////////////////////////*/
/*--------------------SECTION NRZ-------------------------------------- */
/*//////////////////////////////////////////////////////////////////////*/
function init() {
  document.getElementById("buttonSendNrz").addEventListener("click", send);
}

function send(event) {
  let text = document.getElementById("inputNrz");
  console.log(text.value);
  event.preventDefault();
  console.log(validate());
}
document.addEventListener("DOMContentLoaded", init);


function nrzCanvasGenerator() {
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "nrzChart");
  document.getElementById("putNrzCanvas").appendChild(canvas);
  let dataArray = randomBinaryArrayGen();
  var ctx = document.getElementById("nrzChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dataArray,
      datasets: [
        {
          borderColor: "rgb(77, 77, 177)",
          data: dataArray,
          steppedLine: true,
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      elements: {
        point: {
          radius: 0,
        },
      },
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              min: -2,
              max: 2,
              stepSize: 1,
              fontSize: 16,
            },
            scaleLabel: {
              display: true,
              align: "center",
              labelString: "voltage",
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontSize: 16,
              labelOffset: 40,
            },
            scaleLabel: {
              display: true,
              align: "center",
              labelString: "signal elements",
            },
          },
        ],
      },
    },
  });
}

