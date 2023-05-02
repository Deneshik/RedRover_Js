/* Задача 2: Написать программу, которая определяет тип телосложения по BMI:
underweight (below 18.5), healthy weight (18.5 - 24.9), overweight (25.0-29.9), obesity (30.0 and above) */

let firstName = 'Andrey';
let height = 1.70;
let weight = 73;
let BMI = weight / height ** 2;

if (BMI < 18.5) {
    console.log(BMI + ' - underweight');
    console.log(firstName + ' пора налегать на пельмени');
}
else if (BMI >= 18.5 && BMI < 24.9) {
    console.log(BMI + ' - healthy weight');
    console.log(firstName + ' молодец, так держать!');
}
else if (BMI >= 25.0 && BMI < 29.9) {
    console.log(BMI + ' - overweight');
    console.log(firstName + ' полегче с тортиками!');
}
else {
    console.log(BMI + ' - obesity');
    console.log(firstName + ' ты готовишься на конкурс толстяков?!');
}

// добавляю комментарий для эксперимента

// еще один комментарий добавил