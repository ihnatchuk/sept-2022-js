// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
const arr=[1,2,3,4,5,'a','b','c','d','e',6,7,true, 'cvc',false]
for (const arrElement of arr) {
    console.log(arrElement);
}
console.log('---------------------------------------------------');
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
const n=20;
const arr2=[]
// наповнимо n значеннями
for (let i = 0; i < n; i++) {
    arr2[i]=`some text ${i}`
}
for (const arr2Element of arr2) {
    console.log(arr2Element);
}
console.log('---------------------------------------------------');



// - є масив [2,17,13,6,22,31,45,66,100,-18] :

// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
const arrNumbers=[2,17,13,6,22,31,45,66,100,-18];
//1. перебрати його циклом while
let i=0;
while (i<arrNumbers.length){
    console.log(arrNumbers[i]);
    i++
}
console.log('---------------------------------------------------');

//     2. перебрати його циклом for
for (let j = 0; j < arrNumbers.length; j++) {
    const arrNumber = arrNumbers[j];
    console.log(arrNumber);
}


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
console.log('----while, числа з непарним індексом----');
i=0;
while (i<arrNumbers.length){
    if (i%2){
        console.log(arrNumbers[i]);
    }
    i++
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log('----for, числа з непарним індексом--');

for (let j = 0; j < arrNumbers.length; j++) {
    const arrNumber = arrNumbers[j];
    if (j%2){
        console.log(arrNumber);
    }
}


// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log('---while, тільки парні  значення---');
i=0;
while (i<arrNumbers.length){
    const arrNumber=arrNumbers[i];
    if (!(arrNumber%2)){
        console.log(arrNumber);
    }
    i++
}

// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log('-- for, тільки парні  значення----');

for (let j = 0; j < arrNumbers.length; j++) {
    const arrNumber = arrNumbers[j];
    if (!(arrNumber%2)){
        console.log(arrNumber);
    }
}

// 7. замінити кожне число кратне 3 на слово "okten"

console.log('---замінити кожне число кратне 3 на слово "okten--------');
// замінюю при виведенні у консоль, щоб не псувати початковий масив
for (let j = 0; j < arrNumbers.length; j++) {
    if (!(arrNumbers[j]%3)){
        console.log('okten');
    } else{
        console.log(arrNumbers[j]);
    }
}

// 8. вивести масив в зворотньому порядку.
console.log('-------------масив в зворотньому порядку-------------');
for (let j = 0; j < arrNumbers.length; j++) {
    const arrNumber = arrNumbers[arrNumbers.length-1-j];
    console.log(arrNumber);
}


//9.1. перебрати масив циклом while у зворотньому порядку
console.log('-----while у зворотньому порядку--------');
i=arrNumbers.length-1;
while (i>=0){
    console.log(arrNumbers[i]);
    i--
}

// 9.4. перебрати циклом for та вивести  числа тільки з непарним індексом у зворотньому порядку
console.log('----for, числа з непарним індексом у зворотньому порядку--');
for (let j = arrNumbers.length-1; j >= 0; j--) {
    const arrNumber = arrNumbers[j];
    if (j%2){
        console.log(arrNumber);
    }
}
//
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи

const arr3=[1,2,3,'d','e',6,7,true, 'cvc',false];

console.log('----for, вивід булевих значень--');
for (const arrElement of arr3) {
    if (typeof arrElement==="boolean"){
        console.log(arrElement);
    }
}

console.log('----for, вивід числових значень--');
for (const arrElement of arr3) {
    if (typeof arrElement==="number"){
        console.log(arrElement);
    }
}
console.log('----for, вивід string значень--');
for (const arrElement of arr3) {
    if (typeof arrElement==="string"){
        console.log(arrElement);
    }
}

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

const books=[
    {   title: "The pelican brief",
        pageCount:77,
        genre:["Mystery & thriller", "Crime", "Drama"],
        authors:["John Grisham"]
    },
    {    title: "1984",
        pageCount:68,
        genre:["distopia"],
        authors:['Gourge Orwel']
    },
    {    title: "The death on the Nile",
        pageCount:88,
        genre:["Mystery & thriller", "Crime", "Drama"],
        authors:['Agatha Christie']

    },
    {    title: "Мікросхемотехніка",
        pageCount:492,
        genre:["science"],
        authors:['Гельжинський І.І.','Голяка Р.Л.','Готра З.Ю','Марусенкова Т.А.']
    },
    {    title: "Електроніка і мікросхемотехніка",
        pageCount:416,
        genre:["science"],
        authors:['Колонтаєвський Ю.П.','Сосков А.Г.']
    },
    {
        title: "Комп'ютерна схемотехніка",
        pageCount:412,
        genre:["science"],
        authors:['Бабич М. П.', 'Жуков І. А.']
    }
];
// -знайти наібльшу книжку.
maxPages=0;
indexBiggestBook=0;
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.pageCount>maxPages){
        maxPages=book.pageCount;
        indexBiggestBook=j;
    }
}
console.log(' ');
console.log('---------------------наібльша книжка:');
console.log(books[indexBiggestBook]);


// - знайти книжку/ки з найбільшою кількістю жанрів
maxGenre=0;
for (let j = 0; j < books.length; j++) {
    const book = books[j];
    if (book.genre.length>maxGenre){
        maxGenre=book.genre.length;
    }
}
console.log(' ');
console.log('--------книжка/ки з найбільшою кількістю жанрів:');
for (const book of books) {
    if (book.genre.length===maxGenre){
        console.log(book);
    }
}

// - знайти книжку/ки з найдовшою назвою
biggestNameLength=0;
for (const book of books) {
    if (book.title.length>biggestNameLength){
        biggestNameLength=book.title.length;
    }
}
console.log(' ');
console.log('--------книжка/ки з найдовшою назвою:');
for (const book of books) {
    if(book.title.length===biggestNameLength){
        console.log(book);
    }
}

// - знайти книжку/ки які писали 2 автори
amountAuthors=2
console.log(' ');
console.log(`--------книжка/ки які писали ${amountAuthors} автори:`);
for (const book of books) {
    if (book.authors.length===amountAuthors){
        console.log(book);
    }
}













