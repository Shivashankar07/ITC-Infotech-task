var str1 = "tap";
var str2 = "pet";

var arr1 = [...str1];
var arr2 = [...str2];

if (arr1.length == arr2.length) {
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]);
    if (index >= 0) {
      arr2.splice(index, 1);
    } else {
      break;
    }
  }
} else {
  console.log("Strings are not anagram");
}

arr2.length == 0
  ? console.log("Strings are anagrams")
  : console.log("Strings are not anagram");
