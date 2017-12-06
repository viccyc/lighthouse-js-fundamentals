function merge(firstArray, secondArray) {
  for (var i = 0; i < secondArray.length; i ++) {
    firstArray.push(secondArray[i]);
  }

  firstArray.sort();
  return firstArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
//console.log(merge([ 1, 15, 6 ], []), "=?", [ 1, 6, 15 ]);
//oops, sort() doesn't work in this case.
