
//https://www.halloween.dev/retos/2024/1
/* 
During Halloween night 🎃, a witch 🧙‍♀️ is preparing a magical brew. She has a list of potions, each with an associated power, and she wants to combine two of them to achieve a specific total power.
Given a list of integers where each number represents the power of a potion 🧪 and an integer representing the target power, you must find the index of the first two potions that add up to exactly the target power.
*/

function createMagicPotion(potions, target) {
    // Code here
    // const seen = {};

    // for(let i = 0; i < potions.length; i++) {
    //     debugger;
    //     const currentPotion = potions[i];
    //     const complement = target - currentPotion;
    //     console.log({complement});
        
    //     if(seen[complement] !== undefined) {
    //         return [seen[complement], i];
    //     }

    //     seen[currentPotion] = i;
    // }

        const prevMap = new Map();

        for (let i = 0; i < potions.length; i++) {
            debugger;
            const diff = target - potions[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i];
            }

            prevMap.set(potions[i], i);
        }

        return [];

}


const potions = [4, 5, 6, 2];
const goal = 11;
console.log(createMagicPotion(potions, goal));


// 4:0
// 5:1
// 6:2
