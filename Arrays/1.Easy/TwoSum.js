/*
Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.

Sample Input
array = [3, 5, -4, 8, 11, 1, -1, 6]
target = 10

Sample Output
[-1, 11]
*/

function twoNumberSum(array, targetSum) {
	for(let i = 0; i < array.length-1; i++) {
		for(let j = i + 1; j < array.length; j++) {
			if((array[i] + array[j]) === targetSum) {
				return [array[i], array[j]]
			}
		}
	}
	return []
}
