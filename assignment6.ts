// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.

// function sumEvenNum(num:number) {
//     let sum:number = 0; 
//     for (let index = 1; index <= num; index++) {
//         if (index%2===0) {
//             sum = sum + index;
//         }
        
//     }
//     return sum;
// }
// let result = sumEvenNum(20);
// console.log(result);

// - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

// let arr:number[]= [2,4,5,6,7,8,9,10];
// function calculateEvenSum(arr:number[]) {
//     let sum:number=0;
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index]%2===0) {
//         sum = sum + arr[index];    
//         }
        
//     }
// return sum;
// }
// let result:number = calculateEvenSum(arr);
// console.log(result);

// - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones

// const arr:number[]=[1,2,5,45,22,44,4,3,6,10,9];
// function filterEvenNumbers(arr:number[]) {
//     const newArr:number[]=[];
//     for (let index = 0; index < arr.length; index++) {
//     if (arr[index]%2===0) {
//         continue;
//     }
//         newArr.push(arr[index])
//     }
//     return newArr;
// }
// let result = filterEvenNumbers(arr)
// console.log(result);

// - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.

// function calculateCircleArea(radius: number): number {
//     const pi: number = 3.14159265359; 
//     const area: number = pi * radius * radius;
//     return area;
//   }
  
//   const radius: number = 5; 
//   const area: number = calculateCircleArea(radius);
  
//   console.log(`The area of the circle with radius ${radius} is ${area}`);
  

// - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.

// function removeFailingGrades(grades: number[]): void {
//     for (let i = grades.length - 1; i >= 0; i--) {
//       if (grades[i] < 50) {
//         grades.splice(i, 1);
//       }
//     }
//   }
  
//   const grades: number[] = [85, 42, 65, 90, 30, 60, 75, 48, 55];
  
//   console.log('Original Grades:', grades);
  
//   removeFailingGrades(grades);
  
//   console.log('Grades After Removing Failing Grades:', grades);
  
// - Write a program that uses a function to find the largest element in an array of numbers.

// const arr : number[] = [21,54,55,64,223,100,21,33,44,18];

// function largestNumber(arr:number[]){
//     let maxNum = arr[0];
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index]>maxNum) {
//             maxNum=arr[index];            
//         }
        
//     }
//     return maxNum;
// }
// let result:number = largestNumber(arr);
// console.log(result);


  


