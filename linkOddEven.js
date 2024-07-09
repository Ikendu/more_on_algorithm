//Not working here yet
function LinkedNode(node) {
  this.node = node;
  this.next = null;
}

function evenOddList(head) {
  if (head == null || head.next == null) return head;

  let even = new LinkedNode(0);
  let odd = new LinkedNode(0);
  let evenPtr = even;
  let oddPtr = odd;
  let idx = 1;

  while (head !== null) {
    if (idx % 2 === 0) {
      evenPtr.next = head;
      evenPtr = evenPtr.next;
    } else {
      oddPtr.next = head;
      oddPtr = oddPtr.next;
    }
    head = head.next;
    idx++;
  }
  evenPtr.next = null;
  oddPtr.next = even.next;

  return oddPtr.next;
}

console.log(evenOddList([1, 2, 3, 4, 5]));
