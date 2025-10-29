function topKFrequent(nums: number[], k: number): number[] {
  const counts = new Map<number, number>();

  for (const number of nums) {
    counts.set(number, (counts.get(number) || 0) + 1);
  }

  const sortedMap = Array.from(counts).sort((a, b) => b[1] - a[1]);

  return sortedMap.slice(0, k).map((pair) => pair[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
