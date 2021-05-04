/*
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create.

Sample Input:
coins = [5,7,1,1,2,3,22]

Sample Output:
20
*/

function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);

  let currentChange = 0;
  for(let coin of coins) {
     if(coin > currentChange + 1) return currentChange + 1;
     currentChange += coin;
  }

  return currentChange += 1
}

console.log(nonConstructibleChange([5,7,1,1,2,3,22]))
