// //String

// var sentences = "Saya makan nasi ayam enak"

// var upperSentences = sentences.toUpperCase()
// var lowerSentences = upperSentences.toLowerCase()

// console.log(upperSentences)
// console.log(lowerSentences)

// var lengthSentences = sentences.length

// console.log(lengthSentences)

// var sliceSentences = sentences.slice(0,10)

// console.log(sliceSentences)

// var arrayOfSentences = sentences.split(" ")

// console.log(arrayOfSentences)

// var joinSentences = arrayOfSentences.join(",")

// console.log(joinSentences)

// var text = "bareng mantan."

// var curhat = sentences.concat(" ", text)

// console.log(curhat)

//FUNCTION
//Function Declaration
// function jumlah(a,b){
//     // console.log(a+b)
//     var c = a + b;
//     return c;
// }

// var temp = jumlah(5,10)
// console.log(temp)

// var watches = ["Hublot","Swiss Army","Daniel Wellington"]

// function printWatch(arloji){
//     for(let i=0; i<arloji.length; i++){
//         console.log(`Jam ke - ${i+1} adalah ${arloji[i]}`)
//     }
// }

// printWatch(watches);

//Simulasi faktor
// 8 -> 1, 2, 4, 8
// 10 -> 1 2 5 10
function checkPrime(angka){

    var faktor = 0
    for(let i=1; i<= angka; i++){
        if(angka % i === 0){
            faktor++
        }
    }
    if(faktor === 2){
        return true
    }else {
        return false
    }
    // return faktor === 2 ? true : false
}
 console.log(checkPrime(15))

//Function Expression
// var compute = function(a,b){
//     return a + b;
// }

//Function Arrow 
// var hitung = (a,b) => {
//     return a + b;
// }