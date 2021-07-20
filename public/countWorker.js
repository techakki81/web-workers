 
  
 let sum = 0 
 
 for(let i=0;i<1000000;i++)        
 {
    console.log(i)
    sum += i
 }
    

  let returnedObj = { message:"success",sum}
  // this guy return the value
  postMessage( returnedObj)  
 