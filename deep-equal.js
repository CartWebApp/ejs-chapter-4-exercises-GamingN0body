function deepEqual(a, b){
  let itemA = Object.keys(itemA);
  let itemB = Object.keys(itemB);
  //console.log(itemA[itemA[0]]);
  if (itemB.length != itemA.length){
    return false;
  }
  for(let x = 0; x < itemA.length; x++){
    if (itemB.indexOf(itemA[x]) === -1){
      return false;
    }
  }
  for(let x = 0; x < itemB.length; x++){
    if (itemA.indexOf(itemB[x]) === -1){
      return false;
    }
  }
  for(let x = 0; x < itemA.length; x++){
    let obj1 = 0;
    let obj2 = 0;
    if (typeof itemA[itemA[x]] == "object" && itemA[itemA[x]] != null && typeof itemB[itemB[itemB.indexOf(itemA[x])]] == "object" && itemB[itemB[itemB.indexOf(itemA[x])]] != null){
      obj1 = itemA[itemA[x]];
      obj2 = itemB[itemB[itemB.indexOf(itemA[x])]];
      if(deepEqual(obj1,obj2) === false){
        return false;
      }
    }
    else if(typeof itemA[itemA[x]] != typeof itemB[itemB[itemB.indexOf(itemA[x])]]){
    	return false;
    }
    else if(typeof itemA[itemA[x]] != "object"){
      if(itemA[itemA[x]] != itemB[itemB[itemB.indexOf(itemA[x])]]){
        return false;
      }
    }
  }
  return true;
}



// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
