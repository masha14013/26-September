var findAverage = function (nums) {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < nums.length; i++){
    sum += nums[i];
  }
  average = sum / nums.length;
  return average;
}