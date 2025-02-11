const fs = require('fs');

function clock(){   
    setInterval(()=>{
        const date = new Date();
        const time = date.toTimeString();
        console.log(`Time : ${time}`);
    }, 1000)
}

clock();