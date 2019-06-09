// reduces the array to a single value.
// executes a provided function for each value of the array
// The return value of the function is stored in an accumulator

var numbers = [65, 44, 12, 4];

function getSum(total, num) {
  return total + num;
}

console.log("reduceRight",numbers.reduceRight(getSum));
