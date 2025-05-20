function change(amount, coins) {
  coins.sort((a, b) => a - b);
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = coins.length - 1; i >= 0; i--) {
    const nextDP = Array(amount + 1).fill(0);
    nextDP[0] = 1;

    for (let j = 1; j < nextDP.length; j++) {
      nextDP[j] = dp[j] + (nextDP[j - coins[i]] ?? 0);
    }

    dp = nextDP;
  }

  return dp[dp.length - 1];
}
