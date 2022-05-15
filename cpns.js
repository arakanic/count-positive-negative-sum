/*
This function returns an array containing a pair of integers, the first of which is the count of positives numbers and the second the sum of negative numbers. It returns an empty array if the input is an empty array or is null.
*/
function countPositivesSumNegatives(input) {
    let pos = []
    let neg = []
    if (input == null || input.length == 0) {
      return []
    }
    else {
      input.filter(i => i > 0 ? pos.push(i) : neg.push(i))
      return [pos.length, neg.reduce((sum, n) => sum + n, 0)]
    }
  }