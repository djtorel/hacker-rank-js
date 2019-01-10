/**
 * You are in charge of the cake for your niece's birthday and have decided the 
 * cake will have one candle for each year of her total age. When she blows out 
 * the candles, she’ll only be able to blow out the tallest ones. Your task is 
 * to find out how many candles she can successfully blow out.
 * 
 * Input: array of candle heights
 * Output: integer of the sum of candles that can be blown out
 */

function birthdayCakeCandles(ar) {
  /* Find largest value in array */
  const maxNum = Math.max(...ar);

  /* Find how many times this number appear in array */
  return ar.reduce((acc, val) => (
    /* If val === maxNum return acc incremented by 1, otherwise return acc */
    val == maxNum ? ++acc : acc
  ), 0);
}