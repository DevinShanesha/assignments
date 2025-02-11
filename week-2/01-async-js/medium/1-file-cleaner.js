const fs = require('fs');

function cleaner(path){
    fs.readFile(path, 'utf-8', (err, data)=>{
        if(err) throw err;
        data = data.trim().split(" ").filter((e)=>{
            if(e === ""){
                return false;
            }else{
                return true;
            }
        });
        data = data.join(" ");
        console.log(data);
        fs.writeFile(path, data, (err)=>{
            if(err) throw err;
        })
    })
    
    
}

cleaner("D:\\Cohot 2.0\\assignments\\week-2\\01-async-js\\medium\\ronaldo.txt")