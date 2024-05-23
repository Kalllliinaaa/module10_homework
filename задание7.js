let arr = [0, 3, 2, 4];
function parity(arr){
  for (let i = 0 ; i < arr.length; i++){
    if(arr[i] % 2 === 0){ 
      console.log(arr[i] + ' - Четное');
    } else {
      console.log(arr[i] + ' - Нечетное');
    }
  }
}


parity(arr);
