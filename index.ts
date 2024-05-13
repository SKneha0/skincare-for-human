#! /usr/bin/env node
import inquirer from "inquirer";

let conditions = true;

while (conditions) {
   let makeUp = await inquirer.prompt([
  {
    name: "footcare",
       type: "list",
      message: "who would you like to take care of your footcare ?",
      choices: ["Foot Cream","Gel Plasters","Anti-Chafing Gel","Antibacterial Soap","Sun Cream"]
    },
    {
        name:"haircare",
        type:"list",
        message: " who would you like to take care of your hari care?",
        choices:["hair Oil","hair cream","hair Gel","hair dry"],
        },
    {
      name: "lipscare",
      type: "list",
      message: "Who would you like to take care of your lipcare?",
      choices: ["Lip Gloss","Lip Plumper","Lip Primer","Lipstick" ],
    },
    {
        name: "skincare",
        type: "list",
        message: "Who would you like to take care of your skin?",
        choices: ["Eye cream.", "Moisturiser. ", "Sunscreen"," Toner"],
      
    },
    
    {
      name: "condition",
      type: "Confirm",
      message: "Do you want to add another skin products?",
      default: false,
    },
  ]);

  conditions = makeUp.conditions;
  console.log(makeUp);
}
