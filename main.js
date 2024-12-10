// 1-masala-----------------------------------
// function arrayMadness(a, b) {
//   return (
//     a.reduce((sum, velu) => sum + velu ** 2, 0) >
//     b.reduce((sum, velu) => sum + velu ** 3, 0)
//   );
// }
// console.log(arrayMadness([3], [2]));

// 2-masala----------------------------

// let arr = ["h", "o", "l", "a"];
// let res = "";
// for (let i = 0; i < arr.length; i++) {
//   res += arr[i] + ",";
// }
// console.log(res.slice(0, -1));

// 3-masala-----------------------------------------

// var findAverage = function (nums) {

//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   return sum / nums.length;
// };
// console.log(findAverage([2,2,2,4]));

// 4-masala---------------------------------
// function stringToArray(string) {
//   let res = string.split(" ");

//   return res;
// }
// console.log(stringToArray("Robin Singh"));

// 5-masala------------------------------------
// var findAverage = function (number) {

//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   return sum / number.length;
// };
// console.log(findAverage([2,2,2,4]));
//6-masala----------------------------------
function findSmallestInt(arr) {
  let min = Math.min(...arr);
  return min;
}
console.log(findSmallestInt([34, 15, 88, 2]));
