function reverseArray(arr) {
	let reverseArray = [];
  	for (let a = arr.length; a > 0; a--){
    	reverseArray.push(arr[a-1])
    }
	return reverseArray;  
}

function reverseArrayInPlace(arr) {
	let arrayValue = [];
  	for (let a = arr.length; a > 0; a--) {
      
    }
	return arrayValue;
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]