// // Find FPB
// 
// function fpb(num1,num2){
//   let highest = 0;
//   if(num1 > num2){
//     highest = num1;
//   }else{
//     highest = num2;
//   }
//   for(let i=highest; i>0; i--){
//     if(num1%i === 0 && num2%i === 0){
//       return i;
//     }
//   }
// }
// 
// console.log(fpb(30,50));
// console.log(fpb(12,15));
// console.log(fpb(17,35));

// // SOAL 2
//
// function checkPrime(num){
//
//     let getCount=0;
//     let array=[];
//     let prime=[];
//     for(let i=0; i<=num; i++){
//         if(num%i === 0){
//             getCount++;
//         }
//     }
//     if(getCount === 2){
//         return true;
//     }else{
//         return false;
//     }
//
//     console.log(array);
// }
//
//
//
// function print(n){
//     var count=0;
//     var prime=[];
//     var number = 1;
//     while(count < n){
//         if(checkPrime(number) == true){
//             prime.push(number);
//             number++;
//             count++;
//         }else{
//             number++;
//         }
//     }if(n === 0){
//         prime.push(1);
//     }console.log(prime);
// }
//
// print(3);
// print(5);
// print(0);
//
// // SOAL 3
//
// function mean(array){
//     var temp=0;
//     for(let i=0; i<array.length; i++){
//       temp += array[i];
//     }
//     temp /= array.length;
//     return temp.toFixed(2);
//   }
//
//   console.log(mean([3.7,5.3,7.0,1.9,3.1,0.5,1.5]))
//
// // SOAL 4
//
// function checkXO(string){
//   var tempx=0;
//   var tempo=0;
//   for(let i=0; i<string.length; i++){
//     if(string[i] === "x"){
//       tempx += 1;
//     }else{
//       tempo += 1;
//     }
//   }
//   if(tempx === tempo){
//     return 1;
//   }else{
//     return -1;
//   }
// }
//
// console.log(checkXO('xxxooooo'));
//
// // SOAL 5
//
// function swap(string){
//   var temp="";
//   var alpha='abcdefghijklmnopqrstuvwxyz';
//   var cypher='bcdefghijklmnopqrstuvwxyza';
//   for(let i=0; i<string.length; i++){
//     for(let j=0; j<alpha.length; j++){
//       if(string[i] === alpha[j]){
//         temp += cypher[j];
//       }
//     }
//   }console.log(temp);
// }
//
// swap('javascript');
//
// function test(no){
//   console.log(alpha);
// }
//
// test(5);
