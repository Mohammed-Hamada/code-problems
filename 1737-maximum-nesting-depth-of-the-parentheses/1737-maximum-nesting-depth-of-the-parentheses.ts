function maxDepth(s: string): number {
  let stack = [];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
      max = Math.max(max, stack.length);
    } else if (s[i] === ')') {
      stack.pop();
    } else continue;
  }
  if (stack.length !== 0) return -1; // invalid symbols
  return max;
}