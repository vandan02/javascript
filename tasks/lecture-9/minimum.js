let arr=[11,2,3,4,1]
let n=arr[0]
for(let i=0; i<arr.length;i++){
   if( arr[i]<n){
    n=arr[i]
   }
}
console.log(n);