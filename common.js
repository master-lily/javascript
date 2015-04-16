function getIntegerValue(message){
    var input = prompt(message);
    console.log("got value : "+input)
    return parseInt(input);
}


function getIntegerArray(message){
    var input = prompt(message);
    var result = input.split(",").map(Number)
    console.log('Array size : '+result.length)
    for(i=0;i<result.length;i++){
        console.log('\telement : '+result[i])
    }
    return result;
}