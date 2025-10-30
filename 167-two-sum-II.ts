function twoSum(numbers: number[], target: number): number[] {
  let leftPointer = 0,
    rightPointer = numbers.length - 1;

  while (numbers[leftPointer] + numbers[rightPointer] !== target) {
    if (target - numbers[leftPointer] > numbers[rightPointer]) {
      leftPointer++;
    } else {
      rightPointer--;
    }
  }

  return [leftPointer + 1, rightPointer + 1];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
