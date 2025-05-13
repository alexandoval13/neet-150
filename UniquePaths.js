class Solution {
  /**
   * @param {number} m - rows
   * @param {number} n - columns
   * @return {number}
   */
  uniquePaths(m, n) {
    // 2, 2
    let dp = new Array(n).fill(1); // [1, 1]

    let row = m - 1; // 0

    while (row > 0) {
      // 1 > 0
      // edit dp
      for (let i = n - 1; i >= 0; i--) {
        // i = 0
        dp[i] = dp[i] + (dp[i + 1] || 0); // 1 + 1 = 2
      }
      // decrement m
      row--;
    }

    return dp[0];
  }
}
