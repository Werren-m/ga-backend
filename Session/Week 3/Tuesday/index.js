//1
const convertMinute = (time) => {
    // let time = Math.round(seconds);
    let hour = Math.floor(time / 60);
    let minutes = time - (hour * 60)
    // console.log(hour)
    // console.log(minutes)

    if (minutes < 10) {
        return hour + ":0" + minutes;

    }
    else {
        return hour + ":" + minutes;

    }
}

// console.log(convertMinute(100));
// console.log(convertMinute(185));
//2
const sortLetter = (str) => {
    let huruf = 'abcdefghijklmnopqrstuvwxyz';
    let string = '';

    for (let i = 0; i < huruf.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (huruf[i] === str[j]) {
                string += str[j];
            }
        }
    }
    return string
}
// console.log(sortLetter("hello"));
// console.log(sortLetter("javascript"));

//3
let colors = ["red","green","blue"];
const randomColor = (colors) => {
    let randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}
// console.log(randomColor(colors));

//4
// let string = "Lorem ipsum is dummy text";
// const splitWords = (string) => {
//     let temp = [];
//     let word = "";

//     for(let i=0;i<string.length;i++){
//         if(string[i] !== " "){
//             word += string[i];
//             // console.log(word);
//         }
//         else{
//             // console.log(word)
//             temp.push(word);
//             word = "";
//         }
    
//         if(i === string.length - 1){
//             temp.push(word);
//         }
//     }
//     return temp
// }
// console.log(splitWords(string));
// let arrayWords = splitWords(string);
// const maxWordLength = (arrayWords) => {
//     let lengthWord = [];
//     let currentIndex;

//     arrayWords.forEach(el => {
//         lengthWord.push(el.length);
//     })
//     // console.log(lengthWord)
//     let index = 0;
//     for(let i=0; i<lengthWord.length; i++){
//         if(lengthWord[i] > lengthWord[i+1]){
//             currentIndex=i;
//         }
//     }
    
//     console.log(arrayWords[currentIndex])
// }
// let string = "Lorem ipsum is dummy text"
let string = "He is programming javascript language"
const maxWordLength = () => {
    let maxWord = "";
    let nextWord = "";
    string += " "; // to count the last word

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            if (nextWord.length > maxWord.length) {
                maxWord = nextWord;
            }
            i++;
            nextWord = "";
        }
        nextWord += string[i];
    }
    return maxWord;
}

// console.log(maxWordLength());

//5
const vowelsObject = (string) => {
    let temp = {}
    temp.a = countVowel(string,"a")
    temp.i = countVowel(string,"i")
    temp.u = countVowel(string,"u")
    temp.e = countVowel(string,"e")
    temp.o = countVowel(string,"o")
    console.log(temp);
}
const countVowel = (string,char) => {
    let flag = 0;
    for (let i = 0; i < string.length; i++) {
        if(string[i] === char){
            flag++;
        }        
    }
    // string.forEach(el => {
    //     if(el === char){
    //         flag ++;
    //     }
    // })
    return flag;
}
// vowelsObject("rum raisin chocolate ice cream");


let array = ["lorem","ipsum","dummy"];
let join = ''
for(let i=0; i<array.length; i++){
    if(i === array.length - 1){
        join += array[i]
    }else {
        join += `${array[i]},`
    }
}
// console.log(join)