#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.blueBright.bold("\n \tWellcome to Arsalan Javed - Currency Converter\n"))

//Define the list of currencies and their exchange rates

let exchange_rate: any ={
    "USD": 1, // Base Currency
    "EUR": 0.94, // European Currency (Euro)
    "PKR": 278, // Pakistan Currency 
    "INR": 83.6, // Indian Currency 
    "AED": 3.6, // UAE Currency
    "SAR": 3.7, // Saudia Arabia Currency (Riyal)

    //Add more currencies and their exchange rates here


}

// prompt the user to select currencies to convert from and to 
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: " Select the currency to convert from:",
        choices:["USD", "EUR", "PKR", "INR", "AED", "SAR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices:["USD", "EUR", "PKR", "INR", "AED", "SAR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);


// Perform currency conversion by using formula 
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount


// Formula of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount 

console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
