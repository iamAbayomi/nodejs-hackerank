function staircase(num){
    let temp =[]
    for(let k=0; k< num; k++){
        temp[k] = new Array(num)
    }
    for(let i=0; i<num; i++){
        for(let j=0; j<num; j++){
            if(j< Math.abs(num-1)-i){
                temp[i][j] = " "
            }else{
                temp[i][j]= "#"
            }
            process.stdout.write(temp[i][j])
        }
        process.stdout.write("\n")
    }
}

export { staircase}