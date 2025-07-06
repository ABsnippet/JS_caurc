const promise1  = new Promise(function(resolve,reject){
    //do an async task

    setTimeout(function(){
        console.log("Async task is complerte");
        resolve();
    },1000)
})

promise1.then(function(){
    console.log("promise1 is consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async2 is consumed");
})


const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Amit",email:"bandeami@10"})
    },1000)
})

promise3.then(function(user){
    console.log(user);
})


const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error  = false;
        if(!error)
        {
            resolve({username : "Amit",PH:"8618172109"})
        }else{
        reject("ERROR SOMTHNG WENT WRONG");
        }
    },1000)
})

promise4.then((user)=>{
console.log(user);
return user.username;
}
).then((username)=>{
    console.log(username);
}).catch(function(err){
    console.log(err);
}).finally(()=>console.log("The promise is  either resolved or rejected"));

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error  = true;
        if(!error)
        {
            resolve({username : "javascript",Pass:"109"})
        }else{
        reject("JS WENT WRONG");
        }
    },1000)
})

async function consumep5(){
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumep5();



// async function getdetails(){
//     try {
//         const response = await fetch('https://api.github.com/users/ABsnippet');
//         // console.log(response);

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
// }


// getdetails();



fetch('https://api.github.com/users/ABsnippet')
.then((resp)=>{
    return resp.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})