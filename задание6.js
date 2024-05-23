let arr = [3, 3, 2, 3];
function ElementsEqual(arr) {
for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false; 
    }
  }
  return true;
 }
console.log(ElementsEqual(arr)); 
