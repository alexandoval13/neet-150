class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  /**
   * questions
   * Are they always going to be in order
   */
  canPartition(nums) {
    // get the sum of the entire thing
    let total = nums.reduce((acc, curr) => acc + curr, 0);

    if (!total % 2) return false;

    let target = total / 2;

    let sums = [0]; // curr values reached

    // loop through the array, add to the sums
    for (let num of nums) {
      let newSums = [];
      // get new values list by adding the curr num to the values in list of sums
      for (let sum of sums) {
        let newSum = sum + num;

        if (sum + num === target) return true;

        newSums.push(newSum);
      }

      sums = sums.concat(newSums);
    }

    return false;
  }
}
