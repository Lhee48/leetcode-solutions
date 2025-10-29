function longestConsecutive(nums: number[]): number {
  const numSet = new Set<number>(nums);
  let longest: number = 0;

  for (const number of numSet) {
    if (!numSet.has(number - 1)) {
      let length = 1;
      while (numSet.has(number + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([1, 0, 1, 2]));
