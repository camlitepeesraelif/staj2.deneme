
const http = require ('http');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('hello world\n');
}).listen(9090,()=>{
    console.log('server running at http://localhost:9090/');
});