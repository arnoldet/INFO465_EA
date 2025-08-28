/*
    Evan Arnold Programming Assignment Two 
    
    Write a JavaScript program that does the following: 
    Prompts the user for integers until the user enters a q to quit, Echoes the integers entered back to the user,
    Determines if the product of any two of the entered integers is equal to a third integer

*/

var readlineSync = require('readline-sync'); 

//Defining arrays and variables
const intStore = [];
const resultStore = [];
let input, product;

//Loop to collect integers from user 
while(true){

    input = readlineSync.question("Please enter either an integer or 'q' to stop ")
    
    //Checks if the input is not a number
    if(isNaN(input)){
        //Checks if the input is either lowercase or uppercase q then either breaks out the loop or asks the user again
        if(input == 'q' || input == 'Q'){
            console.log("You have entered 'q' to stop\n")
            break
        }
        else{
            console.log("You have entered an invalid value")
        }
    }
    else{
        //Parses the number input as an integer and then puts it in the array
        intStore.push(parseInt(input));
    }

}

//Check to see if user entered enough integers
if(intStore.length >= 3){
    //Echoes the integers entered back to the user 
    console.log("You have entered the integers " + intStore);

    //Nested For loops to iterate through the array and find the products of any two integers 
    for(let i = 0; i < intStore.length; i++){
        for(let j = i + 1; j< intStore.length; j++){

            //Stores the product of any two integers
            product = intStore[i]*intStore[j];

            //If the product is inside of the array it adds a string to the array
            if(intStore.indexOf(product) != -1){
            resultStore.push(intStore[i] + " x " + intStore[j] + " = " + product);
            }
        }
    }

    //Checks if there are any values in the array/If the conditions were met
    //Then prints them out
    if(resultStore.length != 0){
        console.log("The Condition is met:\n" + resultStore.join("\n"));
    }
    else{
        console.log("Condition was not met")
    }    
}
else if(intStore.length > 0){
    console.log("Less than three integers were entered");
}
else{
    console.log("No integers were entered.")
}

