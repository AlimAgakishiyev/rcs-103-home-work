function swapCase(str) {
    return str.split('').map(function(char) {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    }).join('');
  }
  
  console.log(swapCase('Pis Olma Brat,O ki Xowbextdir'));
  