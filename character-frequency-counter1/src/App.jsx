import { useState } from 'react'
import './App.css'

function App() {
  const [Input,setInput]=useState("");
  const[Frequency,setFrequency]=useState({});
  const conutcharfrequency=(text)=>{
    const Frequency={};
    for(let char of text){
      if(char.trim()!==""){
        Frequency[char]=Frequency[char]?Frequency[char]+1:1;

            }
    }return Frequency;

  };
  const handleinput=(e)=>{

    setInput(e.target.value);
  };
const handleoutput=()=>{
  setFrequency(conutcharfrequency(Input));

} 

  

  return (
    <div>
      <h1 className='text-xl bg-[#9B7EBD] w-50 '>count char frequency</h1>
      <input className='mx-4 w-70  border-blue-400' type="text" value={Input} onChange={handleinput} placeholder='write your text' />
    

      <button className='bg-[#4C4B16] rounded-sm ' onClick={handleoutput}>submit</button>
      
      <div className='w-50 h-50 border-black'>
      <ul>
          {Object.entries(Frequency).map(([char, freq]) => (
            <li key={char}>
              <strong>{char}</strong>: {freq}
            </li>
          ))}
        </ul>
      </div>
      
    </div>
   
  )
}

export default App
