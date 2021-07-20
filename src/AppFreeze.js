import {useState} from 'react'
import './App.css'

function AppFreeze() {
const [sum, setSum] = useState(0)

const startCounting = () =>{
  let sum = 0;
  for(let i=0;i<1000000;i++)     {   
    sum += i
    console.log(i)
  }

  setSum(sum)  
}

  return (
    <div className="App">     

      <div className="sum"> SUM : {sum} </div>       
      <div>
          <input type= "text" placeholder="type to see frozen or not..."></input>
      </div>
      <button onClick={startCounting}> Start Counting</button>      

    </div>
  );
}

export default AppFreeze;
