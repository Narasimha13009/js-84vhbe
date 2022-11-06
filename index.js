const arr1 = [10, 20, 30];
function sum(arr) {
  tsum = 0;
  for (let ele of arr) {
    tsum += ele;
  }
  return tsum;
}
console.log(sum(arr1));
