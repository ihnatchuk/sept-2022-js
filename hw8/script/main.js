// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
}
function randomUsersGenerator(num){
    const names=['Vasya', 'Petya','Sasha','Dima','Sergiy','Ivan','Anna', 'Ira','Oksana','Julia'];
    const surnames=['nik','nko','chuk'];
    const users=[];
    for (let i = 0; i < num; i++) {
        let name=names[Math.floor(Math.random()*10)];
        let surname=names[Math.floor(Math.random()*10)]+surnames[Math.floor(Math.random()*3)];
        const prePhone=['067','096','098','068','050','095','099','063','073','093']
        let phone=prePhone[Math.floor(Math.random()*10)];
        for (let j = 0; j < 7; j++) {
            phone+=Math.floor(Math.random()*10)
        }
        users[i]=new User(i+1,name,surname,`${name}.${surname}@gmail.com`,phone);
    }
    return users;
}
const users=randomUsersGenerator(20)
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const evenIdUsers=users.filter(user=>!(user.id%2));
console.log(evenIdUsers);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortedIdUsers=users.sort((a,b)=>a.id-b.id);
console.log(sortedIdUsers);



// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = [...order];
    }
}
const products=['bread','butter','milk','oil','meat', 'fish','sour cream','rice', 'potato','tomato','pasta','solt','tea','coffee','mineral water'];
function randomClientsGenerator(num){
    const names=['Vasya', 'Petya','Sasha','Dima','Sergiy','Ivan','Anna', 'Ira','Oksana','Julia'];
    const surnames=['nik','nko','chuk'];
    const clients=[];
    for (let i = 0; i < num; i++) {
        let name=names[Math.floor(Math.random()*10)];
        let surname=names[Math.floor(Math.random()*10)]+surnames[Math.floor(Math.random()*3)];
        const order=[];
        orderAmount=Math.floor(Math.random()*19+1)
        for (let j = 0; j <orderAmount ; j++) {
            order.push(products[Math.floor(Math.random()*products.length)]);
        }
        const prePhone=['067','096','098','068','050','095','099','063','073','093']
        let phone=prePhone[Math.floor(Math.random()*prePhone.length)];
        for (let j = 0; j < 7; j++) {
            phone+=Math.floor(Math.random()*10)
        }
        clients[i]=new Client(i+1,name,surname,`${name}.${surname}@gmail.com`,phone,order);
    }
    return clients;
}
const clients=randomClientsGenerator(100)
console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortedClients=clients.sort((a,b)=>a.order.length-b.order.length)
console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку