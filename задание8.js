let myMap = new Map();

  myMap.set(1, 60);
  myMap.set(2, 75);
  myMap.set(3,90);
  
    console.log(myMap.keys());
    console.log(myMap.values());

for(let name of myMap.keys()){
  console.log('Ключ - ', name)
}
for(let name of myMap.values()){
  console.log('Значение - ', name)
}
