/*
    Evan Arnold Programming Assignment One 
    
    A JavaScript program which reads a list of integers from the user, stores the list in
    an array, calculates the mean (average) and median of the array, and displays the results
    on the console
*/

var readlineSync = require('readline-sync'); 

// Defining array and variables
const intStore = [];
let stopFlag, medianVal; 

// A basic do while loop that will just keep going until user is done adding integers to the array
do{

    intStore.push(readlineSync.questionInt('Please enter an integer:\n')); //Requests an integer , questionInt is nice because it checks if the input was an integer for you

    stopFlag = readlineSync.keyInYNStrict('Would you like to stop entering integers?') //Using this built in part of readlineSync instead of just asking for a Y or N

}while (!stopFlag);

//Sorts the contents of the array numerically 
intStore.sort(function(a, b){return a - b});

//Uses the reduce method to sum up all of the integers in the array
const sum = intStore.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);

//Finds the median of the sorted array, if array length is even it averages the two middle values, if odd it just grabs the middle
if(intStore.length % 2 == 0){
    medianVal = (intStore[intStore.length / 2] + intStore[(intStore.length / 2) - 1]) / 2;   
}
else{
    medianVal = intStore[Math.floor(intStore.length/2)];
};

//Displays results to console 
console.log('The average of the integers is: '+ sum/intStore.length + '\nThe median of the integers is: ' + medianVal)