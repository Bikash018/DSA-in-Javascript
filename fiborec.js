const fibonum = (n) => {


    if(n===0 || n===1){
        return n;
    }
    let a = fibonum(n-1);
    let b=fibonum(n-2);

    let ans= a+b;
    return ans;

}

console.log(fibonum(6));