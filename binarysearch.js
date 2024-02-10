function binarysearch(arr,target){
    let start=0;
    let end=arr.length-1;
    while(start<=end){
        let mid=Math.floor((start+end)/2);
        if(arr[mid]===target){
            return mid;
        }
        if(arr[mid]>target){
           end=mid-1;

        }
        else{
            start=mid+1;
        }
    }

   return -1;

}

const arr = [2,6,8,32,45];
console.log(binarysearch(arr,34));

