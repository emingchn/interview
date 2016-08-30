# 243	Shortest Word Distance<sup>Easy</sup>

> Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

> For example,
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

> Given word1 = “coding”, word2 = “practice”, return 3.

>Given word1 = "makes", word2 = "coding", return 1.

> Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.

```javascript

var shortestDistance = function(words, word1, word2) {
  var index = -1, ans = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < words.length; i++) {
      if (words[i] === word1 || words[i] === word2) {
          if (index !== -1 && words[index] !== words[i]) {
              ans = Math.min(i - index, ans);
          }
          index = i;
      }
  }
  return ans;
};


```
