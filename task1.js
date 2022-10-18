var arr = [1, 2, 3, 1, 1, 1, 3, 4, 1];
var res = [];
var maxVal = 0;
var maxOcc = 0;

for (let i = 0; i < arr.length; i++) {
  el = arr[i];
  if (res[el]) {
    res[el] += 1;
    if (res[el] > maxVal && res[el] > arr.length / 2) {
      maxVal = res[el];
      maxOcc = el;
    }
  } else {
    res[el] = 1;
  }
}

console.log("majority element ", maxOcc);
