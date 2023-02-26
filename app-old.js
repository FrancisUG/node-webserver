const http = require('http')

//req lo q solicitan dl url, headers d la peticion, 'res' lo q mi servidor le va responder al cliente
http.createServer((req, res)=>{
res.write('Hello Night');
res.end();
})

//We create our appltn from 8080 port
.listen(8080);
console.log('Listening', 8080);