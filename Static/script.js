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
  arr[arr.length] = arr[arr.length-1];
  return arr;
}
/*//////////////////////////////////////////////////////////////////////*/
/*--------------------SECTION NRZ-------------------------------------- */
/*//////////////////////////////////////////////////////////////////////*/
function nrzCustomGen() {
  let input = document.getElementById("nrzInputDs");
  let string = input.value;
  if (validate(string)) {
    nrzCanvasGenerator(parserInt(string));
  } else {
    alert("Please Enter a valid digital signal");
  }
}
function nrzRandomGen(){
  let arr = randomBinaryArrayGen();
  let input = document.getElementById("nrzInputCons0");
  let cons0 = input.value;
  for (let i = 0; i < cons0; i++) {
    arr[i] = 0;
  }
  nrzCanvasGenerator(arr);
}
var countNrz = 0;
function nrzCanvasGenerator(dataArray) {
  if(countNrz>0){
    document.getElementById('nrzChart').remove();
  }
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
      legend: {
        display: false,
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
  countNrz++;
}


/*//////////////////////////////////////////////////////////////////////*/
/*--------------------SECTION NRZI-------------------------------------- */
/*//////////////////////////////////////////////////////////////////////*/
function nrzIencoder(arr){
  let nrzI = [];
  if(arr[0]==1){
    nrzI[0] = 1;
  }else{
    nrzI[0] = -1;
  }
  let currState = nrzI[0];
  for(let i=1;i<=arr.length;i++){
    if(arr[i]==0){
      nrzI[i] = currState;
    }else{
      if(currState==-1){
        currState = 1;
      }else{
        currState = -1;
      }
      nrzI[i] = currState;
    }
  }
  return nrzI; 
}
function nrzIRandomGen() {
  let arr = randomBinaryArrayGen();
  let input = document.getElementById("nrzIInputCons0");
  let cons0 = input.value;
  for(let i=0;i<cons0;i++){
    arr[i] = 0;
  }
  console.log(arr);
  let encodedSignal = nrzIencoder(arr);
  nrzICanvasGenerator(encodedSignal,arr);
}

function nrzICustomGen(){
  let input = document.getElementById("nrzIInputDs");
  let string = input.value;
  if (validate(string)) {
    let arr = parserInt(string);
    console.log(arr);
    let encodedSignal = nrzIencoder(arr);
    nrzICanvasGenerator(encodedSignal, arr);
  } else {
    alert("Please Enter a valid digital signal");
  }
}

var countNrzI = 0;
function nrzICanvasGenerator(dataArray,labelArray) {
  if (countNrzI > 0) {
    document.getElementById("nrzIChart").remove();
  }
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "nrzIChart");
  document.getElementById("putNrzICanvas").appendChild(canvas);
  var ctx = document.getElementById("nrzIChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labelArray,
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
      legend: {
        display: false,
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
  countNrzI++;
}

/*//////////////////////////////////////////////////////////////////////*/
/*--------------------SECTION NRZL-------------------------------------- */
/*//////////////////////////////////////////////////////////////////////*/
function nrzLencoder(arr){
  let nrzL = [];
  for(let i=0;i<=arr.length;i++){
    if(arr[i]==0){
      nrzL[i] = -1
    }else{
      nrzL[i] = 1;
    }
  }
  return nrzL; 
}
function nrzLRandomGen() {
  let arr = randomBinaryArrayGen();
  let input = document.getElementById("nrzLInputCons0");
  let cons0 = input.value;
  for(let i=0;i<cons0;i++){
    arr[i] = 0;
  }
  let encodedSignal = nrzLencoder(arr);
  nrzLCanvasGenerator(encodedSignal,arr);
}

function nrzLCustomGen(){
  let input = document.getElementById("nrzLInputDs");
  let string = input.value;
  if (validate(string)) {
    let arr = parserInt(string);
    let encodedSignal = nrzLencoder(arr);
    nrzLCanvasGenerator(encodedSignal, arr);
  } else {
    alert("Please Enter a valid digital signal");
  }
}

var countNrzL = 0;
function nrzLCanvasGenerator(dataArray,labelArray) {
  if (countNrzL > 0) {
    document.getElementById("nrzLChart").remove();
  }
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "nrzLChart");
  document.getElementById("putNrzLCanvas").appendChild(canvas);
  var ctx = document.getElementById("nrzLChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labelArray,
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
      legend: {
        display: false,
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
            gridLines: {
              lineWidth: 1,
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
  countNrzL++;
}