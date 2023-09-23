class MyQueue {
  s1: number[];
  s2: number[];

  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x: number): void {
    this.s1.push(x);
  }

  pop(): number | undefined {
    if (!this.s2.length) {
      const s1Length = this.s1.length;
      for (let i = 0; i < s1Length; i++) {
        this.s2.push(this.s1.pop() as number);
      }
    }
    return this.s2.pop();
  }

  peek(): number {
    return this.s1.length && !this.s2.length
      ? this.s1[0]
      : this.s2[this.s2.length - 1];
  }

  empty(): boolean {
    return !this.s1.length && !this.s2.length ? true : false;
  }
}
