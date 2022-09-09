function number(arr){
     if (arr.length==0){
            return "empty array"
        }
    for (let i=1;i<=arr.length;i++){
       
        if (arr[i-1]!==i){
            return i;
            
        }
       
       
            
        }
        
        
    }
const arr=[1,2,3,4,6,7]; 
console.log(number(arr));
