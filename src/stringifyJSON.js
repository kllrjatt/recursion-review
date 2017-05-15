// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {

  // refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof 
  // for type of's'

  // edge cases 
  // type of object is a function or undefined 
  // return undefined 

  if (typeof obj === 'function' || typeof obj === 'undefined') {
    return undefined;
    // if type of obejct is number or boolean 
    // convert object to a strin g
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
    // if the type of object is object but value is null 
    // convert null to string -- can hard code or use '"' + null + '"'
  } else if (typeof obj === 'object' && obj === null) {
    return 'null';
    //if  type of is string , add addtional quatoations before and after object 
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
    // if is an array, stringify each element of the array 
  } else if (typeof obj === 'object' && Array.isArray(obj)) {
    // use temp storage to store stringified elements 
    var tempArray = [];
    // use for loop to iterate through the array 
    for (var i = 0; i < obj.length; i++) {
      // push stringiied elements into the temp array 
      tempArray.push(stringifyJSON(obj[i]));
    }
    // join all elements of temp array and add [] to it 
    return '[' + tempArray.join(',') + ']';
    // if obj is object and not an array 
  } else if (typeof obj === 'object' && !Array.isArray(obj)) {
    // use temp storage for key , value 
    // use temp array to store key value combos 
    var keyTemp = [];
    var valueTemp = [];
    var result = [];
    // convert key and value to strings using function 
    // store results in key temp and value temp 
    // if type of value is function or undefined 
      // skip 
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        continue;
      } else {
        keyTemp.push(stringifyJSON(key));
        valueTemp.push(stringifyJSON(obj[key]));
      }
    }
    console.log(keyTemp, valueTemp);
    // join value from key temp and value temp as a string in to result
    for (var j = 0; j < keyTemp.length; j++) {
      result.push(keyTemp[j] + ':' + valueTemp[j]);
    }
    // join result with a comma and add string culries infront and back.
    return '{' + result.join(',') + '}';
  }
};
