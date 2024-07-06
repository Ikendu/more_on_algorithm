const equalPairs = (grid) => {
  let store = [];
  let stores = [];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      stores.push(grid[j][i]);
      if (j === grid.length - 1) {
        store.push(stores);
        stores = [];
      }
    }
  }
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j in store) {
      if (grid[i].join("") === store[j].join("")) {
        count++;
      }
    }
  }
  console.log(grid);
  console.log(store);
  return count;
};
console.log(
  equalPairs([
    [11, 1],
    [1, 11],
  ])
);
console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
);
