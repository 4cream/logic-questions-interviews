function twoSumO2(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        // debugger;
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}

// function twoSumO1(nums, target) {

//     for(let i = 0; i < nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// }

console.log(
    twoSumO2(
        [3,2,4], 6
    )
);