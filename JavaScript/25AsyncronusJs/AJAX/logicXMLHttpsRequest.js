const xhr= new XMLHttpRequest();
const url="https://jsonplaceholder.typicode.com/posts"

//JSON vs js object
//js obj key dont have "" but json have must ""

// console.log(xhr.readyState);//0
xhr.open("GET",url);
// console.log(xhr.readyState);//1

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState)
//     if(xhr.readyState==4){
//         // console.log(xhr.response)//but response in type string we have to make ot object
//         const response=xhr.response;
//         const obj=JSON.parse(response);
//         console.log(obj,typeof obj)
//     }
// }


///here we donot have to check ready is 4 or not..it will check for us  
// xhr.onload=function(){
//     const response=xhr.response;
//     const obj=JSON.parse(response);
//     console.log(obj,typeof obj) 
//     }
// // console.log(xhr.readyState)
// xhr.send()//with out it onreadystatechange will not work


///error handle


xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        const response=xhr.response;
        const obj=JSON.parse(response);
        console.log(obj,typeof obj)
    }
    else{
        console.log("something went wrong")
    }
     
    }
xhr.onerror=()=>{
    console.log("Network problem")
}    
// console.log(xhr.readyState)
xhr.send()//with out it onreadystatechange will not work


//here we can use callback hell / promise 














