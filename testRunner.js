import { uniquePaths } from './uniquePaths';

console.log(
  'Test Unique Paths solution',
  JSON.stringify(uniquePaths(4, 4)) === JSON.stringify(20) ? '✅' : '❌'
);
