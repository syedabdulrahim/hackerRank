// link:https://www.hackerrank.com/challenges/staircase/problem


function staircase(n) {

let s=0;
let j=0;
let k=0;
    for(let i=0;i<n;i++){
        // console.log('#');
        
        s=n-(i+1);
        
        for( j=0;j<s;j++){
            process.stdout.write(" ");
        }
        
        k=n-s;
        
        for( j=0;j<k;j++){
            process.stdout.write("#");
        }
        
       
        console.log('')
        
        
        
        // for( j=0;j<n;j++){
        //     process.stdout.write("#");
        // }
       
        
        
    }

}