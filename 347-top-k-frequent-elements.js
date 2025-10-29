function topKFrequent(nums, k) {
  var numsMapping = new Map();
  for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var number = nums_1[_i];
    if (!numsMapping.has(number)) {
      numsMapping.set(number, 0);
    }
    var hold = numsMapping.get(number) || 0;
    numsMapping.set(number, hold + 1);
  }
  console.log(Array.from(numsMapping));
  return Array.from(numsMapping.keys());
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
