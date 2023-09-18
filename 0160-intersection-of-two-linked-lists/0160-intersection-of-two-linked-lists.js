/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let l1 = 0;
  let l2 = 0;

  let curr1 = headA;
  let curr2 = headB;

  while (curr1 !== null) {
    curr1 = curr1.next;
    l1++;
  }
  while (curr2 !== null) {
    curr2 = curr2.next;
    l2++;
  }

  const d = Math.abs(l1 - l2);

  curr1 = headA;
  curr2 = headB;

  if (l1 > l2) {
    for (let i = 0; i < d; i++) {
      curr1 = curr1.next;
    }
  } else {
    for (let i = 0; i < d; i++) {
      curr2 = curr2.next;
    }
  }

  while (curr1 !== curr2) {
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  return curr1;
};