# 21 Merge Two Sorted Lists<sup>Easy</sup>
> Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Use two pointers, and don't forget the rest nodes of the longer list.

```javascript
var mergeTwoLists = function(l1, l2) {
  var p1 = l1,
      p2 = l2,
      merged = new ListNode();
      cur = merged;

  while (p1 && p2) {
    if (p1.val < p2.val) {
      cur.next = p1;
      p1 = p1.next;
    } else {
      cur.next = p2;
      p2 = p2.next;
    }
    cur = cur.next;
  }

  while (p1) {
    cur.next = p1;
  }

  while (p2) {
    cur.next = p2;
  }

  return merged.next;
};

```
