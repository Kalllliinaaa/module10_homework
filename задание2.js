var x;
x = undefined;

if (typeof x === 'number'){
 console.log('x' + '-' + 'число');
}
else if (typeof x === 'boolean'){
  console.log('x' + '-' + 'лог оператор');
}
else if(typeof x === 'string'){
  console.log('x' + '-' + 'строка');
}
else{
  console.log("Тип x не определён");
}
