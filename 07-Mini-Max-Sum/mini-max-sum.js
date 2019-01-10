/**
 * Given five positive integers, find the minimum and maximum values that can be
 * calculated by summing exactly four of the five integers. Then print the
 * respective minimum and maximum values as a single line of two space-separated
 * long integers. For example arr=[1,3,5,7,9] the min sum would be 1+3+5+7 and
 * max sum would be 3+5+7+9 so the print out would be: 16 24
 */
/**
 * Personal notes:
 * Since we are always given 5 numbers and only need to calculate 4, we only
 * need to find the min number, and max number in the array. The min sum would
 * be all of the numbers other than the max number summed up. The max sum would
 * be all of the numbers other than the min number summed up.
 */

function miniMaxSum(arr) {
  const indexOfMax = arr.indexOf(Math.max(...arr));
  const minSum = arr
    /* Remove the largest value from array */
    .slice(0, indexOfMax)
    .concat(arr.slice(indexOfMax + 1))
    /* Sum values in left over array */
    .reduce(sumArray, 0);
  
  const indexOfMin = arr.indexOf(Math.min(...arr));
  const maxSum = arr
    /* Remove the smallest value from array */
    .slice(0, indexOfMin)
    .concat(arr.slice(indexOfMin + 1))
    /* Sum values left over in array */
    .reduce(sumArray, 0);

  console.log(minSum, maxSum)
}

const sumArray = (acc, value) => acc += value;