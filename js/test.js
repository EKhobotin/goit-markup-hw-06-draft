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

const animals = {
    'legs': 4,
}; console.log(animals);

const dogs = Object.create(animals);
dogs.name = 'Jack'
console.log(dogs);
console.log(dogs.legs);
console.log(dogs['legs']);
