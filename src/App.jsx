import { useState, useCallback } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbersAllowed) str+="0123456789";
    if(charAllowed) str+="!@#$%^&*";
    for(let i=0;i<length;i++){
      let pos=Math.floor(Math.random()*str.length+1);
      pass=str.charAt(pos);
    }
    setPassword(pass);
  },[length, numbersAllowed, charAllowed, setPassword])

  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type='text'
          value={password}
          placeholder='password'
          className='outline-none w-full py-1 px-3'
          readOnly/>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={100}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
        </div>
       </div>
    </>
  )
}

export default App
