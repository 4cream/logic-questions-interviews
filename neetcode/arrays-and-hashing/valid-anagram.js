/* 
Given two strings s and t, return true if the two strings are anagrams of each other, 
otherwise return false.
An anagram is a string that contains the exact same characters as another string, 
but the order of the characters can be different.

Input: s = "racecar", t = "carrace"
Output: true

Input: s = "jar", t = "jam"
Output: false
*/

function isAnagram(x, y) {

    const sortedX = x.split('').sort().join('');
    const sortedY = y.split('').sort().join('');

    console.log([sortedX, sortedY]);

    return sortedX == sortedY;
    
}

const s = "racecar", t = "carrace";
const e = "jar", f = "jam";

console.log("Primer input", isAnagram(s, t));
console.log("Segundo input", isAnagram(e, f));
