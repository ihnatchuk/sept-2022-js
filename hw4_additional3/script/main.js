//
// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


//     a. заповнити його 50 парними числами за допомоги циклу.
const arrEven=[];
for (let i = 0; i < 50; i++) {
    arrEven.push(2*i);
}
console.log(arrEven);

//     b. заповнити його 50 непарними числами за допомоги циклу.
const arrOdd=[];
for (let i = 0; i < 50; i++) {
    arrOdd.push(2*i+1);
}
console.log(arrOdd);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
const arrRnd=[];
for (let i = 0; i < 20; i++) {
    arrRnd.push(Math.random());
}
console.log(arrRnd);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
const arrRandom=[];
for (let i = 0; i < 20; i++) {
    arrRandom.push(Math.floor(Math.random()*725)+8);
}
console.log(arrRandom);
console.log('-------------кожен третій-------------------');
// Вивести за допомогою console.log кожен третій елемент
for (let i = 0; i < arrRandom.length; i++) {
    if (!(i%3)){
        console.log(arrRandom[i]);
    }
}
console.log('-----кожен третій, який є парним-------------------');
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arrRandom.length; i++) {
    // if ((i%3===0)&&(arrRandom[i]%2)===0){
    //     console.log(arrRandom[i]);
    // }
    if (!(i%3)&&!(arrRandom[i]%2)){
        console.log(arrRandom[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
const newArr=[];
for (let i = 0; i < arrRandom.length; i++) {
    if (!(i%3)&&!(arrRandom[i]%2)){
        newArr.push(arrRandom[i])
    }
}
console.log(newArr);

//Вивести кожен елемент масиву, сусід справа якого є парним
console.log('-----елемент масиву, сусід справа якого є парним-------------------');
const arrNum=[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
for (let i = 0; i < arrNum.length-1; i++) {
    if (!(arrNum[i+1]%2)){
        console.log(arrNum[i]);
    }
}

//Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
console.log('---Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.-----------');
const arrChekValues=[100,250,50,168,120,345,188];
let sum=0;
for (const arrChekValue of arrChekValues) {
    sum+=arrChekValue
}
sum/=arrChekValues.length
console.log('Avarage chek value= ', sum);

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
const arrRND1=[]
const arrMult5=[]
for (let i = 0; i < 20; i++) {
    arrRND1.push(Math.floor(Math.random()*10)+1)// рандомні числа від 1 до 10
}
for (let i = 0; i < arrRND1.length; i++) {
    arrMult5[i]=arrRND1[i]*5
}
console.log(arrRND1);
console.log(arrMult5);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо елемент є числом - додати його в інший масив.
const arrNumbers=[]
const arrMixTypes=[1,2,3,4,5,'a','b','c','d','e',6,7,true, 'cvc',false, 'dfg df', 67, 35 , true, undefined, '', 23]
for (let i = 0; i < arrMixTypes.length; i++) {
    const arrMixType = arrMixTypes[i];
    if (typeof arrMixType==='number'){
        arrNumbers.push(arrMixType)
    }
}
console.log('-----масив з будь якими значеннями (стрінги, числа, і тд...) ------ ');
console.log(arrMixTypes);
console.log('-----масив з числами ------ ');
console.log(arrNumbers);

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

// const usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// const citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// const usersWithCities =[];
//
// for (let i = 0; i < usersWithId.length; i++) {
//     const userWithId=usersWithId[i];
//     for (let j = 0; j < citiesWithId.length; j++) {
//         const cityWithId = citiesWithId[j];
//         if (userWithId.id===cityWithId.user_id){
//             usersWithCities[usersWithCities.length]=userWithId;// як посилання
//             usersWithCities[usersWithCities.length-1].address=cityWithId;// як посилання
//         }
//     }
// }
// console.log(usersWithCities);

const usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

const citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
const usersWithCities =[];

for (let i = 0; i < usersWithId.length; i++) {    //перебираю масив usersWithId
    const userWithId=usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {   //перебираю масив citiesWithId
        const cityWithId = citiesWithId[j];
        if (userWithId.id===cityWithId.user_id){         // якщо id співпадають створюю новий обєкт згідно умови
            usersWithCities[usersWithCities.length]={};  // і кладу його в новий масив
            for (let item in userWithId){                // перебираю обєкт userWithId для копіювання
                usersWithCities[usersWithCities.length-1][item]=userWithId[item]; //
            }
            usersWithCities[usersWithCities.length-1]['address']={};
            for (let item in cityWithId){                // перебираю обєкт cityWithId для копіювання і додавання в
                usersWithCities[usersWithCities.length-1].address[item]=cityWithId[item]; // usersWithCities
            }
        }
    }
}
console.log('---------масив обєктів----------------');
console.log(usersWithCities);

//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
const arrRND10=[]
for (let i = 0; i < 10; i++) {
    arrRND10.push(Math.floor(Math.random()*10)+1)// рандомні числа від 1 до 10
}
console.log(arrRND10);
console.log('---елементи, значення яких є парними ');
for (const arrRND10Item of arrRND10) {
    if (!(arrRND10Item%2)){
        console.log(arrRND10Item);
    }
}


//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
const arrNum10=[]
for (let i = 0; i < 10; i++) {
    arrNum10.push(Math.floor(Math.random()*10)+1)// рандомні числа від 1 до 10
}
console.log(arrNum10);
console.log('---копія масиву ');
const arrNum10Copy=[]
for (const arrNum10Item of arrNum10) {
    arrNum10Copy.push(arrNum10Item)
}
console.log(arrNum10Copy);


//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
const letters0=[ 'a', 'b', 'c'];
let word0='';
for (let i = 0; i < letters0.length; i++) {
    const letter = letters0[i];
    word0+=letter
}
console.log(word0);

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
const letters1=[ 'D', 'i', 'm', 'a'];
let word1='';
idx=0;
while (idx<letters1.length){
    word1+=letters1[idx];
    idx++
}
console.log(word1);


//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
const letters2=[ 'a', 'b', 'c'];
let word2='';
for (const letter of letters2) {
    word2+=letter
}
console.log(word2);

