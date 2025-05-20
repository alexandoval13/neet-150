function findTargetSumWays(nums, target) {
  let dp = new Map();
  dp.set(0, 1);

  for (let num of nums) {
    // [2, 2, 2] => index 0
    let nextDP = new Map();
    for (let curr of dp) {
      // [key, value]
      let prevSub = nextDP.get(curr[0] - num) || 0; // get the prev count if any
      nextDP.set(curr[0] - num, prevSub + curr[1]); // add to the count

      let prevSum = nextDP.get(curr[0] + num) || 0; // get the prev count if any
      nextDP.set(curr[0] + num, prevSum + curr[1]); // add to the count
    }
    dp = nextDP;
  }

  return dp.get(target) || 0;
}
