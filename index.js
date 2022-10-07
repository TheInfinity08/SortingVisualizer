//                                SORTING ALGORITHMS SECTIONS

// BUBBLE SORT
function bubbleSort() {
  for (let i = 0; i < divArr.length; i++) {
    let swapped = false;
    for (let j = 1; j < divArr.length - i; j++) {
      setInterval(() => {
        divArr.at(j).style.background = "#38E54D";
        divArr.at(j - 1).style.background = "#38E54D";
        if (
          parseInt(divArr.at(j).style.height) <
          parseInt(divArr.at(j - 1).style.height)
        ) {
          let temp = parseInt(divArr.at(j).style.height);
          divArr.at(j).style.height =
            parseInt(divArr.at(j - 1).style.height) + "%";
          divArr.at(j - 1).style.height = temp + "%";
          swapped = true;
          $(".stroke").css("background-color", "#FEDB39");
        }
      }, 100);
    }

    if (swapped == false) {
      break;
    }
  }
}

// BUBBLE SORT

// SELECTION SORT

function selectionSort() {
  for (let i = 0; i < divArr.length - 1; i++) {
    let min_idx = i;

    setTimeout(() => {
      $(".stroke").css("background-color", "#FEDB39");
      $(".stroke").css("background-color", "#38E54D");
      $(".stroke").css("background-color", "#FEDB39");
      $(".stroke").css("background-color", "#38E54D");
      $(".stroke").css("background-color", "#FEDB39");
      $(".stroke").css("background-color", "#38E54D");
      $(".stroke").css("background-color", "#FEDB39");
      $(".stroke").css("background-color", "#38E54D");
      $(".stroke").css("background-color", "#FEDB39");
      $(".stroke").css("background-color", "#38E54D");
      $(".stroke").css("background-color", "#FEDB39");
      $(".stroke").css("background-color", "#38E54D");
      $(".stroke").css("background-color", "#FEDB39");
      $(".stroke").css("background-color", "#38E54D");
      for (let j = i + 1; j < divArr.length; j++) {
        if (
          parseInt(divArr.at(j).style.height) <
          parseInt(divArr.at(min_idx).style.height)
        ) {
          min_idx = j;
        }
      }
      if (min_idx != i) {
        let temp = parseInt(divArr.at(min_idx).style.height);
        divArr.at(min_idx).style.height =
          parseInt(divArr.at(i).style.height) + "%";
        divArr.at(i).style.height = temp + "%";
      }
      divArr.at(i).style.background = "#FEDB39";
      divArr.at(min_idx).style.background = "#38E54D";
    }, 500);
    $(".stroke").css("background-color", "#38E54D");
  }
  $(".stroke").css("background-color", "#38E54D");
}

// SELECTION SORT

// INSERTION SORT

function insertionSort() {
  var last;
  for (let i = 0; i < divArr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      setInterval(() => {
        if (
          parseInt(divArr.at(j).style.height) <
          parseInt(divArr.at(j - 1).style.height)
        ) {
          $(".stroke").css("background-color", "#38E54D");
          let temp = parseInt(divArr.at(j).style.height);
          divArr.at(j).style.height =
            parseInt(divArr.at(j - 1).style.height) + "%";
          divArr.at(j - 1).style.height = temp + "%";
          divArr.at(j).style.background = "#FEDB39";
          last = j;
        } else {
          // break;
          j = -1;
          divArr.at(last).style.background = "#38E54D";
        }
      }, 50);
    }
  }
}

// INSERTION SORT

// QUICK SORT

function partition(p, r) {
  var x = parseInt(divArr.at(r).style.height);
  var i = p - 1;
  var temp;
  for (let j = p; j < r; j++) {
    divArr.at(j).style.background = "#FEDB39";
    divArr.at(r).style.background = "#FEDB39";
    if (parseInt(divArr.at(j).style.height) <= x) {
      i++;
      temp = parseInt(divArr.at(j).style.height);
      divArr.at(j).style.height = parseInt(divArr.at(i).style.height) + "%";
      divArr.at(i).style.height = temp + "%";
      divArr.at(j).style.background = "#38E54D";
      divArr.at(i).style.background = "#38E54D";
    }
  }

  temp = parseInt(divArr.at(r).style.height);
  divArr.at(r).style.height = parseInt(divArr.at(i + 1).style.height) + "%";
  divArr.at(i + 1).style.height = temp + "%";
  divArr.at(r).style.background = "#38E54D";
  divArr.at(i + 1).style.background = "#38E54D";

  return i + 1;
}

function quickSort(p, r) {
  var q;

  if (p < r) {
    setInterval(() => {
      q = partition(p, r);
    }, 400);
    setInterval(() => {
      quickSort(p, q - 1);
    }, 400);
    setInterval(() => {
      quickSort(q + 1, r);
    }, 400);
  }
}

// QUICK SORT

// MERGE SORT
// divArr.at(r).style.background = "#38E54D";

function merge(l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;
  divArr.at(l).style.background = "#38E54D";
  divArr.at(m).style.background = "#38E54D";
  divArr.at(r).style.background = "#38E54D";

  var L = new Array(n1);
  var R = new Array(n2);

  for (var i = 0; i < n1; i++) {
    L[i] = parseInt(divArr.at(l + i).style.height);
    divArr.at(i).style.background = "#FEDB39";
  }

  for (var j = 0; j < n2; j++) {
    R[j] = parseInt(divArr.at(m + 1 + j).style.height);
    divArr.at(j).style.background = "#FEDB39";
  }

  var i = 0;
  var j = 0;

  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      divArr.at(k).style.height = L[i] + "%";
      i++;
    } else {
      divArr.at(k).style.height = R[j] + "%";
      j++;
    }
    k++;
  }

  while (i < n1) {
    divArr.at(k).style.height = L[i] + "%";
    i++;
    k++;
  }

  while (j < n2) {
    divArr.at(k).style.height = R[j] + "%";
    j++;
    k++;
  }
}

function mergeSort(l, r) {
  // $(".stroke").css("background-color", "#38E54D");
  if (l >= r) {
    return;
  }
  setInterval(() => {
    var m = l + parseInt((r - l) / 2);
    mergeSort(l, m);
    mergeSort(m + 1, r);
    merge(l, m, r);
  }, 700);
}

// MERGE SORT

//                                     SORTING ALGORITHMS SECTIONS

var n = 0;
const arr = [];
const divArr = [];
var count = 0;

function init() {
  if (count == 1) {
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * 100) + 1);
      console.log(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
      divArr[i] = document.createElement("div");
      divArr[i].className = "stroke";
      divArr[i].style.height = arr[i] + "%";
      divArr[i].style.width =
        (document.getElementById("graph").offsetWidth - 16) / n + "px";
      document.getElementById("graph").appendChild(divArr[i]);
    }
  } else {
    console.log("NOOB!!");
  }
}

$("#clr").click(() => {
  location.reload();
});

$("#newArr").click(() => {
  ++count;
  n = $("#numOfElts").val();
  if (n > 1000) {
    alert("!! INPUT SIZE EXCEEDS 1000 !! PLEASE SELECT A VALUE <= 1000");
    location.reload();
  }
  init();
});

$("#bubble").click(() => {
  bubbleSort();
});

$("#selection").click(() => {
  selectionSort();
});

$("#insertion").click(() => {
  insertionSort();
});

$("#quick").click(() => {
  quickSort(0, divArr.length - 1);
});

$("#merge").click(() => {
  mergeSort(0, divArr.length - 1);
});
