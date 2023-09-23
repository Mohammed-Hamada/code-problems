class MyCircularQueue {
    private _k: number;
    private _queue: (number | undefined)[];
    private _front: number;
    private _rear: number;
    private _size: number;

    constructor(k: number) {
        if (k < 0) {
            throw 'k must be greater than zero.';
        }

        this._k = k;
        this._queue = new Array<number>(k);
        this._size = 0;
        this._front = 0;
        this._rear = -1;
    }

    enQueue(value: number): boolean {
        if (this.isFull()) {
            return false
        }

        this._rear = (this._rear + 1) % this._k;
        this._queue[this._rear] = value;
        this._size++;
        return true

    }

    deQueue(): boolean {
        if (this.isEmpty()) {
            return false;
        }

        const item = this._queue[this._front % this._k];
        this._queue[this._front] = undefined;
        this._front = (this._front + 1) % this._k;
        this._size--;

        return true;
    }

    Front(): number {
        if (this.isEmpty()) {
            return -1;
        } else return this._queue[this._front];
    }

    Rear(): number {
        if (this.isEmpty()) {
            return -1;
        } else return this._queue[this._rear];
    }

    get size(): number {
        return this._size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    isFull(): boolean {
        return this._size === this._k;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */