// test only

const matriz = [
  [1,2,3],
  [4,5,6, [1,2, [1,2]]],
  [7,8,9]
];

function pullUpArrays(elements) {
  // Tu código aquí 👈
  let newList = [];
  if(typeof elements !== 'object') return [elements];
  elements.forEach(element => {
    newList = newList.concat(pullUpArrays(element));
  });
  
  return newList;
}

console.log(pullUpArrays(
  matriz
));
