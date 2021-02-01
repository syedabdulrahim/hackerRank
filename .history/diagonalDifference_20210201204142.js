//  Question Link :https://www.hackerrank.com/challenges/diagonal-difference/problem




function diagonalDifference(arr) {
    // Write your code here
    let j=0;

    
   const len=inputString[0];
    let k=inputString[0]-1;
   
   let sumA=0;
   let sumB=0;
   let testArr=[];
   
   for(let i=0;i<arr.length;i++){
       sumA=sumA+arr[i][i];
       sumB=sumB+arr[j][k];
       testArr.push(arr[j][k]);
       ++j;
       --k;
       
   }
   
//    for(let j=0;j<arr.length;j++){
       
//        sumB=sumB+arr[k][];
//        testArr.push(arr[i][i]);
//    }
   
   
   return Math.abs(sumA-sumB);
}