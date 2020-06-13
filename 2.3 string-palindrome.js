//2.3 Check if a given string is a palindrome "racecar" is a palindrome. "race car" should also be considered a palindrome. Case sensitivity should be taken into account

isPalindrome("racecar"); 
isPalindrome("race Car");
function isPalindrome(word) 
{
  //Replace all spaces to "" and show case sesitivity
  var lettersOnly = word.toUpperCase().replace(/\s/g, "");
  // consider the obtained string to the original string
  return lettersOnly === lettersOnly.split("").reverse().join("");
}