function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const lowerS = s.toLowerCase();
  const lowerT = t.toLowerCase();
  const frequency = new Array(26).fill(0);
  const base = "a".charCodeAt(0);
  for (let index = 0; index < s.length; index++) {
    frequency[lowerS.charCodeAt(index) - base]++;
    frequency[lowerT.charCodeAt(index) - base]--;
  }
  return frequency.every((num) => num === 0);
}
