//5.1 Given an integer, determine if it is a power of 2. If so, return that number, else return -1. (0 is not a power of two)
isPowerOfTwo(4); // true
isPowerOfTwo(64); // true
isPowerOfTwo(1); // true
isPowerOfTwo(0); // false
isPowerOfTwo(-1); // false
function isPowerOfTwo(number) {
    return number & (number - 1) === 0;
  }
  function isPowerOfTwoZeroCase(number) {
    return (number !== 0) && ((number & (number - 1)) === 0);
  }


