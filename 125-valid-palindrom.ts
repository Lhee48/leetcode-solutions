function isAlphaNumeric(s: string): boolean {
  const charCode = s.charCodeAt(0);
  if (
    (charCode >= 48 && charCode <= 57) ||
    (charCode >= 97 && charCode <= 122)
  ) {
    return true;
  }
  return false;
}

function isPalindrome(s: string): boolean {
  let leftPointer = 0,
    rightPointer = s.length - 1;
  const lowerCase = s.toLowerCase();

  while (leftPointer <= rightPointer) {
    if (!isAlphaNumeric(lowerCase[leftPointer])) {
      leftPointer++;
      continue;
    }

    if (!isAlphaNumeric(lowerCase[rightPointer])) {
      rightPointer--;
      continue;
    }

    if (lowerCase[leftPointer] !== lowerCase[rightPointer]) {
      return false;
    }

    leftPointer++;
    rightPointer--;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("aa"));
console.log(isPalindrome(" "));
