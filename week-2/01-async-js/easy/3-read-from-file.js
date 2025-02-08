const fs = require('fs');

const result = fs.readFile('D:\\Cohot 2.0\\assignments\\week-2\\01-async-js\\easy\\ronaldo.txt','utf-8',(err, data)=>{
    if(err) throw err;
    console.log(data);
})

function ExpensiveOperation(num){
    const startTime = Date.now();
    let sum = 0;
    for(let i=0; i<num; i++){
        sum += i;
    }
    const endTime = Date.now();
    console.log(endTime-startTime);
    return;
}
ExpensiveOperation(1000000000);