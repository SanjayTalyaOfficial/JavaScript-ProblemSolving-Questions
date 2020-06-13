//Given two strings, return true if they are anagrams of one another "Mary" is an anagram of "Army"

var firstWord = "Mary";
var secondWord = "Army";
isAnagram(firstWord, secondWord);
function isAnagram(first, second) 
{
 var a = first.toUpperCase();
 var b = second.toUpperCase();
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  return a === b;
}