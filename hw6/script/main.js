// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
const str1='hello world';
const str2='lorem ipsum';
const str3='javascript is cool';
console.log(str1.length);
console.log(str2.length);
console.log(str3.length);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';

const stringToarray=str=>str.split(' ');

let arr = stringToarray(str);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
const arrNum=[10,8,-7,55,987,-1011,0,1050,0];

console.log(arrNum.map(item => item.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки
// в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

const nums = [11,21,3];
const sortNums=(array, direction)=>{
    if (direction==='ascending'){
        return array.sort((a,b)=>a-b)
    } else if (direction==='descending') {
        return array.sort((a,b)=>b-a)
    } else{
        console.log('direction error');
        return array;
    }
}
console.log(sortNums(nums, 'dfgh fdgh '));
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// sort direction is -1:ascending  or 1:descending
console.log('---------------------------------');
const nums2 = [11,21,3];
const sortNumsMy=(array, direction)=>array.sort((a,b)=>(b-a)*direction);
console.log(sortNumsMy(nums2, -1));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a,b)=>b.monthDuration-a.monthDuration);
console.log(coursesAndDurationArray);

console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5));

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
const cardSuits=['spade', 'diamond','heart', 'clubs'];
const values=['6','7','8','9','10', 'ace','jack','queen','king'];
const dec=[];
values.forEach((value)=>{
    for (const cardSuit of cardSuits) {
        const obj={};
        obj['value']=value;
        obj['cardSuit']=cardSuit;
        if ((cardSuit==="diamond") || (cardSuit==="heart")){
            obj['color']='red';
        } else{
            obj['color']='black';
        }
        dec.push(obj);
    }
})
dec.push({value: 'joker',cardSuit: '',color:''});
dec.push({value: 'joker',cardSuit: '',color:''});
console.log(dec);

// - знайти піковий туз
console.log(dec.filter(card => (card.value === 'ace') && (card.cardSuit === 'spade')));

// - всі шістки
console.log(dec.filter(card => card.value === '6'));

// - всі червоні карти
console.log(dec.filter(card => card.color === 'red'));

// - всі буби
console.log(dec.filter(card => card.cardSuit === 'diamond'));

// - всі трефи від 9 та більше
console.log(dec.filter(card => (card.value.length >= 2) && (card.cardSuit === 'clubs')));




// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }