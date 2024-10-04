import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  // Defining variables with useState hook;
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // Password Generator function using useCallback hook
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) string += "1234567890";
    if(character) string += "!@#$%^&*()-_=+\|[]{};:/?.>";

    for(let i = 0; i < length; i++){
      let char = Math.floor(Math.random()*string.length);
      pass += string.charAt(char);
    }

    setPassword(pass);
  },[length, number, character])

  //Using useEffect hook to run the password generator function
  useEffect(()=>{
    passwordGenerator();
  },[length, number, character, passwordGenerator]);

  // Function to copy the password to the clipboard;
  const usingReference = useRef(null);
  const copyClipboard = useCallback(()=>{
    usingReference.current?.select();
    try{
      navigator.clipboard.writeText(password);
    }
    catch(error){
      console.log(error);
      
    }
  },[password]);
  return (
    <>
      <div className="main">
        <div className="sidebar"></div>
        <div className="container">
          <div className="elements">
          <h1>Password Generator</h1>
          <div className="password__container">
            <input
             type="text"
             value={password}
             placeholder={password}
             className='pass_input'
             ref={usingReference}
             readOnly />
             <button onClick={copyClipboard}>Copy</button>
          </div>
          <div className="options">
          <div className="option__container1">
            <input 
             type="range"
             min="6"
             max="30"
             value={length}
             className="cursor_pointer"
             onChange={(e)=>{setLength(e.target.value)}} />
             <label htmlFor="cursor_pointer">Length: {length}</label>
          </div>
          <div className="option__container2">
            <input
             type="checkbox"
             defaultChecked={number}
             onChange={()=>{setNumber((prev)=>!prev)}}/>
             <label>Numbers</label>
             <input
             type="checkbox"
             defaultChecked={character}
             onChange={()=>{setCharacter((prev)=>!prev)}}/>
             <label>Characters</label>
          </div>
          </div>
        </div>
        </div>
        <div className="sidebar"></div>
      </div>
    </>
  )
}

export default App
