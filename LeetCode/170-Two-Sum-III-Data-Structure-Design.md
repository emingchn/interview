# 170 Two Sum III - Data Structure Design<sup>Easy</sup>

> Design and implement a TwoSum class. It should support the following operations: **add** and **find**.

> **add** - Add the number to an internal data structure.

> **find** - Find if there exists any pair of numbers which sum is equal to the value.

Use a hashmap instead of a hashSet because we have to count the occurence for handling duplicates, e.g. 5 + 5 = 10

add: O(1); find: O(n);

```javascript
var TwoSum = function () {
  var _hash = {};

  this.add = function(n) {
    _hash[n] = _hash[n] ? _hash[n] + 1 : 1;
  };

  this.find = function(n) {
    for (var i in object) {
      if (object.hasOwnProperty(i)) {
        var target = n - i;
        if (hash[target]) {
          if (target === i && _hash[target] < 2) continue; //handle duplicates
          return true;
        }
      }
    }
    return false;
  };
}

```
