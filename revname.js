let s= "Bikash" 
let sArr = s.split("");
let i=0;
let j= sArr.length-1;

while(i<j){
    let tmp =sArr[i];
    sArr[i]=sArr[j];
    sArr[j] = tmp;
    i++;
    j--;
}

let ans = sArr.join('');

console.log(ans);
