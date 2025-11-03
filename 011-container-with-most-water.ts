function maxArea(height: number[]): number {
  let max = 0, leftPointer = 0, rightPointer = height.length - 1, product = 0;

  while (leftPointer < rightPointer) {
    let leftBigger = height[leftPointer] - height[rightPointer]
    let x = rightPointer - leftPointer
    let y = 0

    if (leftBigger >= 0) {
      y = height[rightPointer]
      rightPointer--
    } else {
      y = height[leftPointer]
      leftPointer++
    }
    product = x * y

    max = Math.max(product, max)
  }
  return max
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))
