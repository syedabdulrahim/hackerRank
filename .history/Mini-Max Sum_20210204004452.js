


function miniMaxSum(arr) {
    
    arr.sort((a,b)=>a-b);
    
    var x=arr.slice(0,4).reduce((acc,nex)=>acc+nex);
    var y=arr.slice(1).reduce((acc,nex)=>acc+nex);
    
    process.stdout.write(x+' '+y);
    
    
    


}
