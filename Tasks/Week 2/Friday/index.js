// // SOAL 1

// var score = [3,4,1,2,5,7,4,20];

// function sortScore(){
//     let temp=0;
//     for(let i=0; i<score.length; i++){
//         for(let j=0; j<score.length; j++){
//             if(score[i] < score[j]){
//                 temp=score[j];
//                 score[j] = score[i];
//                 score[i] = temp;
//             }
//         }
//     }console.log(score);
// }

// sortScore();

// // SOAL 2

// var letter = "hastalavista";

// function sortLetter(){
//     let letters = letter.split('');
//     let temp = [];
//     let alp = "abcdefghijklmnopqrstuvwxyz";
//     for(let i=0; i<alp.length; i++){
//         for(let j=0; j<letter.length; j++){
//             if(alp[i] === letter[j]){
//                 temp.push(letter[j])
//             }
//         }
//     }
//     console.log(temp);
// }

// sortLetter();

// // SOAL 3

// var colors = ['red','green','blue'];

// function randomColor(){
//     return colors[Math.floor(Math.random() * colors.length)];
// }

// console.log(randomColor());