const nums = [1, 2, 3, 4, 6, 7];
const goal = 10;

function twoSum(nums, goal) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const curr = nums[start] + nums[end];

    if (curr > goal) {
      end -= 1;
    } else if (curr < goal) {
      start += 1;
    } else {
      return [nums[start], nums[end]];
    }
  }

  return [];
}

console.log(twoSum(nums, goal));