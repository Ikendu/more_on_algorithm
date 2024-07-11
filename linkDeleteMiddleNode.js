function ListNode(node, next) {
  this.node = node;
  this.next = next;
}
const deleteMiddlenode = (head) => {
  if (head == null) return head;
  let prev = new ListNode(0);

  prev.next = head;
  let slow = prev;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow.next = slow.next.next;
  return prev.next;
};
console.log(deleteMiddlenode([1, 3, 4, 7, 1, 2, 6]));
