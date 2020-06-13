//4.2 Write a recursive function that performs a binary search

function recursiveBinarySearch(array, value, leftPosition, rightPosition) {
    if (leftPosition > rightPosition) return -1;
    var middlePivot = Math.floor((leftPosition + rightPosition) / 2);
    if (array[middlePivot] === value) {
      return middlePivot;
    } else if (array[middlePivot] > value) {
      return recursiveBinarySearch(array, value, leftPosition, middlePivot - 1);
    } else {
      return recursiveBinarySearch(array, value, middlePivot + 1, rightPosition);
    }
  }