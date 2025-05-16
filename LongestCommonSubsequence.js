/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(text1, text2) {
  // let dp = new Array(text1.length + 1).fill(new Array(text2.length + 1).fill(0));
  const createRow = () => new Array(text2.length + 1).fill(0);
  const dp = new Array(text1.length + 1).fill().map(() => createRow());

  for (let i = text1.length - 1; i >= 0; i--) {
    for (let j = text2.length - 1; j >= 0; j--) {
      if (text1[i] === text2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][0];
}
