// var allitems = document.querySelectorAll('.list li ');
// var content = document.getElementById('content');
// var btn = document.getElementById('addtocart')
// var totalprice = 0 ;
// var prix = document.getElementById('prix')

// allitems.forEach(function(item){
//     item.onclick = function(){
//         totalprice += parseInt(item.getAttribute("price"));
//         content.innerHTML += item.textContent + ' ';
        
//         if(content.innerHTML != ""){
//             btn.style.display = "block";
//     }
// }
// });

// btn.onclick = function (){
// prix.innerHTML = totalprice
    
    
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------------

// string method
// var str = "  nabil js  "
// string method sur MDN
// var res = str.split("=") // entre () on met avec koi on veut separer le string et entre [] quel mot on veut afficher et le transforme en array
// console.log(res [1]);
// var slc = str.slice(0,2)// on veut koi entre deux index : debut fin
// console.log(slc);
// var tri = str.trim()/// enlever les espaces avant et apres le string
// var ind = str.indexOf() cherche une mot dans le string avec son index

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //Array methods
// var arr = ["nabil","chams","khalil"]
// var jn = arr.join("")//transformer le arr to string
// console.log(jn);
// var pop = arr.pop() // enlever le dernier element du arr
// console.log(pop,arr);
// var push =arr.push("hatem") // ajouter un element et affiche que le nombre des element length
// console.log(push);
// var shift = arr.shift()// enlever le premier element du arr
// var unshift = arr.unshift("najet")// ajouter un element au debut du arr et affiche toujours longueur du arr
// console.log(arr , unshift);
// var c = ["loulu","hsan"]
// var concat = arr.concat(c)
// console.log(concat)/// ajouter un deuxieme tableau dans le 1er pour avoir un seul arr

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//maths method
// var x = 2.5
// x= Math.round(x) // arrondi
// Math.pow()// puissance
//Math.sqrt// racine carré
//console.log(Math.ceil(2.5))// le nombre le plus proche 
//console.log(Math.floor(2.5))// le sens inverse de ceil
//console.log(Math.random())// nombre au hasard
// console.log(Math.max(6,8)); // le plus grand nombre

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//JSON
// JSON : JS object notation
//Data type a stocké dans json
//str
//number
//array
//object
//null
//booleen

// JSON values cannot be one of the following types : a ne pas stocké
// function
// date
//undefined
// var obj = [
//     {
//         "name" : "ahmed",
//         "age" : 20,
//         "tel": 543321
//     },
//     {
//         "name" : "ali",
//         "age": 21,
//         "tel": 54321    
//     }
    
//     ]
//     console.log(obj);
//     var str = JSON.stringify(obj) // convertir object to string
//     document.getElementById('prix').innerHTML = str
//     var ob = JSON.parse(str)// convertir string to object
//-----------------------------------------------------------------------------------------------------------------------------
//AJAX = Asynchronous JavaScript And XML