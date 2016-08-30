# Shortest Word Distance III<sup>Medium</sup>

> This is a follow up of Shortest Word Distance. The only difference is now word1 could be the same as word2.

>Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

> word1 and word2 **may be the same** and they represent two individual words in the list.
For example,

>Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

>Given word1 = “makes”, word2 = “coding”, return 1.

>Given word1 = "makes", word2 = "makes", return 3.

>Note:
You may assume word1 and word2 are both in the list.



```javascript

var shortestDistance = function(words, word1, word2) {
  var l     = words.length,
      ans   = Number.MAX_SAFE_INTEGER,
      index = -1;
  if (word1 === word2) {
    for (var i = 0; i < l; i++) {
       if (words[i] === word1) {
         if (index !== -1) {
           ans = Math.min(ans,i - index);
         }
         index = i;
       }
    }
  } else {
    for (var i = 0; i < l; i++) {
        if (words[i] === word1 || words[i] === word2) {
            if (index !== -1 && words[index] !== words[i]) {
                ans = Math.min(i - index, ans);
            }
            index = i;
        }
    }
  }
  return ans;
};

```
