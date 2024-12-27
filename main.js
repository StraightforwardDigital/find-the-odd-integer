function findOdd(A) {
 const count = [];
  //Count number of occurances of each number
  A.forEach(num => {
     count[num] = (count[num] || 0) + 1;
  });
  
  //Find the number with an odd count
  for (const num in count) {
    if (count[num] % 2 !== 0) {
      return Number(num);
    }
  }
}