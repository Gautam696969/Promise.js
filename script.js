//    let PromiseOne = new Promise(function(resolve , reject){
//     console.log("Promise consumed");
//     resolve()
// });

//      new Promise(function(resolve , reject){
//     setInterval(function(){
//         console.log("Iam second")
//         resolve();
//     },2000)
// })
// .then(function(){
//     console.log("Iam complete")    
// })

// const Promise3 = new Promise((resolve , rej)=>{
//    setTimeout(function(){
//     console.log("iam Last One");
//     resolve()
//    })
// })
// .then(function(){
//     console.log("Iam last 3")
// })



let promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({userName :"palgautam69", Name : "Pal Gautam", Age : "22"});
        } else {
            reject("Error: Something went wgit initrong");
        }
    }, 1000);
});

async function consume() {
    try{
    const response = await promiseOne;
    console.log(response);
} catch(error){
    console.log(error);
}
}

consume();
