const httpClient=require('axios')

let url="http://jsonplaceholder.typicode.com/todos/1"
httpClient.get(url).then(response=>{
    console.log(response.data)
})