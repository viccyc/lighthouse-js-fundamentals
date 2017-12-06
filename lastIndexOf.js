function lastIndexOf(array, value) {
  var lastTime = 0;
  var foundMatch = false;
  //returns the index of the last time the value occurs in the array.
  for (var i = 0; i < array.length; i++) {

//console.log('before if ' + array[i]);

    if (array[i] === value) {
      lastTime = i;
      foundMatch = true;
    }
  }

  if (foundMatch) {
    return lastTime;
  }
  else {
    return -1;
  }
//If the value never occurs, the function should return -1.

}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

//console.log(lastTime);
