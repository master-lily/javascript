/**
 * Created by Lily on 12.03.2015.
 */
function hi(){
    alert('Hi')
}

var arr=[3,4,3]

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
    var sum = 0
    for(var i=0; i<numbers.length;i++){
        sum += numbers[i]
    }
    console.log("summ of elements : "+sum)
}

function zeroCounterDisplay(){
    //alert(zeroCounter())
    console.log("number of zeros : "+zeroCounter())
}

//1.1. Даны три целых числа. Придумайте алгоритм, определяющий, есть ли среди чисел одинаковые или нет. - Правильно
var equalNumbers = [5,6,6]
function printEqualElements () {
    if (equalNumbers[0] === equalNumbers[1] || equalNumbers[0] === equalNumbers[2] || equalNumbers[1] === equalNumbers[2]){
        console.log("Equal");
    }
    else
    {

        console.log("No equal");
    }
}



function zeroCounter(){
    var count = 0;
    for(var i=0; i<numbers.length;i++){
        if(numbers[i] == 0) {
            count++
        }
    }
    return count;
}

function zeroCounterDisplay() {
    //alert(zeroCounter())
    console.log("number of zeros : " + zeroCounter())
}

//1.2 Даны три целых числа. Придумайте алгоритм, который находит второе по величине число, если оно существует.
//Правильно. - Достаточно одного цикла и if, else if.

function secondMaxNumber () {
    var array = [6,3,9];
    var max = array[0];
    var secondMax=array[1];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }

                else if (secondMax<max) {
                    secondMax=array[i];
                }

            }
    console.log(secondMax)
    }


//1.3. Даны три целых числа. Придумайте алгоритм, определяющий количество максимальных чисел среди введенных. - Правильно.
//Делаем count в цикле, сразу после вычисления нахождения числа!!! или правильнее его делать за пределами цикла???



function printMathMax(){
    var array =[3,5,7,2,4,0,6,6,8,8]
    var  max = array[0];
    var count = 0;
    for (var i = 0; i<arraym.length; i++) {
        if (array[i] > max) {
            max = array[i];
    }
    console.log(count);

}

//1.4. Напишите программу, печатающее на экран красивое поздравление с новым учебным годом. - Правильно
function congratulation(){
    console.log("Congratulations with beginning of new studying year!")
}

//1.5. Даны три целых числа. Напишите программу, печатающую Yes в том случае, если среди чисел есть одинаковые, иначе - No. - Правильно

var equalNumbers = [4, 2, 2]
function printEqual () {
    if (equalNumbers[0] === equalNumbers[1] || equalNumbers[0] === equalNumbers[2] || equalNumbers[1] === equalNumbers[2]){
        console.log("Yes");
    }
    else {

        console.log("No");
    }
}

//1.6. Напишите программу, печатающую количество цифр в десятичной записи заданного натурального числа.
// Правильно

var naturalNumber = "54569803";
function countNaturalDec (){
    var count =0;
    for (var i=0; i<naturalNumber.length; i++) {
        count++;
    }
    console.log(count)
}

//1.7. Напишите программу, печатающую количество нулевых элементов в заданном целочисленном массиве. Правильно
var zeroElements = [2,0,5,6,2,0,7,8,5,0];
function numberNullElements(){
    var count=0;
    for (var i=0; i<zeroElements.length; i++) {
        if (zeroElements[i]===0)
            count++;
    }
    console.log("Number of null elements is "+count)
}


//1.8. Напишите программу, которая заменяет все элементы массива, кроме крайних, на полусуммы соседей, и печатает результат.
//Правильно. - Можно реализовать несколькими путями: через новый массив, и в том же массиве, введя две локальных переменных в цикле
var elements = [4,4,12,4];

function changeSum_two_arrays () {
    var result = new Array();
    result[0] = elements[0];
    result[elements.length-1] = elements[elements.length-1]

    for (var i = 1; i < elements.length-1; i++) {
        result[i] = (elements[i - 1] + elements[i + 1]) / 2;

    }
    for(var i=0;i<result.length;i++) {
        console.log(result[i])
    }
}

function changeSum () {
    for (var i = 1; i < elements.length-1; i++) {
        var prev = elements[i - 1];
        var next = elements[i + 1]
        elements[i] = (prev + next) / 2;
    }
    for(var i=0;i<elements.length;i++) {
        console.log(elements[i])
    }
}

//1.9. Напишите программу, перемножающую два натуральных числа, и которая не использует операции умножения. - Правильно
function multipleWithoutMultiple(x,y) {
    var result = 0;
    for(var i=0;i<y;i++){
        result+= x
    }
    console.log(result)
}

//1.10. Дано целое число a и натуральное n. Напишите программу, вычисляющую и печатающую  а в n-ой степени
//Правильно. Делаеется аналогично, как и с умножением через сложение, только в результате знак "+" заменяем на знак"*"
// и результирующей переменной присваиваем значение "1" вместо значения "0"


function rateMultiple () {
    var a = 4;
    var n = 7;
    var z=1;
    for (var i=0; i< n; i++) {
        z *= a;
    }
    console.log(z)
}


//1.11. Напишите программу, печатающую максимальный элемент заданного массива. - Правильно
var array =[3,5,7,2,4,0,6,6,8]
function mathMax(){
    var  max = array[0];
    for (var i = 0; i<array.length; i++){
        if(array[i]>max){
            max = array[i];

        }

    }
    console.log(max);
}


//1.12. Задан массив целых чисел. Напишите программу, печатающую номер первого элемента, равного нулю,
// и нуль при отсутствии такого элемента. - Правильно

var numberArray = [5,4,4,1,1,5,47,3,4,5,5,7]
function firstNumber () {
    if (numberArray[0] === 0) {
        console.log(numberArray[0])
    }
    else {
        console.log(0)

    }
}

//1.13. Задан массив целых чисел. Напишите программу, печатающую второй по величине ее элемент,
// и No, если такого элемента нет. - Неправильно. - Как реализовать ответ "нет"???
function secondMathMax() {
    var array = [5, 7, 11, 10];
    var maxNumber = array[0];
    var secondMaxNumber = array[1];
    for (var i = 0; i < array.length; i++) {
var addNumber =array[i];
        if (addNumber > maxNumber){
         maxNumber=secondMaxNumber;
           maxNumber=addNumber;
       }
        if (addNumber<maxNumber && addNumber>secondMaxNumber){
            secondMaxNumber=addNumber;
            console.log("The second number after max is " +secondMaxNumber);
        }
        else{
            console.log("no")
        }
        }

        }










//1.14. Дана последовательность чисел. Вычислить их сумму.  - Правильно, пишем сразу cоnsol.log, а не return и тогда получаем результат

function sumSequence () {
    var sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var sum = 0;
    for (var i=1; i<sequence.length; i++){
        sum += sequence[i];
    }
    console.log(sum);


}

//1.15. Даны два ненулевых числа. Найти их сумму, разность, произведение и частное - Правильно
function mathOperations() {
    var x = 3;
    var y = 5;

    var s=x+y;
    var r=x-y;
    var p=x*y;
    var d=x/y;
    console.log("Sum " + s);
    console.log("Difference " + r);
    console.log("Product " + p);
    console.log("Quotient " + d);
}

//1.16. Даны два числа. Найти среднее арифметическое их квадратов и среднее арифметическое их модулей. - Правильно
var a = 10;
var b = 6;
function averageArithmeticSquareModule () {
    var avgSquare=((a*a)+(b*b))/2;
    var avgMod=(Math.abs(a)+Math.abs(b)/2);
    console.log("среднее арифметическое " + avgSquare);
    console.log("среднее арифметическое модулей " + avgMod);
}



//1.17. Проверить истинность высказывания: "Среди трех данных целых чисел есть хотя бы одна пара совпадающих". -Правильно
var logica ="Среди трех данных целых чисел есть хотя бы одна пара совпадающих";
function truth (){
    if ("Среди трех данных целых чисел есть хотя бы одна пара совпадающих" === "Среди трех данных целых чисел есть хотя бы одна пара совпадающих") {
        console.log(true)
    }
    else {
        console.log(false)

    }
}



//1.18. Даны десять чисел. Вывести их среднее арифметическое. - Правильно

var tenNumbers = [2, 6, 4, 8, 2, 5, 5, 2, 3, 9];

function avArithmetic () {
    var sum = 0;
    for (var i = 0; i<tenNumbers.length; i++){
        sum+= tenNumbers[i]
        var  averageArithmetic = sum/tenNumbers.length;

    }
    console.log("average arithmetic is " + averageArithmetic)

}

//1.19. Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести название соответствующего времени года
// ("зима", "весна" и т.д.). - Правильно
var date;
date = new Date(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
function season () {
    for (var i = 0; i < 12; i++) {
        if (i < 2 || i == 11) {
            console.log("winter");
        }
        if (i>=2 && i < 5) {

            console.log("spring");
        }
        if (i>=5 && i < 8) {
            console.log("summer");
        }
        if (i>=8 && i < 11) {
            console.log("autumn")
        }
    }
}

//1.20. Дан номер месяца (1 — январь, 2 — февраль, ...). Вывести число дней в этом месяце.

//1.21. Дано целое число в диапазоне 0 – 9. Вывести строку — название соответствующей цифры на русском языке
// (0 — "ноль", 1 — "один", 2 — "два", ...). - правильно. Why does it display only "5"???


var integer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function nameFigure () {
    switch (number) {
        case 0:
            console.log(0 + "- ноль");
            break;
        case 1:
            console.log(1 + "- один");
            break;
        case 2:
            console.log(2 + "- два");
            break;
        case 3:
            console.log(3 + "- три");
            break;
        case 4:
            console.log(4 + "- четыре");
            break;
        case 5:
            console.log(5 + "- пять");
            break;
        case 6:
            console.log(6 + "- шесть");
            break;
        case 7:
            console.log(7 + "- семь");
            break;
        case 8:
            console.log(8 + "- восемь");
            break;
        case 9:
            console.log(9 + "- девять");
            break;
        default:
            console.log("I don't know")
    }
}

//1.22. Дано целое число в диапазоне 1 – 5. Вывести строку — словесное описание соответствующей оценки
// (1 — "плохо", 2 — "неудовлетворительно", 3 — "удовлетворительно", 4 — "хорошо", 5 — "отлично"). - Why does it display only "отлично"???


var number = (1, 2, 3, 4, 5);
function numberMark () {
    switch (number) {
        case 1:
            console.log(1 + "- плохо");
            break;
        case 2:
            console.log(2 + "- неудовлетворительно");
            break;
        case 3:
            console.log(3 + "- удовлетворительно");
            break;
        case 4:
            console.log(4 + "- хорошо");
            break;
        case 5:
            console.log(5 + "- отлично");
            break;
        default:
            console.log("no mark");
    }
}
