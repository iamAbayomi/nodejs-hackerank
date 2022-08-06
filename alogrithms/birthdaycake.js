function birthdayCakeCandles(array){
    let max =0
    let maxCount = 0
    for(let i=0; i<array.length; i++){
        if(max<array[i]){
            max = array[i]
        }
    }
    for(let i=0; i<array.length; i++){
        if(max == array[i]){
            maxCount++
        }
    }
    return maxCount
}

function birthdayCakeCandles2(arr) {

    const velas = arr.filter(value => Math.max(...arr) === value)
    return velas.length;
}


export {birthdayCakeCandles}