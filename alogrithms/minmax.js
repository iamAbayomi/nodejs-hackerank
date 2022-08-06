export function minmax(array){
    let min =0
    let max =0
    array =array.sort()
    for(let i =0; i<array.length-1; i++){
        min+=array[i] 
    }
    for(let j=1; j< array.length; j++){
        max += array[j]
    }
    console.log(min, "", max)
}


function miniMaxSum(arr) {
    let sortedArray = arr.sort((a, b) => a-b);
    let minimum = sortedArray.slice(0, sortedArray.length -1).reduce((a, b) => a+b);
    let maximum = sortedArray.slice(1).reduce((a, b) => a+b);
    console.log(minimum, maximum)
}