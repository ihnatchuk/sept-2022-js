// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].




// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.



// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
const arr1=[1,2,3,4];
const arr2=[2,3,4,5,6,7];
const addArrays=(array1,array2)=>{
    const sumArr=[];
    const n=array1.length>array2.length?array1.length:array2.length
    for (let i = 0; i < n; i++) {
        sumArr[i]=(array1[i]||0)+(array2[i]||0);
    }
    return sumArr
}
console.log(addArrays(arr1,arr2));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
const objArr=[{name: 'Dima', age: 13}, {model: 'Camry'}];
const keys=(array)=>{
    const keysArr=[];
    for (const obj of array) {
        for (const Key in obj) {
            keysArr.push(Key);
        }
    }
    return keysArr;
}
console.log(keys(objArr));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
const objArr2=[{name: 'Dima', age: 13}, {model: 'Camry'}];
const values=(array)=>{
    const valuesArr=[];
    for (const obj of array) {
        for (const Keys in obj) {
            valuesArr.push(obj[Keys]);
        }
    }
    return valuesArr;
}
console.log(values(objArr2));

