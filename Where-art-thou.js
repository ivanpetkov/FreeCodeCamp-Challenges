function where(collection, source) {
  var arr = [];
  // What's in a name?
  var hasAllProp = true;
  var key = Object.keys(source);
  for(var i=0;i<collection.length;i++){
      for(var j=0;j<key.length;j++){
            if(!(collection[i].hasOwnProperty(key[j])) || collection[i][key[j]] !== source[key[j]]){
                hasAllProp = false;
                break;
            }
 
      }
      if(hasAllProp === true){
          arr.push(collection[i]);    
      } else {
          hasAllProp = true;
      }
  }
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
