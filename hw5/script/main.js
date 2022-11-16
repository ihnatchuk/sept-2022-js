// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let area=(a,b)=>a*b;
console.log(area(5, 7));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circleArea=(r)=>Math.PI*r*r;
console.log(circleArea(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea=(r,h)=>2*Math.PI*r*(h+r);
console.log(cylinderArea(10, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
const arr=[2,3,4,6,'dfg',true, 'gfghf', 345, 35,{}];

let printArray=(array)=>{
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
console.log('---------------------------');
printArray(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(text){
    document.write(
        `
            <p>${text}</p>
        `
    )
}
paragraf('створити функцію яка створює параграф з текстом. Текст задати через аргумент');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list(text){
    document.write('<ul>')
    document.write(
        `
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        `
    )
    document.write('</ul>')
}
list('створити функцію яка створює ul з трьома елементами li');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function itemslist(text,n){
    document.write('<ul>')
    for (let i = 0; i < n; i++) {
        document.write(
            `
                <li>${text}</li>
            `
        );
    }
    document.write('</ul>')
}
let liNumber=10;
itemslist('створити функцію яка створює ul з n елементами li',liNumber);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrPrimitive=[2,3,4,6,'dfg',true, 'gfghf', 345, 35,'rh fg'];
function listFromArray(array){
    document.write('<ul>')
    for (const item of array) {
        document.write(
            `
                <li>${item}</li>
            `
        );
    }
    document.write('</ul>')
}
listFromArray(arrPrimitive);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28,id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];

function usersWriter(users){
    for (const user of users) {
        document.write(
            `
                <div>${user.id}. ${user.name} age ${user.age}</div>
            `
        );
    }
}
usersWriter(users);

// - створити функцію яка повертає найменьше число з масиву
{
    const numbersArray=[2,3,56,45,34,7,67,87,0,-123,345,3,45,6,66,67,78,9,0,56];
    const minArrayItem=array=> {
        let min = array[0];
        for (const item of array) {
            if (item < min) {
                min = item;
            }
        }
        return min;
    }
    const d = new Date();
    console.log(`Start ${d.getMinutes()}:${d.getSeconds()}`);
    let min;
    for (let i = 0; i < 100000000; i++) {
        min=minArrayItem(numbersArray)
    }
    console.log('min: ',min);
    const d1 = new Date();
    console.log(`Finish ${d1.getMinutes()}:${d1.getSeconds()}`);
}


// - створити функцію яка повертає найменьше число з масиву spread+Math.min
{
    const numbersArray=[2,3,56,45,34,7,67,87,0,-123,345,3,45,6,66,67,78,9,0,56];
    const minArrayItem3=(array)=>Math.min(...array);
    const d = new Date();
    console.log(`Start ${d.getMinutes()}:${d.getSeconds()}`);
    let min;
    for (let i = 0; i < 100000000; i++) {
        min=minArrayItem3(numbersArray)
    }
    console.log('min: ',min);
    const d1 = new Date();
    console.log(`Finish ${d1.getMinutes()}:${d1.getSeconds()}`);
}


{
    const numbersArray=[2,3,56,45,34,7,67,87,0,-123,345,3,45,6,66,67,78,9,0,56];
    function minArrayItem2(array){
        return Math.min(...array);
    };
    console.log(minArrayItem2(numbersArray));
}



// - створити arrow-функцію яка повертає найменьше число з масиву spread+Math.min
{
    const numbersArray = [2, 3, 56, 45, 34, 7, 67, 87, 0, -123, 345, 3, 45, 6, 66, 67, 78, 9, 0, 56];
    const minArrayItem3 = (array) => Math.min(...array);
    console.log(minArrayItem3(numbersArray));
}

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
{
    const numbersArray = [2, 3, 56, 45, 34, 7, 67, 87, 0, -123, 345, 3, 45, 6, 66, 67, 78, 9, 0, 56];
    const sumArrayItem = array => {
        let sum = 0;
        for (const item of array) {
            sum += item;
        }
        return sum;
    }
    console.log('Sum: ', sumArrayItem(numbersArray));
}