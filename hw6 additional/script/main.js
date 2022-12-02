//
// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
const str ='наслаждение';
const cutString=(str, n)=>{
    const arrSubStr=[];
    for (let i = 0; i < str.length; i+=n) {
        arrSubStr.push(str.slice(i,i+n));
    }
    return arrSubStr;
}
cutString(str, 3).map(item=>document.writeln(`<h3>${item}</h3>`))


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості
// символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let str1 = 'Каждый охотник желает знать'
const delete_characters=(str, length)=>str.slice(0,length);

document.writeln(delete_characters(str1, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому
// всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str3 = "HTML JavaScript PHP";

const insert_dash=str=>str.toUpperCase().split(' ').join('-');
const insert_dash2=str=>str.toUpperCase().replaceAll(' ','-');
const insert_dash3=str=>str.toUpperCase().replace(/[ ]/g,'-');
document.writeln(insert_dash(str3));
document.writeln(insert_dash2(str3));
document.writeln(insert_dash3(str3));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру
// у верхній.
str4="dima studies in okten school"
const capital=str=>str[0].toUpperCase()+str.slice(1,str.length);
console.log(capital(str4));

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

const normalizeStr=str=>str.replace(/[-_.]/,' ').replace(/[-_.]/g,'');
console.log(normalizeStr(n1));
console.log(normalizeStr(n2));
console.log(normalizeStr(n3));

let n4 = '%$#*^%   - **Ha444$$3rry-2 3234-       Pot333ter333333333'
const normalizeStrPlus=str=>{
    let str1=str.match(/[A-Za-z]/g).join('');
    let str2='';
    for (const char of str1) {
        if (char.charCodeAt(0)<97){
            str2=str2+' '+char;
        }else{
            str2+=char;
        }
    }
    return str2.trim();
}
console.log(n4);
console.log(normalizeStrPlus(n4));


// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

const randomArr=n=>{
    const arr=[];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*101));
    }
    return arr;
}
let n=10;
const arr=randomArr(10);
console.log(arr);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
console.log(arr.sort((a,b)=>a-b));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

const arr2=randomArr(10);
console.log(arr2);
console.log(arr2.filter(num => num % 2===0 && num !== 0));


// ----- another way to say the same
//console.log(arr2.filter(num => !(num % 2) && num !== 0));

//---------------------------------------------------------------????
// console.log(!3%2)//0
// console.log(!(3%2))//false
//
// console.log(!4%2)//0
// console.log(!(4%2))//true


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
const sentence='рядок, у якому кожне слово починається з великої літери.'
const capitalize=str=>str.split(' ').map(word=>word[0].toUpperCase()+word.slice(1,word.length)).join(' ');
console.log(capitalize(sentence));


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака
// равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над
// протоколом, з регулярками будете потім бавитись.

let email='someemail@gmail.com'
let eee='fg.d1.g.9@ggg.g';

// формування набору допустимих символів
const validChar=['.'];
for (let i = 0; i < 10; i++) {
    validChar.push(i+'');
}
for (let i = 97; i <123; i++) {
    validChar.push(String.fromCharCode(i));
}
//console.log(validChar);


const emailValidator=email=>{
    const partIsValid=str=>{
        return !str.toLowerCase().split('').filter(char=>!validChar.includes(char)).length
    }
    const arr=email.split('@');
    if (arr.length===2 && arr[0] && arr[1]){    // перевірка клькості @ та наявності лівої та правої частини
        if (!(arr[0].split('.').some(word=>word==='')) && partIsValid(arr[0])){          // чи валідна ліва частина
            if (!(arr[1].split('.').some(word=>word==='')) &&arr[1].includes('.') && partIsValid(arr[1])) {      // чи валідна права частина
                console.log('email is valid!');
                return true;
            }else{
                console.log('domain is not valid');
                return false;
            }
        }else{
            console.log('login is not valid');
            return false;
        }
    }else{
        console.log('It is not email');
        return false
    }
}

console.log(emailValidator(eee));

//--відсортувати його в спадаючому порядку за кількістю елементів в полі modules-----------------------------------
coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const arraySort=array=>array.sort((a,b)=>a.modules.length-b.modules.length);

console.log(arraySort(coursesArray));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// якщо symb це один символ
str5 = "Астрономия это наука о небесных объектах";
let symb = "о";
const count=(str, stringsearch)=>{
    let counter=0;
    for (const symbol of str) {
        if (symbol===stringsearch){
         counter++
        }
    }
    return counter;
}
console.log(count(str5, symb));

// якщо symb це довільна стрічка
console.log('-----------------strplus-------------------------');
let strplus = "Астрономия это наука об небесных объектах";
let symb2 = "об";
const countPlus=(str, stringsearch)=>{
    let counter=0;
    let i=0;
    while (i < str.length) {
        let index=str.slice(i).indexOf(stringsearch);
        if (index>0){
            counter++;
            i+=index+stringsearch.length;
        }else{
            i++;
        }
    }
    return counter;
}
console.log(countPlus(strplus, symb2));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
let wordNumber=5;
let str6 = "Сила тяжести приложена к центру масс тела";
const cutString2=(str, n)=>str.split(' ').slice(0,n).join(' ');
console.log(cutString2(str6, wordNumber));


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
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
const maxBook=books.sort((a,b)=>b.pageCount-a.pageCount)[0];
console.log(maxBook);

// - знайти книжку/ки з найбільшою кількістю жанрів
const maxGenreBook=books.sort((a,b)=>b.genre.length-a.genre.length)[0];
console.log(maxGenreBook);

// - знайти книжку/ки з найдовшою назвою
const maxTitleBook=books.sort((a,b)=>b.title.length-a.title.length)[0];
console.log(maxTitleBook);

// - знайти книжку/ки які писали 2 автори
const twoAuthorsBook=books.find(book=>book.authors.length===2);
console.log(twoAuthorsBook);

// - знайти книжку/ки які писав 1 автор
const oneAuthorsBook=books.find(book=>book.authors.length===1);
console.log(oneAuthorsBook);

// - вісортувати книжки по кількості сторінок по зростанню
books.sort((a,b)=>a.pageCount-b.pageCount);
console.log(books);


// console.log(books.push({}));

//- єдиним авторам книг дати нагороду
const oneAuthorsBookAward=books.map(book=> book.authors.length===1&&{...book, awarded:true}).filter(book=>book);
console.log(oneAuthorsBookAward);



