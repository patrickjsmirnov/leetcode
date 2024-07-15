/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
const findTheDistanceValue = function (arr1, arr2, d) {
  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    let count2 = 0;

    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        count2++;
      }
    }

    if (count2 === 0) {
      count++;
    }
  }

  return count;
};

function findTheDistanceValue2(arr1, arr2, d) {
  arr2.sort((a, b) => a - b);

  function isValid(val) {
    let left = 0;
    let right = arr2.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (Math.abs(val - arr2[mid]) <= d) {
        return false;
      } else if (arr2[mid] < val) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return true;
  }

  let distanceValue = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (isValid(arr1[i])) {
      distanceValue++;
    }
  }

  return distanceValue;
}

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)); // 2
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)); // 2
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)); // 1
