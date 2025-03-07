let anotherPerson = {
	firstName: 'John',
	lastName: 'Paxton',
};

// Creating types

// Interfaces
interface Person {
	firstName: string;
	lastName: string;
	id: number;
}

let anotherPerson2: Person = {
	firstName: 'Whatever',
	lastName: 'Whatever',
	id: 10,
};

// Using the "type" keyword
type Person2 = {
	firstName: string;
	lastName: string;
	id: number;
};

let anotherPerson3: Person2 = {
	firstName: 'Blah',
	lastName: 'Blah',
	id: 20,
};

// Classes, but they persist into JS
class Person3 {
	firstName = '';
	lastName = '';
	id = 0;
}

let anotherPerson4 = new Person3();
(anotherPerson4.firstName = 'Fred'), (anotherPerson4.lastName = 'Blasio');
anotherPerson4.id = 30;
