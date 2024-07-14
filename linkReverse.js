// Not yet working well
function linkReverse(head) {
  let node = null;

  while (head) {
    let temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }
  return node;
}
