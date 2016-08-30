# 102 Binary Tree Level Order Traversal<sup>Easy</sup>

> Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

> For example:
Given binary tree **[3,9,20,null,null,15,7]**,
<pre>
....3
   / \
  9  20
    /  \
   15   7
</pre>
> return its level order traversal as:
<pre>
[
  [3],
  [9,20],
  [15,7]
]
</pre>

Use a queue, [].shift() = dequeue, [].push() = enqueue

```javascript

var levelOrder = function(root) {
  if (!root) return [];

  var queue = [],
      ret   = [],
      cur;

  queue.push({node：root, level: 0});

  while (queue.length) {
    cur = queue.shift();

    if (!ret[cur.level]) ret[cur.level] = [];
    ret[cur.level].push(cur.node.val);

    if (cur.node.left) queue.push({node: root.left, level: cur.level+1});
    if (cur.node.right) queue.push({node: root.right, level: cur.level+1});
  }

  return ret;
};


```
