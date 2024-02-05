const fibarr = [0,1];

function fibo(n){
    
    for(let i=2;i<n;i++){
        let n ;
        n=fibarr[i-2]+fibarr[i-1];
        fibarr.push(n);
    }
    return fibarr;
}

console.log(fibo(9));