// const product ="4"

// if (product===1) {
//     console.log("Swift "+ ""+ product)
// }
// else if (product===2) {
//     console.log("BMW " + " " + product)
// }
// else if (product===3) {
//     console.log("hero car " + " " + product)
// }
// else if (product===4) {
//     console.log("KN Car " + " " + product)
// }
// else if (product===5) {
//     console.log("cyber Track " + " " + product)
// }
// else if (product==="1") {
//     console.log("apple "  + product)
// }
// else if (product==="2") {
//     console.log("Banana " + product)
// }
// else if (product==="3") {
//     console.log("Orange "+ product)
// }
// else if (product==="4") {
//     console.log("Lichi " + product)
// }
// else if (product==="5") {
//     console.log("Pineapple " + product)
// } else{
//     console.log("Product is not find")
// }

//===============Add the any number ===================

// let sum=0
// for (let i=1; i <= 10; i++) {
//     sum=sum+2
// }
// console.log(sum)

//=============factorial here======================

// let n=5;
// let fact=1;
// for(let i= 1; i<=n;i++){
//     fact*=i;
// }
// console.log(fact)

//=====================Prime no================

// let Isprime =true
// for (let i = 2; i <= 60; i++) {
//   if (i % 2 == 0){
//     Isprime=false
//   } else {
//     console.log("i is the prime no");
//   }
// }


for(let i=2;i<=30;i++){
    let p=1;
    for(let j=2;j<i;j++) if(i%j==0) p=0;
    if(p) console.log(i);
}
