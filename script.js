document.getElementById("btn").onclick = function () {
  document.getElementById("res").innerHTML = "hello js";
};

// statment : c'est ligne de code
// les commentaires: vous aide de lire le code et il sert a koi 
//les variables : 

var x = 3;
//functions
function returndata (){
    var x =3;
    return x;

}

var data = returndata();
console.log(data)

//expressions function il faut nommé la function avannt les ()

var fn = function nabil(){
    console.log("nabil")
}

fn();
// immediadtly invok function expression IIFE
(function code (){
    console.log("code")
})();
//events witj mouse
//var x = 1;
//document.getElementById('btn').onmouseleave = function(){
    document.getElementById('demo').innerHTML = x++;

var btn = document.getElementById('btn')
var data = document.getElementById('demo')

function action(){
    data.innerHTML=("nabil")
}
btn.onclick = action ;
    // keyboard events keypress , keydown , keyup

   // var inputdom = document.getElementById('input')
  
 

/// window load


// best practice for events
var inputdom = document.getElementById('input');



function keyboard(){
    console.log('test');
}

inputdom.addEventListener('keyup' , keyboard);

//Loop
//for(x=0 ;x <= 5 ; x++ ){
// arthematic operator 
console.log(+3);
console.log(-3);
console.log(+"3");
console.log(+true);
console.log(+false);

//assignment operator

var x = 2
x += 1 // x = x + 1 // x++
x -= 1 // x = x - 1
x **= 5 // x = x** 5

// if condition
// && = tous les conditions soient "Oui" ou correct // || = or : il faut au une condition est correcte
// ! = NOT  result booleen false ou true 
var s = 5
if (s == 5){
    console.log("yes");

}else {
    console.log("NO");
}


var  a = 4
var b = 2
var c = 2

if (( a !=b)||(b!=c)){
    console.log("yes")
}else {console.log("non");}

//switch
var k = 6
switch (k) {
    case 6:
        console.log("yes");
        
        break;
    case 6:
        console.log("yes");
        
        break;
    case 7:
        console.log("yes");
        
        break;

    
    default:
        console.log();
}

var i = 5
while (i <= 5){
    console.log(i);
    i++;
}

var e = 5
do {
    console.log(e)
    e++;
}while ( e<5)

/// bad loop : for