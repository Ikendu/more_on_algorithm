// Mot uet tested offline
//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {number}
 */

function linkMaxSum(head) {
  let store = [];
  while (head) {
    store.push(head.val);
    head = head.next;
  }
  console.log(store);
  let len = store.length;
  for (let i = 0; i < len; i++) {
    max = Math.max(max, store[i] - store[len - i - 1]);
  }
}
console.log(linkMaxSum([5, 4, 2, 1]));
