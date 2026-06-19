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

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is :" + dataId);
                reject("It is not fulfilled");
        }, 30000);
    });
}
// getData(1).then(()=>getData(2)).then(()=>getData(3)).then(()=>getData(4)).catch((error)=>{
//     console.log("Error is : " + error)
// })

async function fetchData() {
    await getData(1);
    await getData(2);
    await getData(3);
}
fetchData()