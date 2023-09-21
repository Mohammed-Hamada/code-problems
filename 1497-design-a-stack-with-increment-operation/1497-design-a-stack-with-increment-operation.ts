class CustomStack {
  private s: number[] = [];
  constructor(private maxSize: number) {
    this.maxSize = maxSize;
  }

  push(x: number): void {
    if (this.s.length >= this.maxSize) {
      return;
    }
    this.s.push(x);
  }

  pop(): number {
    if (this.s.length <= 0) {
      return -1;
    }
    return this.s.pop()!;
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < this.s.length; i++) {
      if (k > this.s.length) {
        this.s[i] = this.s[i] + val;
      } else {
        if (i === k) break;
        this.s[i] = this.s[i] + val;
      }
    }
  }
}