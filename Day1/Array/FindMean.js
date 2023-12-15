var findAverage = function (nums) {
    let value = 0;
    for (let i=0;i<nums.length;i++){
         value += nums[i]
    }
    const res = value/nums.length;
    return res;
  }
  console.log(findAverage([1,2,3,4,5]))