# 205 Isomorphic Strings<sup>Easy</sup>
> Given two strings **s** and **t**, determine if they are isomorphic. Two strings are isomorphic if the characters in **s** can be replaced to get **t**.

> All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

> For example,

> Given _"egg"_, _"add"_, return true.

> Given _"foo"_, _"bar"_, return false.

> Given _"paper"_, _"title"_, return true.

Use two hash tables to keep track of the mapping relation of two characters in each position.

For example, _"egg"_, _"add"_, hash1['e'] = 'a', hash2['a'] = 'e';

```javascript
var isIsomorphic = function(s, t) {
  var hash1 = {}, hash2 = {}, l = s.length;

  for (var i=0; i<l; i++) {
    if (hash1[s[i]] && hash1[s[i]] !== t[i]) return false;
    if (hash2[t[i]] && hash2[t[i]] !== s[i]) return false;

    hash1[s[i]] = t[i];
    hash2[t[i]] = s[i];
  }

  return true;
};

```
