function isValid(s: string): boolean {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            if (stack.length && stack[stack.length - 1] === '(') {
                stack.pop();
            } else return false;
        } else if (s[i] === '}') {
            if (stack.length && stack[stack.length - 1] === '{') {
                stack.pop();
            } else return false;
        } else if (s[i] === ']') {
            if (stack.length && stack[stack.length - 1] === '[') {
                stack.pop();
            } else return false;
        }
    }

    return !stack.length ? true : false;
};