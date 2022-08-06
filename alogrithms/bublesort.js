export function bubbleSort(a){
    let temp = 0
    for(let i=0; i<a.length; i++){
        for(let j=0; j<a.length; j++){
            if(a[j]> a[j+1]){
                temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
            }
        }
    }
    return a
}