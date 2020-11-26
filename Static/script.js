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
  let cons0 = input.value;
  for(let i=0;i<cons0;i++){
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
  let cons0 = input.value;
  for(let i=0;i<cons0;i++){
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
function flipIt(bit){
  if(bit==1){
    return -1;
  }else{
    return 1;
  }
}
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
  let cons0 = input.value;
  for(let i=0;i<cons0;i++){
    arr[i] = 0;
  }
  let encodedSignal = diffManEncoder(arr);
  let labelArray = diffManLabelArray(arr);
  console.log(labelArray);
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
  countDiffMan++;
}