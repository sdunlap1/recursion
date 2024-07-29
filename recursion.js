/** product: calculate the product of an array of numbers. */
function product(nums) {
  if (nums.length === 0) return 1; // base case: product of empty array is 1
  return nums[0] * product(nums.slice(1)); // recursive step
}


/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 0) return 0; // base case: no words, length is 0
  if (words.length === 1) return words[0].length; // base case: one word, return its length

  const currentWordLength = words[0].length;
  const maxLengthOfRest = longest(words.slice(1)); // recursive step
  return Math.max(currentWordLength, maxLengthOfRest); // compare lengths
}


/** everyOther: return a string with every other letter. */
function everyOther(str) {
  if (str.length === 0) return ''; // base case: empty string
  if (str.length === 1) return str; // base case: single character string

  return str[0] + everyOther(str.slice(2)); // take first character and recurse with the rest
}


/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  if (str.length <= 1) return true; // base case: empty or single character string

  if (str[0] !== str[str.length - 1]) return false; // base case: first and last character mismatch

  return isPalindrome(str.slice(1, -1)); // recurse with the string excluding the first and last character
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, index = 0) {
  if (index >= arr.length) return -1; // base case: reached end of array

  if (arr[index] === val) return index; // base case: found the value

  return findIndex(arr, val, index + 1); // recurse with the next index
}


/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if (str.length === 0) return ''; // base case: empty string

  return revString(str.slice(1)) + str[0]; // recurse with the rest of the string and add the first character at the end
}


/** gatherStrings: given an object, return an array of all of the string values. */

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let result = [];

  for (let key in obj) {
      if (typeof obj[key] === 'string') {
          result.push(obj[key]);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
          result = result.concat(gatherStrings(obj[key])); // recurse with nested objects
      }
  }

  return result;
}


/** binarySearch: given a sorted array of numbers, and a value, 
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1; // base case: value not found

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === val) return mid; // base case: value found

  if (arr[mid] > val) {
      return binarySearch(arr, val, left, mid - 1); // recurse on the left half
  } else {
      return binarySearch(arr, val, mid + 1, right); // recurse on the right half
  }
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
