/* 
Medium
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Input: strs = ["act","pots","tops","cat","stop","hat"]
Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Input: strs = ["x"]
Output: [["x"]]

Input: strs = [""]
Output: [[""]]

Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
*/


function groupAnagrams(strs) {

    const list = {};
    
    for(let i of strs) {
        const sortedItem = i.split('').sort().join();
        console.log(sortedItem);
        
        if(!list[sortedItem]) {
            list[sortedItem] = [];
        }

        list[sortedItem].push(i);

        console.log(list);
        
    }

}

const strs = ["act","pots","tops","cat","stop","hat"];

console.log(groupAnagrams(strs));
