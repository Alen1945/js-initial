const getData=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('hello')
    },4000)
})

// getData.then(function(val){
//     console.log(val)
//     console.log('world')
// })

async function output(){
    const result=await getData
    console.log(result)
}

output()