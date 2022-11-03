//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let elements=[1,'23','JS', true, [1,2,3,4,5], {id:1, name:'Dima'}, 46, "html", 'eng', 'experience'];
console.log(elements[5].name, elements[6], elements[7], elements[4][2]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1={
    title: "The pelican brief",
    pageCount:77,
    genre:"detective",
}
let book2={
    title: "1984",
    pageCount:68,
    genre:"distopia",
}
let book3={
    title: "The death on the Nile",
    pageCount:88,
    genre:"detective",
}

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book4={
    title: "Мікросхемотехніка",
    pageCount:492,
    genre:"science",
    authors:[
        {name:'Гельжинський І.І.', age:56},
        {name:'Голяка Р.Л.', age:65},
        {name:'Готра З.Ю', age:33},
        {name:'Марусенкова Т.А.', age:45},
    ]
}
let book5={
    title: "Електроніка і мікросхемотехніка",
    pageCount:416,
    genre:"science",
    authors:[
        {name:'Колонтаєвський Ю.П.', age:47},
        {name:'Сосков А.Г.', age:56},
    ]
}
let book6={
    title: "Комп'ютерна схемотехніка",
    pageCount:412,
    genre:"science",
    authors:[
        {name:'Бабич М. П.', age:67},
        {name:'Жуков І. А.', age:45},
    ]
}
console.log(`The author of the book "${book4.title}" is ${book4.authors[0].name}`);
console.log(`The age of the ${book6.authors[1].name} is ${book6.authors[1].age}`);
console.log(`The book "${book5.title}" has ${book5.pageCount} pages`);

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users=[
    {name:'Valyl', username:'Vasya',password:'qwerty'},
    {name:'Petro', username:'Petya',password:'poiuyt'},
    {name:'Svitlana', username:'Svetik',password:'ergft43tyg'},
    {name:'Olga', username:'Oli4ka',password:'erg534g'},
    {name:'Dmytro', username:'Dimi4',password:'Dwegw54gger'},
    {name:'Yurij', username:'Yush',password:'g454hgrth'},
    {name:'Sergij', username:'Seryj',password:'45dfvovk31'},
    {name:'Oleksandr', username:'Alex',password:'sdfgh45'},
    {name:'Oksana', username:'Xuha',password:'sDghh4566uy'},
    {name:'Illia', username:'DarkEl',password:'Bfddg546hr'},
]
let userIndex=Math.trunc(Math.random()*10);
console.log(`User with index ${userIndex} has password "${users[userIndex].password}"`);

//console.log(users[userIndex].password);
//users.map(user=>console.log(user.password));
// console.log({}+1)
// console.log({}+'1')
// console.log({}+[])
// console.log(typeof ([]+1))
// console.log([]-1)
// console.log(typeof ([1]+1))
// console.log([2]+[1])
// console.log([2]-[1])
// console.log([2]+true)







