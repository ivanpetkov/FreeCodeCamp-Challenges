function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var arr = arr1.concat(arr2);
  
  function isContain(value){
    return (arr1.indexOf(value) === -1) || (arr2.indexOf(value) === -1);
  }
  
  newArr = arr.filter(isContain);
  
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);