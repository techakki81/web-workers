import {useState} from 'react'
import './App.css'


function App() {

const [sum, setSum] = useState(0)
const [text, setBtnText] = useState("Start Counting")


const receiveMessageFromWorker = (event) =>{

  let data = event.data;
  console.log(data)
  setSum(data.sum)
  setBtnText("Count Again...")  
}

const receiveErrorFromWorker = (err) =>{   
  console.log(err)
}

const startCounting = () =>{
  
   setBtnText("Counting...")

   let myData= {startCount:1}

   // you cant directly refer to file via import. its a separate thing communicating only via 
   // messagges
   let worker =  new Worker('./countWorker.js')
   
   worker.onmessage = receiveMessageFromWorker
   worker.onerror = receiveErrorFromWorker

   // postMessage send data to the worker
   worker.postMessage(myData); 
  
   
}

  return (
    <div className="App">     

       <div className="sum"> SUM : {sum} </div> 

      
      <div>
          <input type= "text" placeholder="type to see frozen or not..."></input>
      </div>


      <button onClick={startCounting}> {text} </button>

      
    </div>
  );
}

export default App;
