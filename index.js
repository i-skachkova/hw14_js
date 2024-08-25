// масив об'єктів, з яким я буду постійно працювати:
const users = [
    {
        name: 'Alex',
        age: 34,
        gender: 'male',
        eyeColor: 'green',
        isActive: true,
        email: 'alex123@gmail.com',
    },
    {
        name: 'Nina',
        age: 17,
        gender: 'female',
        eyeColor: 'grey',
        isActive: true,
        email: 'iLoveCats001@gmail.com',
    },
    {
        name: 'Olga',
        age: 45,
        gender: 'female',
        eyeColor: 'brown',
        isActive: false,
        email: 'olga03@gmail.com',
    },
    {
        name: 'Max',
        age: 21,
        gender: 'male',
        eyeColor: 'brown',
        isActive: true,
        email: 'max4343324r@gmail.com',
    },
    {
        name: 'Victor',
        age: 12,
        gender: 'male',
        eyeColor: 'green',
        isActive: false,
        email: 'aa377288347@gmail.com',
    }
];


// 1

console.log('Task 1');

const names = users.map(user => user.name);
console.log(`${names}`);

// 2

console.log('Task 2');

const peopleWithGreenEyes = users.filter(user => user.eyeColor === 'green');
const peopleWithBrownEyes = users.filter(user => user.eyeColor === 'brown');
const peopleWithGreyEyes = users.filter(user => user.eyeColor === 'grey');
// масиви об'єктів
console.log(peopleWithBrownEyes);
console.log(peopleWithGreenEyes);
console.log(peopleWithGreyEyes);
// масиви імен, на всяк випадок
// console.log(`People with brown eyes: ${peopleWithBrownEyes.map(user => user.name)}`);
// console.log(`People with green eyes: ${peopleWithGreenEyes.map(user => user.name)}`);
// console.log(`People with grey eyes: ${peopleWithGreyEyes.map(user => user.name)}`);

// 3

console.log('Task 3');

const men = users.filter(user => user.gender === 'male');
const women = users.filter(user => user.gender === 'female');
console.log(`Men: ${men.map(user => user.name)}`);
console.log(`Women: ${women.map(user => user.name)}`);

// 4

console.log('Task 4');

// тут знову спочатку вивела масив об'єктів, а тоді окремо імена
const notActive = users.filter(user => !user.isActive);
console.log(notActive);
console.log(notActive.map(user => user.name));

// 5

console.log('Task 5');

const user = users.find(user => user.email === 'iLoveCats001@gmail.com');
console.log(user.name);

// 6

console.log('Task 6');

const minAge = 16;
const maxAge = 40;
const ageRestrictions = users.filter(user => user.age >= minAge && user.age <= maxAge);
console.log(ageRestrictions.map(user => user.name));
