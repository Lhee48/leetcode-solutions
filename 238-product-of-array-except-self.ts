function productExceptSelf(nums: number[]): number[] {
  const n: number = nums.length;
  const track: number[] = new Array(n).fill(1);

  // Accumulate left product
  let prefix = 1,
    suffix = 1;
  for (let index = 0; index < n; index++) {
    track[index] *= prefix;
    prefix *= nums[index];

    track[n - index - 1] *= suffix;
    suffix *= nums[n - index - 1];
  }

  return track;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
