// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
{
    const minOfThree = (num1, num2, num3) => {
        let min = num1;
        if (num2 < min) {
            min = num2
        }
        if (num3 < min) {
            min = num3
        }
        return min;
    }
    console.log(minOfThree(1, 3, -4));
}


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
{
    const maxOfThree = (num1, num2, num3) => {
        let max = num1;
        if (num2 > max) {
            max = num2
        }
        if (num3 > max) {
            max = num3
        }
        return max;
    }
    console.log(maxOfThree(1, 3, -4));
}


// - створити функцію яка повертає найбільше число з масиву
{
    const numbersArray=[2,3,56,45,34,7,67,87,0,-123,345,3,45,6,66,67,78,9,0,56];
    const maxArray = array => {
        let max = array[0];
        for (const item of array) {
            if (item > max) {
                max = item;
            }
        }
        return max;
    }
    console.log(maxArray(numbersArray));
}


// - створити функцію яка повертає найменьше число з масиву
{
    const numbersArray=[2,3,56,45,34,7,67,87,0,-123,345,3,45,6,66,67,78,9,0,56];
    const minArray = array => {
        let min = array[0];
        for (const item of array) {
            if (item < min) {
                min = item;
            }
        }
        return min;
    }
    console.log(minArray(numbersArray));
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


// - Дано натуральное число n. Выведите все числа от 1 до n.
const numbersPrint=(n)=>{
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
numbersPrint(100);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
console.log('---Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.----------------------');
const numABPrint=(a,b)=>{
    const inc=a<b?1:-1;
    const n=(b-a)*inc+1;
    for (let i = 0; i < n; i++) {
        console.log(a+i*inc);
    }
}
numABPrint(1,1)

console.log('---Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.----------------------');
const numABPrint2=(a,b)=>{
    if (a<b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    }else {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}
numABPrint2(20,25)

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

    console.log('міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"');
    const numbersArray = [8, 9, 0, 4];
    const itemUp = (array, index) => {
        let temp;
        if (index < array.length - 1) {
            temp = array[index + 1];
            array[index + 1] = array[index];
            array[index] = temp;
        } else {
            console.log('Out of range');
        }
    }
    console.log(numbersArray);
    itemUp(numbersArray, 2);
    console.log(numbersArray);



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// результатом є новий масив
{
    const arrZero = [1, 0, 6, 0, 3];
    const zeroUpArr = array => {
        const newArr = [];
        let count0 = 0;
        for (const item of array) {
            if (item) {
                newArr.push(item)
            } else {
                count0++
            }
        }
        for (let i = 0; i < count0; i++) {
            newArr.push(0);
        }
        return newArr
    }
    console.log('функцію яка буде переносити елементи з значенням 0 у кінець маисву');
    console.log(arrZero);
    console.log(zeroUpArr(arrZero));
}


// результатом є змінений початковий масив
{
    const arrZero = [1, 0, 6, 0, 3];
    const zeroUpArr = array => {
        const newArr = [];
        let count0 = 0;
        for (const item of array) {
            if (item) {
                newArr.push(item)
            } else {
                count0++
            }
        }
        for (let i = 0; i < count0; i++) {
            newArr.push(0);
        }
        for (let i = 0; i < array.length; i++) {
            array[i] = newArr[i];
        }
    }
    console.log('функцію яка буде переносити елементи з значенням 0 у кінець маисву');
    console.log(arrZero);
    zeroUpArr(arrZero);
    console.log(arrZero);

}

//
// const foo=(...arg)=>{
//     if (arg.length===1){
//         console.log(arg[0]);
//     } else{
//         console.log(arg[0]+arg[1]);
//     }
// }
// foo(1,2);

const argumentsSum=function () {
    let sum = 0;
    for (const argument of arguments) {
        sum += argument;
    }
    return sum;
}

console.log(argumentsSum(2, 3, 4, 5, 6, 7, 8));

// const foo=()=>{
//     console.log(arguments);
// }
// foo(1,2);


