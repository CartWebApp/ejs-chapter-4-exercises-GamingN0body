function range(start, end, step = 1){
	let num = [];
	if (start < end){
      for (let s = start; s <= end; s += step) {
        num.push(s);
      }
    }
      else {
       for (let s = start; s >= end; s += step) {
          num.push(s);
       }
     }
    return num;
}
  function sum(num) {
    let sum1 = 0;
  	for (let s = 0; s < num.length; s++){
        sum1 += num[s];
      }
    return sum1;
  }
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5,2,-1));
// [5, 4, 3, 2]
console.log(sum(range(1,10)));
// → 55