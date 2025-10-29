function groupAnagrams(strs: string[]): string[][] {
  const groupedAnagrams = new Map<string, string[]>();

  for (const word of strs) {
    const lowerWord = word.toLowerCase();
    const frequency = new Array(26).fill(0);
    const base = "a".charCodeAt(0);

    for (let index = 0; index < word.length; index++) {
      frequency[lowerWord.charCodeAt(index) - base]++;
    }

    const keyString = frequency.toString();

    if (!groupedAnagrams.has(keyString)) {
      groupedAnagrams.set(keyString, []);
    }

    groupedAnagrams.get(keyString)?.push(word);
  }
  return Array.from(groupedAnagrams.values());
}
