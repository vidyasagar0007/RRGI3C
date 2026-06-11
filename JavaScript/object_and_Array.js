// const Furit ={
//     name:"apple",
//     price:20,
//     colour:"red",
//     shape:"round",
// }

// our output
// console.log(Furit)
// console.log(Furit.price)
// console.log(Furit["colour"])

// Update value 
// Furit.colour="blue"

//delete value
// delete Furit.shape

// agian result 
// console.log(Furit)

//=================================================================
//========================= Array here ==============================
//=================================================================

// Array Element here
// const fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits)


//Array number here 
// const num= [10, 20, 30, 40, 50];
// console.log(num)

//push element in array
// num.push(60)
// console.log(num)

//pop element in array
// num.pop()
// console.log(num)

//shift element in array (delete element in starting of array)
// num.shift()
// console.log(num)

//unshift element in array ( add element in starting of array)
// num.unshift(5)
// console.log(num)

//splice element in array
// num.splice(2,100)
// console.log(num)

//slice element in array ( it is range which is want to print in the index range)
// const sliced= num.slice(1,4)
// console.log(sliced)


// Accessing elements by using index
// console.log(fruits[0]);

//================================Array heigher=============================

number=[12,20,30,40,50,60,70,80,90]

// number.forEach(Element=>{
//     console.log(Element)
// })

// number.map(i =>{
//     console.log(i*2)
// })

//=================== filter method ===========================

const even =number.filter(i =>{
    i==2
})
console.log(even)

//================ find method ==========================
// const largeNumValue =number.find(i =>{
//     return i>30
// })
// console.log(largeNumValue)

//======================== reduce method ======================

// const reducemethod =number.redece( i => {
//         reducemethod,0)
// })

