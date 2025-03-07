// Declaring variables with JavaScript

// Good
// Can change the value
let x = 10;
x = 3.14;
x = 20;
x = 1000000000000;

// Error, TypeScript
// x = 'John';

// Cannot change the value
const y = 20;

// Bad,
// out of date,
// has weird side effects,
// doesn't work the way you think it should;
// orders pineapple on its pizza
var z = 'The old ways';

// Variables and types
let aNumber = 10;

let aString = 'Hi';
let aDoubleQuotedString = 'Hello';
let aBacktickString = `Greetings`;
let multiLineString = `
To be or not to be
That is the question
Whether 'tis nobler in the mind....
`;
let myName = 'John';
let interpolatedString = `Greetings, ${myName}`;
console.log(interpolatedString);

// true and false are keywords
let aBoolean = true;
let falseBoolean = false;

// Magic six falsy: false, 0, '', null, undefined, NaN
let aTrueNumber = 5;
if (aTrueNumber) {
	console.log('true');
} else {
	console.log('false');
}

// Array
let names = ['Miguel', 'Kalkidan', 'Jerri', 'Beatriz'];
let emptyArray = [];

// Preferred (clearer to read)
let emptyArrayWithType: Array<string> = [];

// Fine (somewhat confusing syntax)
let emptyArrayWithType2: string[] = [];

// Object literals
// But see also creating-types.ts in this directory
let person = {
	firstName: 'John',
	lastName: 'Paxton',
	city: 'Nutley',
	state: 'NJ',
};

console.log(`The person's name is ${person.firstName}`);

// TypeScript "knows" that lastName is a string
// person.lastName = 20;

// TypeScript doesn't know that we could add properties
// person.phone = '610-506-2220'

// Regular expressions
let lastNameRE = /[A-Z][a-z]+/;
let firstNameRE = new RegExp('[A-Z][a-z]+');

// Typical class/type that can be instantiated
let today = new Date();
