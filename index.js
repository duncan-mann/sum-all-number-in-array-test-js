function sumItems(array) {
  let sum = 0;

  for (item of array) {
    if (Array.isArray(item) && item.length > 0) { 
      sum += sumItems(item);
    } else if (!Array.isArray(item)) {
      sum += item;
    }
  }
  return sum;
}
console.log(sumItems([[1, 2, [[3], 4]], 5, []])) 

// module.exports = sumItems;