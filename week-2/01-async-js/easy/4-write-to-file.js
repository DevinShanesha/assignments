const fs = require('fs');

const content = "my name is devin.\nI am 23 years old. \nI am pursuing CSE in MBM";
fs.writeFile("D:\\Cohot 2.0\\assignments\\week-2\\01-async-js\\easy\\msd.txt",content, (err)=>{
    if (err) throw err;
})