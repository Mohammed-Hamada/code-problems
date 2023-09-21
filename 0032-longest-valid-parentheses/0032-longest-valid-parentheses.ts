function longestValidParentheses(s: string): number {
    const stack = [];
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')' && stack.length > 0) {
            stack.pop();
            currentCount += 2;
            if (stack.length === 0) {
                maxCount = Math.max(maxCount, currentCount);
            } else {
                maxCount = Math.max(maxCount, i - stack[stack.length - 1]);
            }
        } else {
            // Reset currentCount if the current character is not a valid ')'
            currentCount = 0;
        }
    }

    return maxCount;
}