// Array Sum:
// Task: Create a program that calculates the sum of all elements in an array of integers.
// Example: If the array is [1, 2, 3, 4, 5], the program should output "Sum: 15."

// function numSum(...numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++ ){
//         sum += numbers[i]
//     }
//     return sum;
// }
// console.log(numSum(1, 2, 3, 4, 5));


//----------------------------------------------

// Array Average:
// Task: Develop a program that calculates the average (mean) of elements in an array of numbers.
// Example: If the array is [10, 20, 30, 40, 50], the program should output "Average: 30."

// function avgNum(...numbers) {
//     let avg = 0
//     for (let i = 0; i < numbers.length; i++ ){
//         avg +=numbers[i] 
//     }
//     return avg / numbers.length
// }
// console.log(avgNum(10, 20, 30, 40, 50));


//----------------------------------------------

// Array Sorting:
// Task: Write a program that sorts the elements in an array of integers in ascending order.
// Example: If the array is [5, 2, 9, 1, 5], the program should output the sorted array as [1, 2, 5, 5, 9].

// function numSort (...numbers){
//     return numbers.sort();
// }
// console.log(numSort(5, 2, 9, 1, 5));


//----------------------------------------------

// Array Search:
// Task: Create a program that searches for a specific number in an array and returns the index at which it's found (or -1 if not found).
// Example: If the array is [4, 7, 2, 9, 1] and the user searches for "2," the program should output "Index: 2."

// function numberSearch (target, numbers){
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === target){
//             return i
//         }
//     }
//     return '-1'
// }
// console.log(numberSearch(4, [4, 7, 2, 9, 1]))


//----------------------------------------------

// Array Reversal:
// Task: Develop a program that reverses the elements in an array.
// Example: If the array is [1, 2, 3, 4, 5], the program should output the reversed array as [5, 4, 3, 2, 1].

// function reverseArray(...numbers){
//     return numbers.reverse();
// }
// console.log(reverseArray(1, 2, 3, 4, 5));