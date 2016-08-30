# 244	Shortest Word Distance II<sup>Medium</sup>

>This is a follow up of Shortest Word Distance. The only difference is now you are given the list of words and your method will be called repeatedly many times with different parameters. How would you optimize it?

>Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list.

>For example,

>Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

>Given word1 = “coding”, word2 = “practice”, return 3.

>Given word1 = "makes", word2 = "coding", return 1.
>
Note:
You may assume that word1 does **not equal to** word2, and word1 and word2 are both in the list.

Store all the indexes of a word into an array and add the [word, array] pair to a hashMap.

```javascript
function WordDistance(words) {
  var _hash = {}, _l = words.length;

  for (var i=0; i<_l; i++) {
    if (!_hash[words[i]]) {
      _hash[words[i]] = [];
    }
    _hash[words[i]].push(i);
  }  // note all arrays in the hashMap are sorted and have no same values unless word1 equals to word2

  this.getShortest = function(word1, word2) {
    var ret = Number.MAX_SAFE_INTEGER,
        l1  = _hash[word1],
        l2  = _hash[word2],
        n   = l1.length,
        m   = l2.length,
        i   = 0,
        j   = 0;

    while (i<n && j<m) {
      var diff = Math.abs(l1[i] - l2[j]);
      ret = Math.min(diff, ret);
      if(l1[i] > l2[j]) j++;
      else i++;    
    }

    return ret;
  };
}

```
