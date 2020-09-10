// function sortLetter(words){
//     var arr = words.split('');
//     var tmp;
//     arr.sort();
    
//     console.log(arr.join(''));        
// }

// //Test Case
// sortLetter("hello"); //ehllo
// sortLetter("stardust");

// function convertMinute(minute){
//     let amLeft = (minute%60).toString();
//     let minutes = (minute/60).toPrecision(2).toString();
//     let splits = minutes.split('');
//     for(let i=1; i<3; i++){
//         splits[i]='';
//     }
//     if(amLeft < 10){
//         splits.push(":0")
//     }else{
//         splits.push(":");
//     }
    
//     splits.push(amLeft);
//     console.log(splits.join(''));
// }

// convertMinute(100);
// convertMinute(185);

// function countVowels(words){
//     let countA = 0;
//     let countI = 0;
//     let countU = 0;
//     let countE = 0;
//     let countO = 0;
//     let vowel = ["a","i","u","e","o"];
//     let obj={};
// 
//     var temp = words.split('');
//     for(let i=0; i<temp.length; i++){
//         if(temp[i] === vowel[0]){
//             countA++;
//         }else if(temp[i] === vowel[1]){
//             countI++;
//         }else if(temp[i] === vowel[2]){
//             countU++;
//         }else if(temp[i] === vowel[3]){
//             countE++;
//         }else if(temp[i] === vowel[4]){
//             countO++;
//         }
//     }
//     obj.a = countA;
//     obj.i = countI;
//     obj.u = countU;
//     obj.e = countE;
//     obj.o = countO;
//     console.log(obj);
// 
// }
// countVowels("rum raisin chocolate ice cream");

// var colors = ['red','green','blue'];

// function random(arr){
//     var x = Math.floor((Math.random() * arr.length));
//     console.log(arr[x]);
// }
//  random(colors);