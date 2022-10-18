var arr = ["flowing", "flown", "flew"];
arrlen = arr.length;
var min = Math.min(arr[0].length, arr[arrlen - 1].length);

function longestPrefix(min) {
  for (var i = 0; i < arrlen; i++) {
    var check = arr[i].slice(0, min);
    var count = 0;
    for (var j = i + 1; j < arrlen; j++) {
      if (check == arr[j].slice(0, min)) {
        count++;
        if (count == arrlen - 1) {
          return check;
        }
      } else {
        return longestPrefix(min - 1);
      }
    }
  }
}

var prefix = longestPrefix(min);
if (!prefix) {
  console.log("no longest prefix");
} else {
  console.log("longest prefix", prefix);
}
