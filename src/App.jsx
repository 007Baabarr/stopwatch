import { useRef, useState } from 'react'
import './App.css'


function App() {
  const [counter, setCounter] = useState(0);
  const[starTime,setStartTime]= useState(null);
  const[currenTime,setCurrentTime]= useState(null);


  const intervalRef = useRef(null);






  // const numberOfTimeClick=useRef(0)

// console.log(numberOfTimeClick) 

// let numberOfTimeClick=0;
// const handleOnClickCount =()=>{
//   if(numberOfTimeClick.current >=8){ 
//     alert("you can more than 40")
//   }else{

//     setCounter(counter + 1)
//     numberOfTimeClick.current=numberOfTimeClick.current+5; 
//     // numberOfTimeClick++;
//   }
// //ter console.log(numberOfTimeClick.current)

// }

// console.log("COmponet renender")
// console.log(numberOfTimeClick.current)
const startClock =()=>{
  clearInterval(intervalRef.current);
  setStartTime(Date.now());
  intervalRef.current = setInterval(() => {
    setCurrentTime(Date.now());
  }, 10);
};
const endClock = () =>{
   clearInterval(intervalRef.current);
  };

let noOfSecondsPassed = 0;

if(starTime !== null && currenTime !== null){

  noOfSecondsPassed = Number((currenTime-starTime) /1000).toFixed(3)
};



  return (
    
    <div className="container mx-auto p-24 my-10">
<h1 className='mt-2 my-5 bg-red-200  '>stop watch</h1>
      <div className="flex flex-col justify-center items-center">
        
 
<h1 className='mt-2 my-5 bg-red-200  '>{noOfSecondsPassed}</h1>
<div>
  <button onClick={startClock} className='btn bg-blue-400  cursor-pointer  border-t-cyan-400 p-2 px-3 rounded mx-2'>start</button>
  <button onClick={endClock} className='btn bg-gray-200 cursor-pointer   border-t-cyan-400 p-2 px-3 rounded mx-2'>end</button>
</div>
{/* <button className='btn btn-primary bg-purple-100 p-3 rounded-md'

onClick={handleOnClickCount}>update counter-<b>{counter}</b>

</button> */}




      </div>

    </div>
   
  
  )
}

export default App
