function maxProfit(prices) {
  // [buy, sell, skipWith, skipWithout];
  const dp = new Array(4).fill(null);

  for (let i = 0; i < prices.length; i++) {
    let value = prices[i];

    let maxProfits = [
      dp[3] ? dp[3] - value : 0 - value, // buy
      dp[0] || dp[2]
        ? Math.max((dp[0] || -Infinity) + value, (dp[2] || -Infinity) + value)
        : null, // sell
      dp[0] || dp[2] ? Math.max(dp[0] || -Infinity, dp[2] || -Infinity) : null, // skip with
      dp[1] || dp[3] ? Math.max(dp[1] || -Infinity, dp[3] || -Infinity) : null, // skip without
    ];

    for (let j = 0; j < dp.length; j++) {
      dp[j] = maxProfits[j];
    }
    // console.log({dp})
  }

  return dp.reduce((acc, curr) => Math.max(acc, curr), 0);
}
