import http from "http"
import {staircase} from "./alogrithms/staircase.js"

http.createServer(function(request, response){
    // Send the HTTP header
    // HTTP Status 200: OK
    // Content Type: text/plain
    response.writeHead(200,{'Content_type': 'text/plain'})

    // Send the response body as "Hello World"
    response.end("Hello World\n");
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

process.stdout.write("Hello");
process.stdout.write("World");
process.stdout.write("!!!");
console.log(" ")

staircase(4)