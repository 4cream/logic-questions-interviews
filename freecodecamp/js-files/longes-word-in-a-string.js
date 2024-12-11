// The larges word in a string - https://www.youtube.com/watch?v=fEvxBsizkOw

function findLongestWordLength(str) {
    let words = str.split(' ');
    let longestWord = 0;

    words.forEach(word => {
        if(word.length > longestWord) {
            longestWord = word.length;
        }
    });

    return longestWord;
}

console.log(
    findLongestWordLength(
        "La calcomania del power ranger!"
    )
);
