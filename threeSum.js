
const nums = [1, 12, 3, 4, 16, 7];
const goal = 32;
    
/**
* Do not change this function body
* Do your changes within the function 
*/
function twoSum(nums, goal) {
  nums.sort()
    let start = 0;
    let end = nums.length - 1;
    let middle = start + 1;
  
    while (middle < end) {
      const curr = nums[start] + nums[end] + nums[middle];
  
      if (curr > goal) {
        end -= 1;
      } else if (curr < goal) {
        start += 1;
      }else {
        console.log(`Because ${nums[start]} + ${nums[end]} + ${nums[middle]} === ${goal}`)
        return [nums[start], nums[end], nums[middle]];
      }
    }
  
    return false;
  }
console.log(twoSum(nums, goal))
