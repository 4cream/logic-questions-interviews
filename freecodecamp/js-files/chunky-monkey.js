// Chunky Monkey - https://www.youtube.com/watch?v=mfWQffxCvRk

function chunkArrayInGroups(arr, size) {
    let result = [];

    for(let i = 0; i < arr.length; i += size) {
        debugger;
        result.push(arr.slice(i, i + size));
    }

    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([1,2,3,4,5,6], 3));
