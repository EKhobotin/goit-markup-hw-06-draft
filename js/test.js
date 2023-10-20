// "use strict";
// let a = 8;
// let b = 10;

// let sum = a + b;
// console.log(sum);

// let age = prompt('Ваш вік')
// console.log(age)
// alert (age)
// let height = confirm('Вам є 18?')
// console.log(height)
// console.log((0.1+0.2) === 0.3)
// console.log((0.1*10+0.2*10)/10 === 0.3)


// function slugify(title) {
//   // Change code below this line
//     return title.toLowerCase().split(" ").join("-");


//   // Change code above this line
// }
// console.log(slugify("Hello World"))

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,fruits.length-1);
// const lastThreeEls = fruits.slice(-3);
// console.log(fruits,firstTwoEls, nonExtremeEls, lastThreeEls);

// function findLongestWord(string) {
//     // Change code below this line
//     const words = string.split(" ");
//     let longestWord = "";
//     for (let i=0; i < words.length; i +=1){
//         if (words[i].length > longestWord.length) { longestWord = words[i] };
//            }
//     return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("May the force be with you"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for (let i = min; i <= max; i +=1) {
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(5, 8));
// console.log(numbers)


// function getCommonElements(array1, array2) {
  // Change code below this line
//   const array3 = [];
// for (let i = 0; i < array1.length; i +=1) {
//   if (array2.include(array1[i])){
//     array3.push(array1[i]);
//   }
// }
// return array3;
 // Change code above this line
// }

// const array1 = [1, 2, 3, 4];
// const array2 = [2, 4, 5, 6];
// getCommonElements(array1, array2);
// console.log(array1, array2, array3);
//================= Object
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     location: {
//         country: "Jamaica",
//         city: "Ocho Rios",
//     },
//   isPublic: true,
//   rating: 8.38,
// };
// console.log(book);
// console.log(book.title);
// console.log(book.genres[0]);
// console.log(book.location.city);
// console.log(book.genres.indexOf('adventure'));
// console.log(book['title']);

// book['title'] = 'dfihksdf';
// console.log(book.title);
// book['title'] = 'qwerty';
// console.log(book.title);
// book.price = 28;
// book['translations'] = ['ua','en']
// console.log(book);

// const name = 'Tom';
// const lastName = 'Jerry';
// const age = 25;
// const animals = ['Cat', 'Mouse'];

// const obj = {
//     name, lastName, age, animals,
// };
// console.log(obj);
// console.log(obj.animals[0]);

// const propName = "name";
// const user = {
//   age: 25,
//   [propName]: "Генрі Сибола",
// };

// console.log(user); // 'Генрі Сибола'

// const bookShelf = {
//     'name': ['qwe', 'rty'],
//     getBooks() {
//         return this.name;
//     },
// }
// console.log(bookShelf);
// console.log(bookShelf.getBooks());

// for (key in bookShelf) {
//     console.log(key);
//     console.log(bookShelf[key])
// }

// console.log(bookShelf.name[1]);

// const animals = {
//     'legs': 4,
// }; console.log(animals);

// const dogs = Object.create(animals);
// dogs.name = 'Jack'
// console.log(dogs);
// console.log(dogs.legs);
// console.log(dogs['legs']);

// console.log('name' in dogs);
// console.log('legs' in dogs);
// console.log(dogs.hasOwnProperty('name'));
// console.log(dogs.hasOwnProperty('legs'));

// for (key in dogs) {
//     if (dogs.hasOwnProperty(key)) {
//         console.log(`this own property ${key}`);
//         console.log(`this own value ${dogs[key]}`);
//     } else {console.log(`this not own property ${key}`);
//         console.log(`this not own value ${dogs[key]}`);}
// }

// console.log(Object.keys(dogs));
// console.log(Object.values(dogs));
// console.log(Object.entries(dogs));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//     console.log(book.title);
// }


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Change code above this line
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// const value = [];

// function getAllPropValues(propName) {
//   // Change code below this line
//     const keys = Object.keys(products[1]);
    
  
//   // Change code above this line
// }
// getAllPropValues()

// // Change code below this line
// function add(...args) {
//     console.log(args);
//   // Change code above this line
// }
// add(1, 2, 3, 5, 4);

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//       // Change code below this line
//       this.books.splice(this.books.indexOf(oldName), 1, newName);
//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Haze","Hazer");

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
      
        for (const iterator of this.potions) {
            console.log(iterator);
            if (iterator.name === newPotion.name) { return `Error! Potion ${newPotion.name} is already in your inventory!`}
        }   
      this.potions.push(newPotion);    
  },
  removePotion(potionName) {    
    for (let i = 0; i < this.potions.length; i += 1) {
      console.log(this.potions[i]);
       if (this.potions[i].name === potionName) {
         this.potions.splice(i, 1);
         return `Potion ${potionName} has been removed from inventory.`;
      }
      }
    return `Potion ${potionName} is not in inventory!`;
  },


   updatePotionName(oldName, newName) {
       for (let i = 0; i < this.potions.length; i += 1) {
      console.log(this.potions[i]);
       if (this.potions[i].name === oldName) {
         this.potions[i].name = newName;
         return `Potion ${oldName} has been removed from inventory.`;
      }
      }
    return `Potion ${oldName} is not in inventory!`;
  },


  
  // Change code above this line
};

console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(atTheOldToad.getPotions());

