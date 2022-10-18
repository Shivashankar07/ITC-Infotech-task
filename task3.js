var arr1 = [..."egg"];
var arr2 = [..."add"];
var res1 = {};
var res2 = {};
var count = 0;

if (arr1.length == arr2.length && arr1.length != 0) {
  for (let i in arr1) {
    el = arr1[i];
    if (res1[el]) {
      res1[el] += i;
    } else {
      res1[el] = i;
    }

    el2 = arr2[i];
    if (res2[el2]) {
      res2[el2] += i;
    } else {
      res2[el2] = i;
    }
  }
  fArr = Object.values(res1);
  sArr = Object.values(res2);
  if (fArr.length != sArr.length) {
    console.log("false");
  } else {
    for (let i = 0; i < sArr.length; i++) {
      if (fArr[i] == sArr[i]) {
        count += 1;
      }
    }
    if (fArr.length == count) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
} else {
  console.log("false");
}
