import { useState } from 'react'
import './App.css'

function App() {
  const [Input,setInput]=useState('')
  const [String,setString]=useState('')

   
  const titlecase=(str)=>{
    return str.toLowerCase().split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
  }
  const handleinput=(e)=>{
   setInput(e.target.value);

  };
  const output=()=>{


    setString(titlecase(Input));
  };

  return (
    <div className='flex items-center justify-center'>  
    <div className='text-center '>
      <h1 className=' text-center bg-slate-300 rounded m-3'>Title-case</h1>
      <input  className="mx-4 " type="text" value={Input} onChange={handleinput} placeholder='write a string' />
      <button className=' bg-[#859F3D] rounded hover:bg-[#31511E] ' onClick={output}>click to change Titlecase</button>
      <p className='bg-slate-200 border mt-4'>{String}</p>
    </div>
    </div>
    
  )
}

export default App
