// Fastest O(n) time, O(n) space
function twoSum(nums: number[], target: number): number[] {
  const numsMapping = new Map<number, number>();

  for (let index = 0; index < nums.length; index++) {
    const find: number = target - nums[index];
    if (numsMapping.has(find)) {
      return [numsMapping.get(find)!, index];
    }
    numsMapping.set(nums[index], index);
  }
  return [];
}

// O(n^2) time, O(1) space
// function twoSum(nums: number[], target: number): number[] {
//   let firstIndex: number = 0
//   let secondIndex: number = 0
//
//   nums.forEach((n, i) => {
//     const find: number = target - n
//     const indexFind = nums.indexOf(find)
//
//     if (nums.includes(find) && i !== indexFind) {
//       firstIndex = i
//       secondIndex = indexFind
//       return
//     }
//   })
//
//   return [firstIndex, secondIndex]
// };
