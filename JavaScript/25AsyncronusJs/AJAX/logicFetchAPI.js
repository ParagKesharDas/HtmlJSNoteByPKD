//fetch API
const url="https://jsonplaceholder.typicode.com/posts"


const FetchPromise =fetch(url)//fetch returns Promise 

FetchPromise.then(reponse=>{
    console.log(reponse)
    if(reponse.ok){
        //response.ok will be false if url is wrong
        const data=reponse.json()//reponse.json() also returns Promise ..if we return it and after that we use then we get data 
        console.log({"data":data})
        return data;
    }
    else{
        throw new Error("Something is wrong")
    }
    
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log("inside catch")
    console.log(error)
})

//Async wait ....just to avode .then .then
const url1="https://jsonplaceholder.typicode.com/postss"//edited wrong

async function getPosts(){
    // this async funtion always return Promise
    if(reponse.ok){
    const response= await fetch(url1);//await will wait until url resolved
    const data=await response.json();
    return data
    }
    else{
        console.log("not ok")
    }
}


//arrow function
const getPosts1=async()=>{
    if(reponse.ok){
        const response= await fetch(url1);//await will wait until url resolved
        const data=await response.json();
        return data
        }
        else{
            console.log("not ok")
        }
}


getPosts1()
.then(mydata=>{
    console.log(mydata)
})
.catch(error=>{
    console.log("inside catch")
    console.log(error)
})






