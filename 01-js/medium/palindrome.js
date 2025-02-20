/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let i=0;
  let j=str.length-1;
  while(i<=j){
    if( str.charAt(i) < 'a' || str.charAt(i) > 'z' || str.charAt(i) == ' '){
      i++;
      continue;
    }
    if( str.charAt(j) < 'a' || str.charAt(j) > 'z' || str.charAt(j) == ' '){
      j--;
      continue;
    }
    if( str.charAt(i) !=str.charAt(j) ){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
