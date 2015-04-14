/**
 * Created by Lily on 12.03.2015.
 */
function hi(){
    alert('Hi')
}

var arr=[3,4,3];

function equalityTest(){
    if(arr[0] == arr[1]) return true;
    if(arr[1] == arr[2]) return true;
    if(arr[2] == arr[0]) return true;
    return false
}

function sayIfEqualExists(){
    if(equalityTest(arr)) {
        alert('No duplicates detected')
    }else{
        alert('Some duplicates detected')
    }
}

var numbers = [1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1,0];
numbers[0] = 10;

function zeroCounter(){
    var count = 0;
    for(var i=0; i<numbers.length;i++){
        if(numbers[i] == 0) {
            count++
        }
    }
    return count;
}

function zeroCounterDisplay(){
    //alert(zeroCounter())
    console.log("number of zeros : "+zeroCounter())
}
//-----------------------

function summ(){
    var sum = 0;
    for(var i=0; i<numbers.length;i++){
        sum += numbers[i]
    }
    console.log("summ of elements : "+sum)
}

function zeroCounterDisplay(){
    //alert(zeroCounter())
    console.log("number of zeros : "+zeroCounter())
}

//1.1. Даны три целых числа. Придумайте алгоритм, определяющий, есть ли среди чисел одинаковые или нет.
var equalnumbers = [5,6,6];
function printEqualElements () {
    if (equalnumbers[0] === equalnumbers[1] || equalnumbers[0] === equalnumbers[2] || equalnumbers[1] === equalnumbers[2]){
        console.log("Equal"+printEqualElements);
    }
    else
    {
        console.log("No equal");
    }
}


//1.2 Даны три целых числа. Придумайте алгоритм, который находит второе по величине число, если оно существует. - False
secondMaxarray = [6, 4, 5];
function secondMax(){
    Math.max.apply(Math, secondMaxarray);

    console.log("Second max number is" +secondMaxarray)
}

//1.3. Даны три целых числа. Придумайте алгоритм, определяющий количество максимальных чисел среди введенных.

//1.4. Напишите программу, печатающее на экран красивое поздравление с новым учебным годом. - True
function congratulation () {
    console.log("I congratulate you with beginning of new studying year!")

}
//1.5. Даны три целых числа. Напишите программу, печатающую Yes в том случае, если среди чисел есть одинаковые, иначе - No.

var numbers = [4, 2, 2];
function printEqual () {
    if (equalnumbers[0] === equalnumbers[1] || equalnumbers[0] === equalnumbers[2] || equalnumbers[1] === equalnumbers[2]) {
        console.log("Yes");
    }

else {
    console.log("No");
}
}

//1.6. Напишите программу, печатающую количество цифр в десятичной записи заданного натурального числа.

var naturalNumber = 5.22446578343;

//1.7. Напишите программу, печатающую количество нулевых элементов в заданном целочисленном массиве.
var nullElements = [2,0,5,6,2,0,7,8,5,0];
count=0;
function numberNullElements(){
    for (i=0; i<nullElements.length;i++) {
        count++;
    }
        console.log("Number of null elements is"+count)
}



//1.8. Напишите программу, которая заменяет все элементы массива, кроме крайних, на полусуммы соседей, и печатает результат.

var elements = [2,3,5,8,5,6,2,3,7,6,4,3,4,8];
function changeSum () {
    for (var i= 3; i<elements.length--;i++){
        var n = (i-1)+(i+1);
        console.log(n[i]);
    }
}


//1.9. Напишите программу, перемножающую два натуральных числа, и которая не использует операции умножения.
var x = 5;
var y = 5;
function umnojbezumnoj (){
    return x+y+x+y+x;
    console.log()
}
//1.10. Дано целое число a и натуральное n. Напишите программу, вычисляющую и печатающую степень а в n-ой степени
// без испопользования вызова функции возведения в степень.

function stepenUmnoj () {
    var stepen =z;
    return z=a*n*n;
    console.log(z);

//1.11. Напишите программу, печатающую максимальный элемент заданного массива.
    Math.max(3,5,7,2,4,0,6,6,8);
    console.log(Math.max)
}
//1.12. Задан массив целых чисел. Напишите программу, печатающую номер первого элемента, равного нулю,
// и нуль при отсутствии такого элемента.

var numberArray = [5,4,4,1,1,5,47,3,4,5,5,7];
function firstNumber () {
    if (i[0] !== 0) {
        console.log(0);
    } else console.log(i[0]);
}

//1.13. Задан массив целых чисел. Напишите программу, печатающую второй по величине ее элемент,
// и No, если такого элемента нет.


//1.14. Дана последовательность чисел. Вычислить их сумму.

var posledovatelnost = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function sumPosledovatelnost () {
    for (var i= 0; i<posledovatelnost.length; i++){
        var sum = 0;
    }
        return sum += sum(i);
}
//1.15. Даны два ненулевых числа. Найти их сумму, разность, произведение и частное
var x = 3;
var y = 5;
var z;
function mathOperations() {
    return z=x+y; a=x-y;z=x*y;z=x/y;
}

//1.16. Даны два числа. Найти среднее арифметическое их квадратов и среднее арифметическое их модулей.
var x = 4;
var y = 6;
var k;
function averageArifmKvadratModul () {
    return k=(x*x+y*y)/2;
    return k=(Math.abs(x)+Math.abs(y)/2);
}



//1.17. Проверить истинность высказывания: "Среди трех данных целых чисел есть хотя бы одна пара совпадающих".
var logica = "Среди трех данных целых чисел есть хотя бы одна пара совпадающих";
function istinnost (){
    if ("Среди трех данных целых чисел есть хотя бы одна пара совпадающих" === true) {
        console.log("true")
    }
    else {
        console.log("false")

    }
}

//1.18. Даны десять чисел. Вывести их среднее арифметическое.
var tenNumbers;
tenNumbers = [2, 6, 4, 8, 2, 5, 5, 2, 3, 9];
var averageArifm;
function sredneeArifm () {

    for (var i = 0; i<tenNumbersnumbers.length; i++){
        var sum;
        return  averageArifm = sum(i) / 10;
    }
        console.log("average arithmetic is" +averageArifm)

}
//1.19. Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название соответствующего времени года
// ("зима", "весна" и т.д.).
var date;
date = new Date(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
for (var i=0; i<11; i=+2){
   while(i<2 && i==11)
    console.log("winter");
    while(i<5)
    console.log("spring");
    while(i<8)
    console.log("summer");
    while(i<11)
    console.log("autumn")
}


//1.20. Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести число дней в этом месяце.
var date;
date = new Date(0,1,2,3,4,5,6,7,8,9,10,11);
var count;
for  (var i=0; i<date.length; i++){
    Count++;
    console.log(count(i))
}



//1.21. Дано целое число в диапазоне 0 – 9. Вывести строку — название соответствующей цифры на русском языке
// (0 — "ноль", 1 — "один", 2 — "два", ...).
var number;
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
switch(number) {
    case 0:
    console.log(0 + "- ноль");
    case 1:
    console.log(1 + "- один");
    case 2:
    console.log(2 + "- два");
    case 3:
    console.log(3 + "- три");
    case 4:
    console.log(4 + "- четыре");
    case 5:
    console.log(5 + "- пять");
    case 6:
    console.log(6 + "- шесть");
    case 7:
    console.log(7 + "- семь");
    case 8:
    console.log(8 + "- восемь");
    case 9:
    console.log(9 + "- девять");
        break;
}







//1.22. Дано целое число в диапазоне 1 – 5. Вывести строку — словесное описание соответствующей оценки
// (1 — "плохо", 2 — "неудовлетворительно", 3 — "удовлетворительно", 4 — "хорошо", 5 — "отлично").

var number = prompt ("Enter integer from 1 to 5");
function numberMark () {
    switch (number) {
        case 1:
            console.log(1 + "- плохо");
        case 2:
            console.log(2 + "- неудовлетворительно");
        case 3:
            console.log(3 + "- удовлетворительно");
        case 4:
            console.log(4 + "- хорошо");
        case 5:
            console.log(5 + "- отлично");
            break;
        default:
            console.log("no mark");
    }
}