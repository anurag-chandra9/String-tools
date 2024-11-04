import { useState } from 'react'
import './App.css'

function App() {
  const[inputText,setinputText]=useState('');
  const[reverseString,setreverseString]=useState('');
  const Stringreverse=()=>{
    const reversed = inputText.split('').reverse().join('');
    setreverseString(reversed);
  };

  return (
    <>
    <div>
      <h1 className=' mx-60 box-border h-15   bg-blue-300 flex items-center justify-center  rounded-lg'>String Reverse app</h1>
      <input className='p-2' type="text"
      placeholder='enter a string'
      value={inputText}
      onChange={(e)=>setinputText(e.target.value)} />
      <button className='p-2 bg-blue-900 rounded-lg' onClick={Stringreverse}>Reverse string</button>
      <h2 className=' mx-80 box-border h-15   bg-blue-300 flex items-center justify-center  rounded-lg'> Reversed string</h2>
      <div className='   rounded-lg text-black  h-2 '>{reverseString}
        
      </div>
      

    </div>
     
    </>
  )
}

export default App
