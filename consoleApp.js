// to run this app use this command: node consoleApp.js
function mathMax(){
    var array =[3,5,7,2,4,0,6,6,8]
    var  m = array[0];
    for (var i = 0; i<array.length; i++){
        if(array[i]>m){
            m = array[i];
        }
    }
    console.log(m);
}

mathMax()
