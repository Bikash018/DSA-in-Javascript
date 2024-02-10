function bubbleSort(arr){
    let n= arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                let tmp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]= tmp;
            }
        }
    }
    return arr;
}

const arr = [13, 46, 24, 52, 20, 9];
console.log(bubbleSort(arr));
