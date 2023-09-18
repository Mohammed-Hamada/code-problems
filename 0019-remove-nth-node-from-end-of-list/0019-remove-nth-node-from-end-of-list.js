/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 
const removeNthFromEnd = (head, n) => {
    if (n <= 0 || !head) {
      return; // Invalid input or empty list
    }

    let fast = head;
    let slow = head;

    for (let i = 1; i <= n; i++) {
      if (!fast) {
        return;
      }
      fast = fast.next;
    }

    while (fast?.next) {
      fast = fast.next;
      slow = slow?.next;
    }

    if (!fast) {
      head = slow?.next;
    } else {
      slow.next = slow.next.next;
    }

    return head;
};