// Largest of four - Array Challenge - https://www.youtube.com/watch?v=5L5NBAMo8n4
function largestOfFour(arr) {
  let largestArrayNumbers = [];

  for(let i = 0; i < 4; i++) {
    let nestedArray = arr[i];
    let largestNumber = nestedArray[0];

    for(let j = 0; j < nestedArray.length; j++){
        let currentNumber = nestedArray[j];

        if(currentNumber > largestNumber) {
            largestNumber = currentNumber;
        }
    }

    largestArrayNumbers.push(largestNumber);
  }

  return largestArrayNumbers;

}

console.log(largestOfFour(
    [
        [4,5,1,3],
        [13,27,18,26],
        [32,35,37,39],
        [100,1200,857,1]
    ]
));
