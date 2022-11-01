// task1
let title=document.querySelector('h1');

let s1='hello';
title.innerText=s1;

// // console.log(s1);
// // alert(s1);
// // document.writeln(s1);
//
let s2='owu';
let s3='com';
let s4='ua';
let h2=document.createElement('h2');
h2.innerText=`${s2}.${s3}.${s4}`
document.body.append(h2);

// document.write(`${s2}.${s3}.${s4}`);
// console.log(s2+"."+s3+"."+s4);

let num1=1;
let num2=10;
let num3=-999;
let num4=123;
let ul=document.createElement('ul');
document.body.append(ul);
let li=document.createElement('li');
li.innerText=num1;
ul.append(li);
 li=document.createElement('li');
li.innerText=num2;
ul.append(li);
 li=document.createElement('li');
li.innerText=num3;
ul.append(li);
 li=document.createElement('li');
li.innerText=num4;
ul.append(li);

// document.write(num1, num2, num3, num4);
// console.log(num1, num2, num3, num4);
//
// const PI=3.14;
// const E=2.7;
// document.write(PI, E);
// console.log(PI, E);
//
// let num7=16;
// document.write(num7);
// console.log(num7);
// alert(num7);
//
// let bool1=true;
// let bool2=false;
// document.write(bool1, bool2);
// console.log(bool1, bool2);
// alert(bool1);
// // Чому document.write виконується після останнього alert()?
//
// // task2

let firstName='Dmytro';
let middleName='Oleksandrovych';
let lastName='Ihnatchuk'
console.log(firstName+' '+middleName+' '+lastName);

let person=document.createElement('h2');
person.innerText=firstName+' '+middleName+' '+lastName;
document.body.append(person);

// // task3
// let a = 100;
// let b = '100';
// let c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
//
// //additional
let firstName2=prompt("Input your first name:");
let middleName2=prompt("Input your middle name:");
let age=prompt("Input your age:");
// console.log(firstName2, middleName2, age, age>18);
let personInput=document.createElement('h2');
personInput.innerText=`${firstName2} ${middleName2}, ${age}, ${age>18}` ;
document.body.append(personInput);







