const express = require ('express')
const app = express ()

app.get('/', function (req,res){
    res.send('hello world')
})

app.get('/merhaba', function (req,res){
    res.send('sanada merhaba')
})

app.listen(9090 ,()=>{
    console.log ('express app listening on port http://localhost:9090')
})