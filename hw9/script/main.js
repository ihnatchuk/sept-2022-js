// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

// for (const simpson of simpsons) {
//     let member=document.createElement('div');
//     document.body.appendChild(member);
//
//     let name=document.createElement('h2');
//     name.innerText=simpson.name+' '+simpson.surname;
//     member.appendChild(name)
//
//     let age=document.createElement('h3');
//     age.innerText=`age ${simpson.age}`;
//     member.appendChild(age);
//
//     let info=document.createElement('p');
//     info.innerText=simpson.info;
//     member.appendChild(info);
//
//     let img=document.createElement('img');
//     img.src=simpson.photo;
//     img.alt=simpson.name;
//     member.appendChild(img);
// }
// const divs=document.getElementsByTagName('div')
// for (const div of divs) {
//     div.classList.add('member');
// }



// Цикл в циклі
// - Є масив

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// for (const course of coursesArray) {
//     let divElement=document.createElement('div');
//     document.body.appendChild(divElement);
//     divElement.classList.add('course');
//
//     let title=document.createElement('h2');
//     title.innerText=course.title;
//     divElement.appendChild(title)
//
//     let durationWrap=document.createElement('div');
//     durationWrap.classList.add('wrap');
//     divElement.appendChild(durationWrap)
//
//     let monthDuration=document.createElement('h3');
//     monthDuration.innerText='Months: '+course.monthDuration;
//     durationWrap.appendChild(monthDuration);
//
//     let hourDuration=document.createElement('h3');
//     hourDuration.innerText='Hours: '+course.hourDuration;
//     durationWrap.appendChild(hourDuration);
//
//     let divUl=document.createElement('div');
//     divElement.appendChild(divUl);
//     let ul=document.createElement('ul');
//     divUl.appendChild(ul);
//     const modules=course.modules;
//     for (const module of modules) {
//         let li=document.createElement('li');
//         li.innerText=module;
//         ul.appendChild(li);
//     }
// }


// ------------------
//
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// const block=document.createElement('div')
// block.classList.add('wrapper','collapse','alpha','beta')
// block.style.backgroundColor='silver';
// block.style.color='black';
// block.style.fontSize='16px';
// block.innerText='Block1';
// document.body.appendChild(block);
//
// const block2= document.createElement('div')
//
// block2.innerHTML=block.innerHTML;
// block2.classList.add(...block.classList);
// console.log(block.style);
// for (const name of block.getAttributeNames()) {
//     const value = block.getAttribute(name);
//     block2.setAttribute(name,value);
// }
// document.body.appendChild(block2);


// -------------------- resolve from consultation

// const block=document.createElement('div')
// block.classList.add('wrapper','collapse','alpha','beta')
// block.style.backgroundColor='silver';
// block.style.color='black';
// block.style.fontSize='16px';
// block.innerText='Block1';
// document.body.appendChild(block);
//
// const block2= block.cloneNode(true);// ? чому не працює копіювання обєкту через JSON?
// document.body.appendChild(block2);



//--------------------------------------------------------------------
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Compleirex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const coursesAndDuration of coursesAndDurationArray) {
//     const div=document.createElement('div');
//     div.innerText=`Course ${coursesAndDuration.title} - duration ${coursesAndDuration.monthDuration} months`;
//     document.body.appendChild(div);
// }

// - Є масив
// let coursesAndDurationArray1 = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде
// <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// for (const coursesAndDuration of coursesAndDurationArray1) {
//     const div=document.createElement('div');
//     div.classList.add('heading')
//
//     const h1=document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText=coursesAndDuration.title;
//
//     const p=document.createElement('div');
//     p.classList.add('description');
//     p.innerText=`Duration ${coursesAndDuration.monthDuration} months`;
//     div.append(h1,p);
//     document.body.appendChild(div);
// }

// -------------------------------------------------------------------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні
//     на кнопку зникав елемент з id="text".
// let div =document.createElement('div');
// div.setAttribute('id','text');
// div.innerText='some text';
// document.body.appendChild(div);
//
// let button=document.createElement('button');
// button.innerText='Delete text';
// document.body.appendChild(button);
// button.onclick=event=>div.classList.add('none');

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form=document.createElement('form');
// let input=document.createElement('input');
// let button2=document.createElement('button');
// button2.innerText='submit';
// document.body.appendChild(form);
// form.append(input,button2);
// button2.onclick=function(e){
//     let age=input.value;
//     if(age<18){
//         alert('Your age <18, access denied');
//     }else{
//         alert('Welcome!');
//     }
// }


// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let div=document.createElement('div');
div.classList.add('formToFill');

let input1=document.createElement('input');
input1.setAttribute('type','number')

let input2=document.createElement('input');
input2.setAttribute('type','number')

let input3=document.createElement('input');
input3.setAttribute('type','text')


let button=document.createElement('button');
button.innerText='submit';

div.append(input1, input2, input3, button);

document.body.appendChild(div);

button.onclick=function(e){
    let rowNumber=input1.value;
    let columnNumber=input2.value;
    let text=input3.value;
    let table=document.createElement('table');
    for (let i = 0; i < rowNumber; i++) {
        let tr=document.createElement('tr');
        for (let j = 0; j < columnNumber; j++) {
            let td=document.createElement('td');
            td.innerText=text;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
