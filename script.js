// // 1. ამოიღეთ user ცვლადის სტუდენტის სტატუსი;


// let user = {
//     firstname: 'giorgi',
//     lastname: 'smith',
//     age: 25,
//     studentstatus: active
// };

// console.log(user['studentstatus']);

// 2. შექმენით მასივი, და დაბეჭდეთ სათითაოდ თითოეული ელემენტი; (for, while ციკლების საშუალებით);

let students = ['giorgi', 'nini', 'mariami', 'oto']

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}

let y=0;
while (y < students.length) {
    console.log(students[y]);
    y++;
}

// 3.  შექმენით მასივი, და ამოიღეთ ყველა რიცხვი რომელიც მეტია 5ზე, for ციკლის გამოყენებით.

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let I in numbers) {
    if (numbers[I] > 5) {
        console.log(numbers[I]);
    }
}

// 4.მოცემული მაისივიდან კონსოლში გამოვიტანოთ მარტო ის ობიექტი რომლის status პროეპრტი მნიშვნელობა არის true;

let users =  [
    {username:'test1', status: false},
    {username:'test2', status: false},
    {username:'test3', status: true}
];

for(let x in users) {
    if (users[x].status === true) {
        console.log(users[x]);
    }
}

// 5.  მოცემული მასივიდან for ციკლის საშუალებით კონსოლში გამოიტანეთ მხოლოდ დადებითი რიცხვები:

let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];

for (let n of arr){
    for (let p of n) {
        if (p > 0) {
            console.log(p);
        }
    }

}

// 6.რას დააუბრუნებს 6 === “6”? (true ან false) ახსენით რატო?

console.log(6 === '6');

// დააბრუნებს ფოლს პირობას რადგან სამი შედარებით არ ახდენს ტიპების კონვერტაციას.

// 7.მოცემულია მასივი:
// ამოიღეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა 5-ზე მეტია და მოიცავენ ‘ava’-ს;

let array = ["html", "css", "bootstrap", "javascript","python"];

for (let t of array) {
    if (t.length > 5 && t.includes('ava')) {
        console.log(t);
    }
}

// 8.
// მოცემულია ობიექტი:
// თუ უსერის ასაკი მეტია 18ზე და სტუდენტის სტატუსი აქტიურია დაიბეჭდოს ტექსტი: hello;
// თუ უსერის სახელი უდრის გიორგის მაშინ დაიბეჭდოს ტექსტი: hello giorgi;
// თუ უსერის სტუდენტის სტატუსი აქტიურია ან უსერის ასაკი ნაკლებია 25ზე დაიბეჭდოს ტექსტი: hello world;

let userr = {
	name: ‘giorgi’,
	age:  20,
	studentstatus: active
}

if  (userr.age > 18 && userr.studentstatus === 'active') {
    console.log('hello');
}
if (userr.name === 'giorgi') {
    console.log('hello giorgi');
}
if (userr.studentstatus === 'active' || userr.age < 25 ) {
    console.log('hello world');
}
else {
    console.log('error');
}

// 9.// მოცემულია მასივი:გამოიტანეთ მარტო სრტინგები;
let itemm = [ watermelon, pear, 10, 45, 50, ‘apple’, ‘ananas’ ] ;

for (let items of itemm ) {
    if (typeof item == 'string') {
        console.log(item);
    }
}

