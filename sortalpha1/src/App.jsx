import { useState } from 'react'
import './App.css'

function App() {
  const[Input,setInput]=useState("")
  const[Sorted,setSorted]=useState("")

  const sortedalpha=()=>{
    const sort=Input.split("").sort().join("");
    setSorted(sort)
  };
  const handleinput=(e)=>{
    setInput(e.target.value)
  }


  return (
  <div className='place-items-center m-5'>
    <h1 className=' m-2 bg-slate-500'>Sort a  String Alphabetically </h1>
    <input type="text" onChange={handleinput} value={Input} placeholder='write a string' />
    <button className='bg-green-800 rounded-lg ' onClick={sortedalpha}>SORT</button>
    <p>Sorted string: {Sorted}</p>
  </div>
  )
}

export default App
