//2.4 Check if a given string is a isomorphic

  //For two strings to be isomorphic, all //occurrences of a character in string A can be //replaced with another character
  //to get string B. The order of the characters //must be preserved. There must be one-to-one //mapping for ever char of
  //string A to every char of string B.

  //`paper` and `title` would return true.
  //`egg` and `sad` would return false.
  //`dgg` and `add` would return true.

  //javascript
  //isIsomorphic("egg", 'add'); // true
  //isIsomorphic("paper", 'title'); // true
  //isIsomorphic("kick", 'side'); // false

// Before jumping into the program let us see what is isomorphism
// Two strings are isomorphic if one-to-one mapping is possible for every character of the first string to every character of the second string. For example, consider the two strings: “ACAB” and “XCXY”. We can map the characters of the first string to the characters of the second string as follows: 'A' maps to 'X'.

//the code for the question is below

isIsomorphic("egg", 'add'); 
isIsomorphic("paper", 'title'); 
isIsomorphic("kick", 'side'); 

function isIsomorphic(firstString, secondString) {
  if (firstString.length !== secondString.length) return false
  var letterMap = {};
  for (var i = 0; i < firstString.length; i++) {
    var letterA = firstString[i],
        letterB = secondString[i];
    if (letterMap[letterA] === undefined) {
      if(secondString.indexOf(letterB) < i){
          return false;
      } else {
          letterMap[letterA] = letterB;            
      }
    } else if (letterMap[letterA] !== letterB) {
      return false;
    }
  }
  return true;
}