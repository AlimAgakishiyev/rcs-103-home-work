function clear(array) {
    return array.filter(element => element);
  }
  
  console.log(clear([0, 1, false, 2, undefined, '', 3, null]));
  