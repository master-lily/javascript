
function printMathMax2() {
    var array = [3, 5, 7, 2, 4, 0, 6, 6, 8, 8,0,8]
    var max = array[0];

    for (var i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            }
    }

    var count = 0;
    for(var i=0;i<array.length;i++){
        if(array[i] == max) count++
    }

    console.log(count);
}

function printMathMax() {
    var array = [-10,-20,-3,-3,-3,-3]
    var max = array[0];
    var count = 0;
    var previousMax = Number.MIN_VALUE
    console.log(Number.MIN_VALUE)
    for (var i = 0; i < array.length; i++) {
        if (array[i] >= max) {
            previousMax = max;
            max = array[i];

            if(array[i] === previousMax){
                count++;
            }
        }
    }

    console.log(count);
}

printMathMax()
