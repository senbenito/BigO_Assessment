let function o1 = (array, index) => {
  return array[index];
}

let function oN = (array) => {
  for (let i=0; i<array.length; i++){
    console.log(array[i]);
  }
}

let function oNSquared = (arrayOfArrays) => {
  for (let i=0; i<arrayOfArrays.length; i++){
    for (let j=0; j<arrayOfArrays[i].length; j++){
      console.log(arrayOfArrays[i][j]);
    }
  }
}
