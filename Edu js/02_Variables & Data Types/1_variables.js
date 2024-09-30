// Variables

// JavaScript has seven primitive data types:

// 1. **String**: Represents text (e.g., `"Hello"`).
// 2. **Number**: Represents numeric values (e.g., `42`, `3.14`).
// 3. **Boolean**: Represents `true` or `false`.
// 4. **Undefined**: Indicates a variable has been declared but not assigned a value.
// 5. **Null**: Represents the intentional absence of a value.
// 6. **Symbol**: A unique, immutable value often used as object keys.
// 7. **BigInt**: Represents large integers beyond the Number type limit (e.g., `123n`).

// start with-  marks $marks _marks 



//create variables
var FirstName = 'saman';    //String
var LastName = 'nimal';
var Age = 50;               //Number
var isOK = true;            //Boolean
var job, height;            //Undefined

//Print only variable
console.log(FirstName);
//Print the variable with a string
console.log('My Name is ' + FirstName)
// Te Coercion
console.log('my age is ' + Age)
console.log('It is ' + isOK)
console.log('My Job is ' + job)

//Get variables Type
console.log(typeof(FirstName))
console.log(typeof(Age))
console.log(typeof(isOK))
console.log(typeof(job))

// variable Define
job = 'Doctor'
//Variablr Mutation (Change/Modifie Original value)
FirstName = 'Kamal'
console.log('My new name is ' + FirstName)
console.log('My Full Name is ' + FirstName + LastName + ' and My age is '+ Age)

//Display an Alert
alert('hi ' + FirstName+'.');

//Get User Input
height = prompt('what is your Height?');
alert('My Height is ' + height)