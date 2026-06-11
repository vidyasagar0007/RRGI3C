const Furit ={
    name:"apple",
    price:20,
    colour:"red",
    shape:"round",
}

// our output
console.log(Furit)
console.log(Furit.price)
console.log(Furit["colour"])

// Update value 
Furit.colour="blue"

//delete value
delete Furit.shape

// agian result 
console.log(Furit)