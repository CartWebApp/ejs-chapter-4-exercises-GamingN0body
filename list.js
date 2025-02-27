function arrayToList(array){
  if(array.length > 0){
  	return {value: array[0],
  				rest: arrayToList(array.slice(1))}
  }
  else{
    return null;
  }
}

function listToArray(list, arr) {
  let array = []
}

// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
