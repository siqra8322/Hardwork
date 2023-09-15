 //                 ........(Question no 2)........
 //  Personal Message: Store a person’s name in a variable, and print a 
 //  message to that person. Your message should be simple, such as,
 // “Hello Eric, would you like to learn some Python today?
 
 var userName:string = "Hello Iqra,you can do it.I have faith on you.Just keep yourself strong and do your best.";
 console.log(userName);

 //                .........(Question no 3)..........
 // Name Cases: Store a person’s name in a variable, and then print that
 // person’s name in lowercase, uppercase, and titlecase.

 var UserName:string = "Iqra Shahzadi";
 // person's name in lowercase.
 var lowerCaseName:string = UserName.toLowerCase();
console.log( ` Lowercase = ${lowerCaseName}`);
//person's name in uppercase.
var upperCaseName:string = UserName.toUpperCase();
console.log( ` Uppercase = ${upperCaseName}`);
//person's name in titlecase.
var titleCaseName:string = UserName


//                      ..... .....(Question no 4)...........
// Find a quote from a famous person you admire. Print the quote and the
// name of its author. 

console.log(`Quaid-e-Azam once said,"I Do Not Believe In Taking Right Decision,I Take A Decision And Make IT Right."`);

//                     ...........(Question no 5)...........
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

var famous_person:string = "Quaid-e-Azam ";
var message:string =famous_person + `once said,"I Do Not Believe In Taking Right Decision,I Take A Decision And Make IT Right."`;
console.log(message);

//                  ............(Question no 6).............
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var person:string = "\t Iqra Shahzadi \n";
console.log(`Name With Space:`, person);
var strippedName:string = person.trim()
console.log(`Stripping Name:`,strippedName);

//                 ...........(Question no 7)...........
//Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

//Addition:
var addition:number = 4+4;
console.log(`Addition of numbers =`,addition);
//Subtraction:
var subtraction:number = 10-2;
console.log(`Subtraction of numbers =`,subtraction);
//Multiplication:
var multiplication:number = 4*2;
console.log(`Multiplication of numbers =`,multiplication);
//Division:
var division:number = 64/8;
console.log(`Division of numbers =`,division);

//                      ...........(Question no 8).........
//You should create four lines that look like this:

//console.log(5 + 3)

//Your output should simply be four lines with the number 8 appearing once on each line.

console.log("-".repeat(8));
console.log(4+4);
console.log(".".repeat(8));
console.log(10-2);
console.log("-".repeat(8));
console.log(4*2);
console.log(".".repeat(8));
console.log(64/8);
console.log("-".repeat(8));

//                ..........(Question no 9)..........
//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var favoriteNumber:number = 12;
var message:string = `My favorite number is ${12}.`;
console.log(message);

//               ...........(Question no 10)...........
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


// Name:Iqra Shahzadi , Date:9 September,2023.
// This program is about Personal Message.
 var userName:string = "Hello Iqra,you can do it.I have faith on you.Just keep yourself strong and do your best.";
 console.log(userName);

 // Second Program:
 //This Program is about Stripping Names.
 var person:string = "\t Iqra Shahzadi \n";
console.log(`Name With Space:`, person);
var strippedName:string = person.trim()
console.log(`Stripping Name:`,strippedName);

//                 .........(Question no 11)...........
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

var names:string[] = ["Maha","Arooj","Khadija","Amina"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//               ........(Question no 12)...........
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

var names:Array<string> = [
    "Maha",
    "Arooj",
    "Khadija",
    "Amina"
]


names.forEach((name)=>{
    console.log(`Hello ${name},How are you?`)
})

//                .........(Question no 13)........
//our Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var transportation:Array<[transport:string,brand:string]> = [];
transportation.push(["Car"," Suzoki Caltus 2023"]);
transportation.push(["Motorcycle","Honda"]);
transportation.forEach(([transport,brand])=>{
 console.log(`I would like to own a ${brand} ${transport}.`)
});

//                   ..............(Question no 14).............
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var guestlist:Array<string> = [
    "Maha",
    "Arooj",
    "Khadija",
    "Amina"
];
guestlist.forEach((guestname)=>{
    console.log(`Hello ${guestname} ,you are invited to dinner.Please join me.`)
})

//                   ..........(Question no 15)............
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

var guestlist:Array<string> = [
    "Maha",
    "Arooj",
    "Khadija",
    "Amina"
];
//step 1:the name of the guest who can’t make it.

let guestwhocannotmakeit:string = "Amina";
console.log(`${guestwhocannotmakeit} can not make to dinner.`);

//step 2:replacing the name of the guest who can’t make it with the name of the new person you are inviting.

guestlist.splice(3,1 ,"Mehak","Alisha");
console.log(guestlist);

//step 3: Print a second set of invitation messages, one for each person who is still in your list.

guestlist.forEach((namelist)=>{
    console.log(`Hello ${namelist},You are invited to dinner.`);
})

//               .........(Question no 16).........
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//step 1: Add a print statement to the end of your program informing people that you found a bigger dinner table.

guestlist.forEach((name)=>{
    console.log(`Hello ${name},We found a bigger table.`)
});

//Step 2:Add one new guest to the beginning of your array.

guestlist.splice(0,0,"Husna");
console.log(guestlist);

//step 3: Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 

guestlist.splice((guestlist.length)/2,0,"Iqra")
console.log(guestlist);

//step 4:• Print a new set of invitation messages, one for each person in your list.
guestlist.forEach((name)=>{
    console.log(`Hello ${name},You are invited to dinner.`)
});

//              ..........(Question no 17)..........
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

//step 1:Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
guestlist.forEach((name)=>{
    console.log(`Sorry ${name},I also don't want to do this.But now,I can invite only two people.`);
});

//step 2:remove guestnames untill only two guestname remain.
while(guestlist.length >2){
let removeguest = guestlist.pop()
console.log(`Sorry ${removeguest},I can't invite you to dinner.`)
}

//step 3:Print a message to each of the two people still on your list, letting them know they’re still invited.
 guestlist.forEach((name)=>{
    console.log(`Hello ${name},you are invited to dinner.`)
 })

//step 4:Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
    guestlist.splice(0,2);
    console.log(`guest list after dinner:${guestlist}`);

    //          .........(Question no 18)...........
    //Seeing the World: Think of at least five places in the world you’d like to visit.

  //  • Store the locations in a array. Make sure the array is not in alphabetical order.

  var travellingDestinations:string[] = ["Madina","Holy Kabah","China","Korea","Fanland"];

 //  • Print your array in its original order.
console.log("Original Order of Array:");
console.log(travellingDestinations);

 //  • Print your array in alphabetical order without modifying the actual list.
console.log("Array in alphabetical order:");
console.log([...travellingDestinations].sort());

 //  • Show that your array is still in its original order by printing it.
console.log("Array in its original order:")
console.log(travellingDestinations);

//  • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Array in reverse alphabetical order:")
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
console.log("Alphabetical order:")
console.log([...travellingDestinations].sort());

//  • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse alphabetical order:");
console.log([...travellingDestinations].sort().reverse());


//                  ...........(Question no 20).............
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var countriesname:string[] = ["Pakistan","China","South Korea","Fanland","Dubia","India"];
console.log("List of countries:");
for (let list of countriesname) {
console.log(list);
}

//                    ...........(Question no 21).............
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

function createObject(){
    let result = {
    mountain:"K2",
    river:"Sindh",
    city :"Faisalabad"
    }
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
 console.log(car == 'subaru')
 let number = 1
 console.log(number == 0);
 let animal = "elephant"
 console.log(animal=="tiger");
 let bike = "honda"
 console.log(bike == "honda");
 let name1 = "Ali"
 console.log(name1 == "Ali");
 let name2 = "Ali"
console.log(name2 == "ali");
let bol = true
console.log(bol == true);
let country = "Pakistan"
console.log(country == "Saudia");
//Checking Whethere An Element is in Array or not.
let numbers:Array<number> = [2,3,4,5,6,7,8]
if(numbers.includes(2)){
    console.log("The Numer is in an array");
}else {
    console.log("Number is not in an array");
}

//                       ..........(Question no 25)..........
//Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.let alien_color:string = "Green"

let alien_color:string = "Green";
function checkAlienColor(color:string){
    if(color == "green"){
       return console.log("Playe Just Earned 5 Points");
    }else {
        return
    }
 }
 checkAlienColor(alien_color);



//                    .........(Question no 26,27)..........
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
function checkAlienColor2(color:string) {
        let finalColor = color.toLowerCase()
     if(finalColor == "green"){
            console.log("Player just earned 5 points for shooting the alien");
        }else if(finalColor == "yellow") {
             console.log("Player just earned 10 points for shooting the alien");
      }else if (finalColor == "red") {
           console.log("Player just earned 15 points for shooting the alien");
        }else {
            return
        }
       }
    checkAlienColor2("YELLOW");

    //              ...........(Question no 28).............
    //Stages of Life

     function humanLifeStages(age:number) {
             if (age < 2) {
        console.log("The person is a baby");
     }else if (age == 2 || age < 4){
         console.log("The person is a toddler");
    }else if (age == 4 || age < 13){
        console.log("The person is an kid");
    }else if (age == 13 || age < 20){
         console.log("The person is an teenager");
    }else if (age == 20 || age < 65){
        console.log("The person is an adult");
    }else {
        console.log("The Person is elder");
    }
 }
 humanLifeStages(13)

//                  ...........(Question no 29).......
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

 let favouriteFruits:Array<string> = ["Apple","Peach","Apricot","Banana"]
 function fruitCheck(fruit:string){
     if(favouriteFruits.includes ("Apple")){
         console.log(`You Really Like ${fruit}`);
    }else if(favouriteFruits.includes ("Peach")){
        console.log(`You Really Like ${fruit}`);
     } else if(favouriteFruits.includes ("Apricot")){
         console.log(`You Really Like ${fruit}`);
     }else if(favouriteFruits.includes ("Banana")){
         console.log(`You Really Like ${fruit}`);
     }
 }
 fruitCheck("Apple");

 //              ............(Question no 30,31).............
 //Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website.

  let peopleArray: Array<string> = ["Talha", "Ali", "Admin", "Habib", "Naveed"];
 function greetingToUsers(array: Array<string>) {
   for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let user = element.toLowerCase();
    if (user === "admin") {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Welcome back ${element}`);
    }
  }
//   Checking If Array is empty
   if(!array.length) 
     { console.log("We Need To Find Some New Users");
   }
   while (array.length > 0) {
     console.log(array);
     array.pop()
     console.log(array,"Array is starting empty now");   }
 }
 greetingToUsers(peopleArray);

 //                .........(Question no 32)...........
 //Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

  let current_users:Array<string> = ["Talha", "Ali", "Admin", "Habib", "Naveed"]
 let new_users:Array<string> = ["Usman", "Wajid", "Inam", "Habib", "Naveed"]
 function userChecker(name:string){
     let editName = name.toLowerCase()
    let openCurrentArray = [...new_users]
     if(openCurrentArray.includes(name)){
         console.log("The Username is already available");
     }else {
        console.log("Username is available");
     }
 }
 userChecker("Naveed");

 //               .............(Question no 33)..........
 //Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

 let ordinalNumber:Array<number> = [1,2,3,4,5,6,7,8,9]
  function makingOrdinalNumber(array:Array<number>) {
     const ordinalEnding:string[] = ["st","nd","rd"]
     for(const number of array){
         let ending:string
         if(number % 10 === 1 && number % 100 !== 11){
             ending = "st"
         }else if(number % 10 === 2 && number % 100 !== 12) {
             ending="nd"
         }else if(number % 10 === 3 && number % 100 !== 13){
             ending = "rd"
         }else {
             ending = "th"
         }
         console.log(`${number}${ending}`);
     }
 }
 makingOrdinalNumber(ordinalNumber);

 //                    ............(Question no 34)..........
 //Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

  let pizzaArray:string[] = ["Veggie Pizza","Pepperoni Pizza","Meat Pizza"]
 function pizzaPanga(array:string[]){
     for (let i = 0; i < array.length; i++) {
         const element = array[i];
         console.log(element);
         console.log(`I really love ${element}`)     }
    console.log("Pizza is a beloved culinary delight known for its versatility. With its combination of a crispy crust, savory tomato sauce, melted cheese, and an array of toppings, it offers a delightful fusion of flavors and textures that has made it a universally cherished dish worldwide. Whether enjoyed as a classic Margherita or loaded with diverse ingredients, pizza continues to satisfy a wide range of tastes and preferences.");
 }
 pizzaPanga(pizzaArray);

 //               .............(Question no 35)................
 //Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

  let animalArray:string[] = ["Horse","Dog","Cat"]
 function workingOnAnimal(array:string[]){
     for (let i = 0; i < array.length; i++) {
         const element = array[i];
         // console.log(element);
         // console.log(`${element} would be the great animal to pet`);
          }
          console.log("All of these animals are loyal and good to keep at home");
 }
 workingOnAnimal(animalArray);

 //             ...........(Question on 36)............
 //T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

  let shirtSize:string = "Large"
 let shirtSize2:string = "Medium"
// let message:string = "I Love Typescript"
 function large_Shirt(size:string, message:string){
 console.log(`The shirt size is ${size} and with the message of ${message}`);
 }
 large_Shirt(shirtSize,message);

 //                 ...........(Question no 37)...........
 //Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

  let default_country:string = "Pakistan"
 function describe_city(city:string,country:string){
 console.log(`The City ${city} is in ${country}`);
 }
 describe_city("Faisalabad",default_country)
 describe_city("Lahore",default_country)
 describe_city("Manchester",default_country)

 //                   ...........(Question no 38)...........
 //Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

  function city_country(city:string,country:string){
  return `"${city},${country}" `
 }
 console.log(city_country("Faisalbad","Pakistan"));
 console.log(city_country("Makkah","Saudia"));
 console.log(city_country("London","Engalnd"));

 //                   .............(Question no 39)..........
 //City Names: Write a function called city_country() that takes in the name of a city and its country.

 // function city_country(city:string,country:string){
   //  return `"${city},${country}" `
// }
 console.log(city_country("Faisalbad","Pakistan"));
 console.log(city_country("Makkah","Saudia"));
 console.log(city_country("London","Engalnd"));

 //               .............(Question no 40)..........
 //Album: Write a function called make_album() that builds a Object describing a music album.

  function make_Album(artist_name:string,album_title:string, make_Album?:number){
    return {artist:artist_name,album:album_title,numberOfSongs:make_Album}
 }
 console.log(make_Album("Falak Tk","Akshay Kumars"));
 console.log(make_Album("Heeriya","Unknown"));
 console.log(make_Album("Bandeya","Arjit Singh",3));

 //                   .............(Question no 41)............
 //Magicians: Make a array of magician’s names.

  let magician_Name: Array<string> = [
  "Houdini",
  "David Copperfield",
   "Criss Angel",
  "David Blaine",
 ];
 function printMagicians(array: Array<string>) {
   return array.map((item) => console.log(item));
 }
 printMagicians(magician_Name);

 //                ................(Question no 42)...............
 //reat Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.

  let magician_Name2: Array<string> = [
   "Houdini",
   "David Copperfield",
   "Criss Angel",
   "David Blaine",
 ];
 function make_Great(array: Array<string>) {
   let result = array.map((item) => console.log(`The Great Magician ${item}`));
   console.log(result);
 

 //                  .............(Question no 43)............
 //Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.

    let copiedArray = [...array];
 console.log(copiedArray, "copiedArray");
  console.log(array, "Simple Array");
  }
console.log(make_Great(magician_Name2));

//             ...........(Question no 44).............
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.

 function makeSandwich(array:Array<string>){
     let open = array.toString()
     return (`Sandwich Should contain ${open}`)
 }
 console.log(makeSandwich(["Bread","Mayonise","Ketchup","Chicken","Potato"]));

 //             ...........(Question no 45)............
 //Cars: Write a function that stores information about a car in a Object. 

//function carInfo(manafaturer, modelName, otherDetail){
 //   return { manafaturer: manafaturer, model: modelName }
// }
//  console.log("Honda","any","Black");