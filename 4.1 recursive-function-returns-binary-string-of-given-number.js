//4.1 Write a recursive function that returns the binary string of a given decimal number Given 4 as the decimal input, the function should return 100

decimalToBinary(3); // 11
decimalToBinary(8); // 1000
decimalToBinary(1000); // 1111101000

function decimalToBinary(digit) {
    if(digit >= 1) {
      if (digit % 2) {
        return decimalToBinary((digit - 1) / 2) + 1;
      } else {
        return decimalToBinary(digit / 2) + 0;
      }
    } else {
        return '';
    }
  }