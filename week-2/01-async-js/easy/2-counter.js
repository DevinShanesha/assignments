// counter without setInterval

// let count = 0;
// while(true){
//     console.log(count);
//     count++;
// }

// function counter(){
//     let count = 0;
//     while(true){
//         setTimeout(()=>{
//             console.log(count);
//             count++;
//         }, 1000)
//     }
// }
// counter();

let counter = 0;
function incrementCounter(){
    console.log(counter);
    counter++;    
    setTimeout(incrementCounter, 1000)
}

incrementCounter();