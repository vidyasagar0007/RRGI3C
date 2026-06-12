// function getData(dataId ,getNextData) {
//     setTimeout(()=>{
//         console.log("DataId :" + dataId)
//         if(getNextData){
//             getNextData()
//         }

//     },5000);
    
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 getData(5)
//             })
//         })

//     })
// })

let promise = new Promise((resolve,reject)=>{)