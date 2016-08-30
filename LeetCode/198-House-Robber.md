# 198 House Robber<sup>Easy</sup>

> You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and **it will automatically contact the police if two adjacent houses were broken into on the same night.**  

> Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight **without alerting the police.**

Dynamic programming, equation:
max[n] = Math.max(max[n-1], max[n-2] + num[n]).

To save space, we can just use two variables to store previous results.

```javascript
var rob = function() {
  return spaceSaved(nums);

  function classicDP(nums) {
      var l       = nums.length,
          max     = [];
          max[-1] = 0;
          max[0]  = nums[0];

      for (var i=1; i<l; i++) {
          max[i] = Math.max(max[i-1], max[i-2] + nums[i]);
      }

      return max[l-1];
  }


  function saveSpace(nums) {
      var l    = nums.length,
          temp = 0,
          max1 = 0,  //max[n-1]
          max2 = 0;  //max[n-2]

      for (var i=0; i<l; i++) {
          temp = max1;
          max1 = Math.max(max1, max2 + nums[i]);
          max2 = temp;
      }

      return max1;    
  }
};

```
