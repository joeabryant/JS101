let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let emptyObj = {};

function selectFruit(list) {
  let produceKeys = Object.keys(list);
  for (let i = 0; i < produceKeys.length; i++) {
    let currentKey = produceKeys[i];
    let currentProduce = list[currentKey];
    if (currentProduce === 'Fruit') {
      emptyObj[currentKey] = 'Fruit';
    }
  }
  return emptyObj;
}

console.log(selectFruit(produce));