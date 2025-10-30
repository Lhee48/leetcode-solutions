function threeSum(nums: number[]): number[][] {
  const sortedNums = nums.sort((a, b) => a - b);
  const threeSums: number[][] = [];
  let leftPointer: number,
    rightPointer: number,
    firstNum: number,
    secondNum: number,
    thirdNum: number,
    sum: number;

  for (let i = 0; i < sortedNums.length - 2; i++) {
    firstNum = sortedNums[i];
    if (firstNum > 0) break;

    leftPointer = i + 1;
    rightPointer = sortedNums.length - 1;

    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    while (leftPointer < rightPointer) {
      secondNum = sortedNums[leftPointer];
      thirdNum = sortedNums[rightPointer];
      sum = firstNum + secondNum + thirdNum;

      if (sum < 0) {
        leftPointer++;
      } else if (sum > 0) {
        rightPointer--;
      } else {
        threeSums.push([firstNum, secondNum, thirdNum]);
        leftPointer++;
        rightPointer--;
        // Skip duplicate values of secondNum
        while (
          leftPointer < rightPointer &&
          sortedNums[leftPointer] === sortedNums[leftPointer - 1]
        ) {
          leftPointer++;
        }
      }
    }
  }

  return threeSums;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
