// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a,
//     що дорівнює 1, 0, -3

let x = 1;
x ? console.log('вірно') : console.log('не вірно');


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
// години попадає число (в першу, другу, третю или четверту частину години).
let time = 46;

if (time >= 0 && time < 15) {
    console.log('First quoter');
} else if (time >= 15 && time < 30) {
    console.log('Second quoter');
} else if (time >= 30 && time < 45) {
    console.log('Third quoter');
} else if (time >= 45 && time < 60) {
    console.log('Fourth quoter');
} else {
    console.log('Out of range 0-59');
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
let day = 19;

if (day >= 1 && day < 11) {
    console.log('First decade');
} else if (day >= 11 && day < 21) {
    console.log('Second decade');
} else if (day >= 21 && day < 32) {
    console.log('Third decade');
} else {
    console.log('Out of range 1-31');
}


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let numOfDay=+prompt("Input day number")

switch (numOfDay){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Out of range 1-7')
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let num1=+prompt('Input the first number');
let num2=+prompt('Input the second number');

if (num1>num2){
    console.log('The first number bigger than the second')
} else if (num1===num2){
    console.log('The first number is equal to the second')
} else {console.log('The first number is smaller than the second')}


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//     (хибноподыбне, тобто кастується до false)

let y=prompt('input something')||"default value";
console.log(y);

//-----------------------------------------------------------------------------------------------------

// only numbers!==0
let z=+prompt('input not zero number')||1;
console.log(z);

// login to JS forum
let str=[]+(5>4);
console.log(str);
let answer=prompt('what is the value of str? str=[]+(5>4)');
if (answer===str){
    console.log('You can login to our forum');
} else {
    console.log('It is not for you');
}



