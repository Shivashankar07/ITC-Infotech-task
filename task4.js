var arr = [..."axc"];
var searchArr = [..."ahbgdc"];
var errCount = 0;

for (let i = 0; i < arr.length; i++) {
  let getIndex = searchArr.indexOf(arr[i]);

  if (getIndex >= 0) {
    searchArr = searchArr.slice(getIndex, searchArr.length);
  } else {
    errCount++;
    break;
  }
}

if (errCount > 0) {
  console.log("false");
} else {
  console.log("true");
}
