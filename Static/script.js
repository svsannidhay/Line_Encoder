function randomBinaryArrayGen(){
  let arr = [];
  for(let i=1;i<=15;i++){
    arr.push(Math.floor((Math.random() * 1.99)));
  }
  return arr;
}
function consZeroPosGen() {
  start = (Math.floor(Math.random() * 5.99));
  return start;
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
function flipIt(bit) {
  if (bit == 1) {
    return -1;
  } else {
    return 1;
  }
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
  let start = consZeroPosGen();
  let cons0 = Number(input.value);
  for (let i = start; i < cons0 + start; i++) {
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
  let canvasWidth = document.getElementById("nrzChart").offsetWidth;
  console.log(canvasWidth);
  let noOfdataelements = dataArray.length;
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
              fontSize: canvasWidth / 50,
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
              fontSize: canvasWidth / 50,
              labelOffset: canvasWidth / (noOfdataelements * 1.8),
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
  let start = consZeroPosGen();
  let cons0 = Number(input.value);
  for (let i = start; i < cons0 + start; i++) {
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
  let canvasWidth = document.getElementById("nrzIChart").offsetWidth;
  console.log(canvasWidth);
  let noOfdataelements = labelArray.length;
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
        // point: {
        //   radius: 0,
        // },
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
              fontSize: canvasWidth / 50,
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
              labelOffset: canvasWidth / (noOfdataelements * 2),
              fontSize: canvasWidth / 50,
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
/*--------------------SECTION NRZL------------------------------------- */
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
  let start = consZeroPosGen();
  let cons0 = Number(input.value);
  for (let i = start; i < cons0 + start; i++) {
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
  let canvasWidth = document.getElementById("nrzLChart").offsetWidth;
  console.log(canvasWidth + 'here');
  let noOfdataelements = labelArray.length;
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
              fontSize: canvasWidth / 50,
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
              fontSize: canvasWidth / 50,
              labelOffset: canvasWidth / (noOfdataelements * 2),
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


/*//////////////////////////////////////////////////////////////////////*/
/*--------------------SECTION RZ-------------------------------------- */
/*//////////////////////////////////////////////////////////////////////*/
function rzEncoder(arr){
  let rz = [];
  let index = 0;
  for(let i=0;i<=arr.length;i++){
    if(arr[i]==0){
      rz[index++] = -1;
      rz[index++] = 0;
    }else{
      rz[index++] = 1;
      rz[index++] = 0;
    }
  }
  return rz; 
}
function rzLabelArray(arr){
  let labelArray = [];
  let indexLA = 0;
  let indexA = 0;
  while (indexA < arr.length) {
    if (indexLA % 2 == 0) {
      labelArray[indexLA++] = arr[indexA++];
    } else {
      labelArray[indexLA++] = -1;
    }
  }
  return labelArray;
}
function rzRandomGen() {
  let arr = randomBinaryArrayGen();
  let input = document.getElementById("rzInputCons0");
  let start = consZeroPosGen();
  let cons0 = Number(input.value);
  for (let i = start; i < cons0 + start; i++) {
    arr[i] = 0;
  }
  let encodedSignal = rzEncoder(arr);
  let labelArray = rzLabelArray(arr);
  console.log(labelArray);
  rzCanvasGenerator(encodedSignal,labelArray);
}

function rzCustomGen(){
  let input = document.getElementById("rzInputDs");
  let string = input.value;
  if (validate(string)) {
    let arr = parserInt(string);
    let encodedSignal = rzEncoder(arr);
    let labelArray = rzLabelArray(arr);
    rzCanvasGenerator(encodedSignal,labelArray);
  } else {
    alert("Please Enter a valid digital signal");
  }
}

var countrz = 0;
function rzCanvasGenerator(dataArray,labelArray) {
  if (countrz > 0) {
    document.getElementById("rzChart").remove();
  }
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "rzChart");
  document.getElementById("putRzCanvas").appendChild(canvas);
  var ctx = document.getElementById("rzChart").getContext("2d");
  let canvasWidth = document.getElementById('rzChart').offsetWidth;
  console.log(canvasWidth);
  let noOfdataelements = labelArray.length/2;
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
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              min: -2,
              max: 2,
              stepSize: 1,
              fontSize: canvasWidth / 50,
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
              fontSize: canvasWidth / 50,
              labelOffset: canvasWidth / (noOfdataelements * 2),
              callback: function (value, index, values) {
                if (index % 2 === 0) {
                  return value;
                } else {
                  return " ";
                }
              },
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
  countrz++;
}


/*//////////////////////////////////////////////////////////////////////*/
/*--------------------SECTION MANCHESTER------------------------------- */
/*//////////////////////////////////////////////////////////////////////*/
function manEncoder(arr){
  let man = [];
  let index = 0;
  for(let i=0;i<=arr.length;i++){
    if(arr[i]==0){
      man[index++] = -1;
      man[index++] = 1;
    }else{
      man[index++] = 1;
      man[index++] = -1;
    }
  }
  return man; 
}
function manLabelArray(arr){
  let labelArray = [];
  let indexLA = 0;
  let indexA = 0;
  while (indexA < arr.length) {
    if (indexLA % 2 == 0) {
      labelArray[indexLA++] = arr[indexA++];
    } else {
      labelArray[indexLA++] = -1;
    }
  }
  return labelArray;
}
function manRandomGen() {
  let arr = randomBinaryArrayGen();
  let input = document.getElementById("manInputCons0");
  let start = consZeroPosGen();
  let cons0 = Number(input.value);
  for (let i = start; i < cons0 + start; i++) {
    arr[i] = 0;
  }
  let encodedSignal = manEncoder(arr);
  let labelArray = manLabelArray(arr);
  console.log(labelArray);
  manCanvasGenerator(encodedSignal,labelArray);
}

function manCustomGen(){
  let input = document.getElementById("manInputDs");
  let string = input.value;
  if (validate(string)) {
    let arr = parserInt(string);
    let encodedSignal = manEncoder(arr);
    let labelArray = manLabelArray(arr);
    manCanvasGenerator(encodedSignal,labelArray);
  } else {
    alert("Please Enter a valid digital signal");
  }
}

var countMan = 0;
function manCanvasGenerator(dataArray,labelArray) {
  if (countMan > 0) {
    document.getElementById("manChart").remove();
  }
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "manChart");
  document.getElementById("putManCanvas").appendChild(canvas);
  var ctx = document.getElementById("manChart").getContext("2d");
  let canvasWidth = document.getElementById('manChart').offsetWidth;
  console.log(canvasWidth);
  let noOfdataelements = labelArray.length/2;
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
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              min: -2,
              max: 2,
              stepSize: 1,
              fontSize: canvasWidth / 50,
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
              fontSize: canvasWidth / 50,
              labelOffset: canvasWidth / (noOfdataelements * 2),
              callback: function (value, index, values) {
                if (index % 2 === 0) {
                  return value;
                } else {
                  return " ";
                }
              },
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
  countMan++;
}



/*//////////////////////////////////////////////////////////////////////*/
/*--------------------SECTION DIFFERENTIAL MANCHESTER------------------ */
/*//////////////////////////////////////////////////////////////////////*/
function diffManEncoder(arr){
  let diffMan = [];
  let currState;
  let indexLA = 0;
  let indexA = 1; 
  if(arr[0]==1){
    diffMan[indexLA++] = 1;
    diffMan[indexLA++] = -1;
    currState = -1;
  }else{
    diffMan[indexLA++] = -1;
    diffMan[indexLA++] = 1;
    currState = 1;
  }
  while(indexA<arr.length){
    if(arr[indexA]==1){
      diffMan[indexLA++] = currState;
      currState = flipIt(currState);
      diffMan[indexLA++] = currState;
    }else{
      currState = flipIt(currState);
      diffMan[indexLA++] = currState;
      currState = flipIt(currState);
      diffMan[indexLA++] = currState;
    } 
    indexA++;
  }
  return diffMan; 
}
function diffManLabelArray(arr){
  let labelArray = [];
  let indexLA = 0;
  let indexA = 0;
  while (indexA < arr.length) {
    if (indexLA % 2 == 0) {
      labelArray[indexLA++] = arr[indexA++];
    } else {
      labelArray[indexLA++] = -1;
    }
  }
  return labelArray;
}
function diffManRandomGen() {
  let arr = randomBinaryArrayGen();
  let input = document.getElementById("diffManInputCons0");
  let start = consZeroPosGen();
  let cons0 = Number(input.value);
  for (let i = start; i < cons0 + start; i++) {
    arr[i] = 0;
  }
  let encodedSignal = diffManEncoder(arr);
  let labelArray = diffManLabelArray(arr);
  diffManCanvasGenerator(encodedSignal,labelArray);
}

function diffManCustomGen(){
  let input = document.getElementById("diffManInputDs");
  let string = input.value;
  if (validate(string)) {
    let arr = parserInt(string);
    let encodedSignal = diffManEncoder(arr);
    let labelArray = diffManLabelArray(arr);
    diffManCanvasGenerator(encodedSignal,labelArray);
  } else {
    alert("Please Enter a valid digital signal");
  }
}

var countDiffMan = 0;
function diffManCanvasGenerator(dataArray,labelArray) {
  if (countDiffMan > 0) {
    document.getElementById("diffManChart").remove();
  }
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "diffManChart");
  document.getElementById("putDiffManCanvas").appendChild(canvas);
  var ctx = document.getElementById("diffManChart").getContext("2d");
  let canvasWidth = document.getElementById('diffManChart').offsetWidth;
  let noOfdataelements = labelArray.length/2;
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
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              min: -2,
              max: 2,
              stepSize: 1,
              fontSize: canvasWidth / 50,
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
              fontSize: canvasWidth / 50,
              labelOffset: canvasWidth / (noOfdataelements * 2),
              callback: function (value, index, values) {
                if (index % 2 === 0) {
                  return value;
                } else {
                  return " ";
                }
              },
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
  countDiffMan++;
}

/*//////////////////////////////////////////////////////////////////////*/
/*---------------------------SECTION AMI------------------------------- */
/*//////////////////////////////////////////////////////////////////////*/
function amiEncoder(arr){
  let prevState = -2;
  let ami = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i]==1){
      if(prevState==-2){
        ami[i] = 1;
        prevState = 1;
      }else{
        prevState = flipIt(prevState);
        ami[i] = prevState;
      }
    }else{
      ami[i] = 0;
    }
  }
  return ami;
}
function amiLabelArray(arr){
  let labelArray = arr;
  return labelArray;
}
function amiRandomGen() {
  let arr = randomBinaryArrayGen();
  let input = document.getElementById("amiInputCons0");
  let start = consZeroPosGen();
  let cons0 = Number(input.value);
  for (let i = start; i < cons0 + start; i++) {
    arr[i] = 0;
  }
  let encodedSignal = amiEncoder(arr);
  let labelArray = amiLabelArray(arr);
  amiCanvasGenerator(encodedSignal,labelArray);
}

function amiCustomGen(){
  let input = document.getElementById("amiInputDs");
  let string = input.value;
  if (validate(string)) {
    let arr = parserInt(string);
    let encodedSignal = amiEncoder(arr);
    let labelArray = amiLabelArray(arr);
    amiCanvasGenerator(encodedSignal,labelArray);
  } else {
    alert("Please Enter a valid digital signal");
  }
}

var countAmi = 0;
function amiCanvasGenerator(dataArray,labelArray) {
  if (countAmi > 0) {
    document.getElementById("amiChart").remove();
  }
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "amiChart");
  document.getElementById("putAmiCanvas").appendChild(canvas);
  var ctx = document.getElementById("amiChart").getContext("2d");
  let canvasWidth = document.getElementById('amiChart').offsetWidth;
  let noOfdataelements = labelArray.length;
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
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              min: -2,
              max: 2,
              stepSize: 1,
              fontSize: canvasWidth / 50,
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
              fontSize: canvasWidth / 50,
              labelOffset: canvasWidth / (noOfdataelements * 2),
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
  countAmi++;
}


/*//////////////////////////////////////////////////////////////////////*/
/*---------------------------SECTION B8ZS------------------------------- */
/*//////////////////////////////////////////////////////////////////////*/
function bezsEncoder(arr){
  let bezs = [];
  let count8 = 0;
  let prevState = -2;
  for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
      count8++;
      if(count8==8){
        if(prevState==-2){
          bezs[i-4] = 1;
          prevState = 1;
          prevState = flipIt(prevState);
          bezs[i-3] = prevState;
          bezs[i-1] = prevState;
          prevState = flipIt(prevState);
          bezs[i] = prevState;
        }else{
          bezs[i - 4] = prevState;
          prevState = flipIt(prevState);
          bezs[i - 3] = prevState;
          bezs[i - 1] = prevState;
          prevState = flipIt(prevState);
          bezs[i] = prevState;
        }
        count8 = 0;
      }else{
        bezs[i] = 0;
      }
    }else{
      count8 = 0;
      if(prevState==-2){
        bezs[i] = 1;
        prevState = 1;
      }else{
        prevState = flipIt(prevState);
        bezs[i] = prevState;
      }
    }
  }
  return bezs;
}
function bezsLabelArray(arr){
  let labelArray = arr;
  return labelArray;
}
function bezsRandomGen() {
  let arr = randomBinaryArrayGen();
  let input = document.getElementById("bezsInputCons0");
  let start = consZeroPosGen();
  let cons0 = Number(input.value);
  for (let i = start; i < cons0 + start; i++) {
    arr[i] = 0;
  }
  let encodedSignal = bezsEncoder(arr);
  let labelArray = bezsLabelArray(arr);
  bezsCanvasGenerator(encodedSignal,labelArray);
}

function bezsCustomGen(){
  let input = document.getElementById("bezsInputDs");
  let string = input.value;
  if (validate(string)) {
    let arr = parserInt(string);
    let encodedSignal = bezsEncoder(arr);
    let labelArray = bezsLabelArray(arr);
    bezsCanvasGenerator(encodedSignal,labelArray);
  } else {
    alert("Please Enter a valid digital signal");
  }
}

var countBezs = 0;
function bezsCanvasGenerator(dataArray,labelArray) {
  if (countBezs > 0) {
    document.getElementById("bezsChart").remove();
  }
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "bezsChart");
  document.getElementById("putBezsCanvas").appendChild(canvas);
  var ctx = document.getElementById("bezsChart").getContext("2d");
  let canvasWidth = document.getElementById('bezsChart').offsetWidth;
  let noOfdataelements = labelArray.length;
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
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              min: -2,
              max: 2,
              stepSize: 1,
              fontSize: canvasWidth / 50,
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
              fontSize: canvasWidth / 50,
              labelOffset: canvasWidth / (noOfdataelements * 2),
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
  countBezs++;
}


/*//////////////////////////////////////////////////////////////////////*/
/*---------------------------SECTION HDB3------------------------------- */
/*//////////////////////////////////////////////////////////////////////*/
function hdb3Encoder(arr){
  let hdb3 = [];
  let count4 = 0;
  let countPulses = 0;
  let prevState = -2;
  for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
      count4++;
      if(count4==4){
        if(prevState==-2){
          hdb3[i-3] = 1;
          prevState = 1;
          hdb3[i] = prevState;
          countPulses+=2;
        }else{
          if(countPulses%2==0){
            prevState = flipIt(prevState);
            hdb3[i-3] = prevState;
            hdb3[i] = prevState;
            countPulses+=2;
          }else{
            hdb3[i] = prevState;
            countPulses+=1;
          }
        }
        count4 = 0;
      }else{
        hdb3[i] = 0;
      }
    }else{
      count4 = 0;
      countPulses++;
      if(prevState==-2){
        hdb3[i] = 1;
        prevState = 1;
      }else{
        prevState = flipIt(prevState);
        hdb3[i] = prevState;
      }
    }
  }
  return hdb3;
}
function hdb3LabelArray(arr){
  let labelArray = arr;
  return labelArray;
}
function hdb3RandomGen() {
  let arr = randomBinaryArrayGen();
  let input = document.getElementById("hdb3InputCons0");
  let start = consZeroPosGen();
  let cons0 = Number(input.value)
  for(let i=start;i<(cons0+start);i++){
    arr[i] = 0;
  }
  let encodedSignal = hdb3Encoder(arr);
  let labelArray = hdb3LabelArray(arr);
  hdb3CanvasGenerator(encodedSignal,labelArray);
}

function hdb3CustomGen(){
  let input = document.getElementById("hdb3InputDs");
  let string = input.value;
  if (validate(string)) {
    let arr = parserInt(string);
    let encodedSignal = hdb3Encoder(arr);
    let labelArray = hdb3LabelArray(arr);
    hdb3CanvasGenerator(encodedSignal,labelArray);
  } else {
    alert("Please Enter a valid digital signal");
  }
}

var countHdb3 = 0;
function hdb3CanvasGenerator(dataArray,labelArray) {
  if (countHdb3 > 0) {
    document.getElementById("hdb3Chart").remove();
  }
  let canvas = document.createElement("canvas");
  canvas.setAttribute("id", "hdb3Chart");
  document.getElementById("putHdb3Canvas").appendChild(canvas);
  var ctx = document.getElementById("hdb3Chart").getContext("2d");
  let canvasWidth = document.getElementById('hdb3Chart').offsetWidth;
  let noOfdataelements = labelArray.length;
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
      maintainAspectRatio: true,
      scales: {
        yAxes: [
          {
            ticks: {
              min: -2,
              max: 2,
              stepSize: 1,
              fontSize: canvasWidth / 50,
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
              fontSize: canvasWidth / 50,
              labelOffset: canvasWidth / (noOfdataelements * 2),
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
  countHdb3++;
}
