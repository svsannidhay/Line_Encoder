function randomBinaryArrayGen(){
  let arr = [];
  for(let i=1;i<=13;i++){
    arr.push(Math.floor((Math.random() * 1.99)));
  }
  return arr;
}
function validate(string) {
  let valid = true;
  for(let i=0;i<string.length;i++){
    if(string[i]=='0'||string[i]=='1'){

    }else{
        valid = false;
    }
  }
  return valid;
}
function parserInt(string){
  let str = string.split('');
  let arr = str.map(Number);
  return arr;
}
/*//////////////////////////////////////////////////////////////////////*/
/*--------------------SECTION NRZ-------------------------------------- */
/*//////////////////////////////////////////////////////////////////////*/
function initNrz() {
  document.getElementById("buttonSendNrz").addEventListener("click",sendNrz);
}
function sendNrz(event) {
  event.preventDefault();
  let input = document.getElementById("inputNrz");
  let string = input.value;
  console.log(validate(string));
  nrzCanvasGenerator(parserInt(string));
}
document.addEventListener("DOMContentLoaded", initNrz);


function nrzRandomGen(){
  let arr = randomBinaryArrayGen();
  nrzCanvasGenerator(arr);
}

function nrzCanvasGenerator(dataArray) {
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "nrzChart");
  document.getElementById("putNrzCanvas").appendChild(canvas);
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

