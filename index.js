"use strict";
//                 ........(Question no 2)........
//  Personal Message: Store a person’s name in a variable, and print a 
//  message to that person. Your message should be simple, such as,
// “Hello Eric, would you like to learn some Python today?
var userName = "Hello Iqra,you can do it.I have faith on you.Just keep yourself strong and do your best.";
console.log(userName);
//                .........(Question no 3)..........
// Name Cases: Store a person’s name in a variable, and then print that
// person’s name in lowercase, uppercase, and titlecase.
var UserName = "Iqra Shahzadi";
// person's name in lowercase.
var lowerCaseName = UserName.toLowerCase();
console.log(` Lowercase = ${lowerCaseName}`);
//person's name in uppercase.
var upperCaseName = UserName.toUpperCase();
console.log(` Uppercase = ${upperCaseName}`);
//person's name in titlecase.
var titleCaseName = UserName;
//                      ..... .....(Question no 4)...........
// Find a quote from a famous person you admire. Print the quote and the
// name of its author. 
console.log(`Quaid-e-Azam once said,"I Do Not Believe In Taking Right Decision,I Take A Decision And Make IT Right."`);
//                     ...........(Question no 5)...........
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Quaid-e-Azam ";
var message = famous_person + `once said,"I Do Not Believe In Taking Right Decision,I Take A Decision And Make IT Right."`;
console.log(message);
//                  ............(Question no 6).............
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var person = "\t Iqra Shahzadi \n";
console.log(`Name With Space:`, person);
var strippedName = person.trim();
console.log(`Stripping Name:`, strippedName);
//                 ...........(Question no 7)...........
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
//Addition:
var addition = 4 + 4;
console.log(`Addition of numbers =`, addition);
//Subtraction:
var subtraction = 10 - 2;
console.log(`Subtraction of numbers =`, subtraction);
//Multiplication:
var multiplication = 4 * 2;
console.log(`Multiplication of numbers =`, multiplication);
//Division:
var division = 64 / 8;
console.log(`Division of numbers =`, division);
//                      ...........(Question no 8).........
//You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log("-".repeat(8));
console.log(4 + 4);
console.log(".".repeat(8));
console.log(10 - 2);
console.log("-".repeat(8));
console.log(4 * 2);
console.log(".".repeat(8));
console.log(64 / 8);
console.log("-".repeat(8));
//                ..........(Question no 9)..........
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoriteNumber = 12;
var message = `My favorite number is ${12}.`;
console.log(message);
//               ...........(Question no 10)...........
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Name:Iqra Shahzadi , Date:9 September,2023.
// This program is about Personal Message.
var userName = "Hello Iqra,you can do it.I have faith on you.Just keep yourself strong and do your best.";
console.log(userName);
// Second Program:
//This Program is about Stripping Names.
var person = "\t Iqra Shahzadi \n";
console.log(`Name With Space:`, person);
var strippedName = person.trim();
console.log(`Stripping Name:`, strippedName);
//                 .........(Question no 11)...........
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Maha", "Arooj", "Khadija", "Amina"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//               ........(Question no 12)...........
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var names = [
    "Maha",
    "Arooj",
    "Khadija",
    "Amina"
];
names.forEach((name) => {
    console.log(`Hello ${name},How are you?`);
});
//                .........(Question no 13)........
//our Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var transportation = [];
transportation.push(["Car", " Suzoki Caltus 2023"]);
transportation.push(["Motorcycle", "Honda"]);
transportation.forEach(([transport, brand]) => {
    console.log(`I would like to own a ${brand} ${transport}.`);
});
//                   ..............(Question no 14).............
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestlist = [
    "Maha",
    "Arooj",
    "Khadija",
    "Amina"
];
guestlist.forEach((guestname) => {
    console.log(`Hello ${guestname} ,you are invited to dinner.Please join me.`);
});
//                   ..........(Question no 15)............
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guestlist = [
    "Maha",
    "Arooj",
    "Khadija",
    "Amina"
];
//step 1:the name of the guest who can’t make it.
let guestwhocannotmakeit = "Amina";
console.log(`${guestwhocannotmakeit} can not make to dinner.`);
//step 2:replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestlist.splice(3, 1, "Mehak", "Alisha");
console.log(guestlist);
//step 3: Print a second set of invitation messages, one for each person who is still in your list.
guestlist.forEach((namelist) => {
    console.log(`Hello ${namelist},You are invited to dinner.`);
});
//               .........(Question no 16).........
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//step 1: Add a print statement to the end of your program informing people that you found a bigger dinner table.
guestlist.forEach((name) => {
    console.log(`Hello ${name},We found a bigger table.`);
});
//Step 2:Add one new guest to the beginning of your array.
guestlist.splice(0, 0, "Husna");
console.log(guestlist);
//step 3: Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
guestlist.splice((guestlist.length) / 2, 0, "Iqra");
console.log(guestlist);
//step 4:• Print a new set of invitation messages, one for each person in your list.
guestlist.forEach((name) => {
    console.log(`Hello ${name},You are invited to dinner.`);
});
//              ..........(Question no 17)..........
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//step 1:Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
guestlist.forEach((name) => {
    console.log(`Sorry ${name},I also don't want to do this.But now,I can invite only two people.`);
});
//step 2:remove guestnames untill only two guestname remain.
while (guestlist.length > 2) {
    let removeguest = guestlist.pop();
    console.log(`Sorry ${removeguest},I can't invite you to dinner.`);
}
//step 3:Print a message to each of the two people still on your list, letting them know they’re still invited.
guestlist.forEach((name) => {
    console.log(`Hello ${name},you are invited to dinner.`);
});
//step 4:Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestlist.splice(0, 2);
console.log(`guest list after dinner:${guestlist}`);
//          .........(Question no 18)...........
//Seeing the World: Think of at least five places in the world you’d like to visit.
//  • Store the locations in a array. Make sure the array is not in alphabetical order.
var travellingDestinations = ["Madina", "Holy Kabah", "China", "Korea", "Fanland"];
//  • Print your array in its original order.
console.log("Original Order of Array:");
console.log(travellingDestinations);
//  • Print your array in alphabetical order without modifying the actual list.
console.log("Array in alphabetical order:");
console.log([...travellingDestinations].sort());
//  • Show that your array is still in its original order by printing it.
console.log("Array in its original order:");
console.log(travellingDestinations);
//  • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Array in reverse alphabetical order:");
console.log([...travellingDestinations].sort().reverse());
//  • Show that your array is still in its original order by printing it again.
console.log("Array in its original order:");
console.log(travellingDestinations);
//  • Reverse the order of your list. Print the array to show that its order has change.
console.log("Reverse order:");
travellingDestinations.reverse();
console.log(travellingDestinations);
//  • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original order:");
travellingDestinations.reverse();
console.log(travellingDestinations);
//  • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical order:");
console.log([...travellingDestinations].sort());
//  • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabetical order:");
console.log([...travellingDestinations].sort().reverse());
//                  ...........(Question no 20).............
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countriesname = ["Pakistan", "China", "South Korea", "Fanland", "Dubia", "India"];
console.log("List of countries:");
for (let list of countriesname) {
    console.log(list);
}
//                    ...........(Question no 21).............
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
function createObject() {
    let result = {
        mountain: "K2",
        river: "Sindh",
        city: "Faisalabad"
    };
    return result;
}
console.log(createObject());
//                         ..........(Question no 23)...........
//Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
//let car = 'subaru';
//console.log("Is car == 'subaru'? I predict True.")
//console.log(car == 'subaru')
// Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let car = 'subaru';
console.log(car == 'subaru');
let number = 1;
console.log(number == 0);
let animal = "elephant";
console.log(animal == "tiger");
let bike = "honda";
console.log(bike == "honda");
let name1 = "Ali";
console.log(name1 == "Ali");
let name2 = "Ali";
console.log(name2 == "ali");
let bol = true;
console.log(bol == true);
let country = "Pakistan";
console.log(country == "Saudia");
//Checking Whethere An Element is in Array or not.
let numbers = [2, 3, 4, 5, 6, 7, 8];
if (numbers.includes(2)) {
    console.log("The Numer is in an array");
}
else {
    console.log("Number is not in an array");
}
//                       ..........(Question no 25)..........
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.let alien_color:string = "Green"
let alien_color = "Green";
function checkAlienColor(color) {
    if (color == "green") {
        return console.log("Playe Just Earned 5 Points");
    }
    else {
        return;
    }
}
checkAlienColor(alien_color);
//                    .........(Question no 26,27)..........
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
function checkAlienColor2(color) {
    let finalColor = color.toLowerCase();
    if (finalColor == "green") {
        console.log("Player just earned 5 points for shooting the alien");
    }
    else if (finalColor == "yellow") {
        console.log("Player just earned 10 points for shooting the alien");
    }
    else if (finalColor == "red") {
        console.log("Player just earned 15 points for shooting the alien");
    }
    else {
        return;
    }
}
checkAlienColor2("YELLOW");
//              ...........(Question no 28).............
//Stages of Life
function humanLifeStages(age) {
    if (age < 2) {
        console.log("The person is a baby");
    }
    else if (age == 2 || age < 4) {
        console.log("The person is a toddler");
    }
    else if (age == 4 || age < 13) {
        console.log("The person is an kid");
    }
    else if (age == 13 || age < 20) {
        console.log("The person is an teenager");
    }
    else if (age == 20 || age < 65) {
        console.log("The person is an adult");
    }
    else {
        console.log("The Person is elder");
    }
}
humanLifeStages(13);
//                  ...........(Question no 29).......
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favouriteFruits = ["Apple", "Peach", "Apricot", "Banana"];
function fruitCheck(fruit) {
    if (favouriteFruits.includes("Apple")) {
        console.log(`You Really Like ${fruit}`);
    }
    else if (favouriteFruits.includes("Peach")) {
        console.log(`You Really Like ${fruit}`);
    }
    else if (favouriteFruits.includes("Apricot")) {
        console.log(`You Really Like ${fruit}`);
    }
    else if (favouriteFruits.includes("Banana")) {
        console.log(`You Really Like ${fruit}`);
    }
}
fruitCheck("Apple");
