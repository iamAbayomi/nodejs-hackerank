import http from "http"
import { bubbleSort } from "./alogrithms/bublesort.js";
import {staircase} from "./alogrithms/staircase.js"
//import {minmax} from "./alogrithms/index.js"
import {minmax} from "./alogrithms/minmax.js"
import { birthdayCakeCandles } from "./alogrithms/birthdaycake.js";

http.createServer(function(request, response){
    // Send the HTTP header
    // HTTP Status 200: OK
    // Content Type: text/plain
    response.writeHead(200,{'Content_type': 'text/plain'})

    // Send the response body as "Hello World"
    response.end("Hello World\n");
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

//staircase(4)

// let unsortedArray= [1,3,5,7,5,31,2,4,56,51,51,3,4,5,6,7,3]
// console.log(unsortedArray)

// Sort the array using bubble sort.
// let x = bubbleSort(unsortedArray)
// console.log("Sorted Array ", unsortedArray)

// Find the mininum and maximum sum of an array
// minmax([1,2,3,4,5])

// Find the total count of maximum values.
let countMaximum = birthdayCakeCandles([3,2,1,34,34,56,2001,1,13,4,42])
console.log(countMaximum)