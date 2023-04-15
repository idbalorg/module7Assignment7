import React, { useState } from 'react';
import NavElement from './component/NavElements';
import Text from './component/Text'
import Language from './component/Language';




function App() {
  const [inputValue, setInputValue] = useState("")
  const [pValue, setPvalue] = useState("")

  const handleChange = (e)=>{
    console.log(e.target.value)
    setInputValue(e.target.value)

  }
  

  const handleOnClick = ()=>{
    setPvalue(inputValue)
    setInputValue("")
  }


  
  return (
    <div className="App">
      
      <NavElement style = {{display: "inline-block",
    lineHeight: "24px",
    verticalAlign: "middle"
}}/>
      <Text name = "Google" />
      <div>
        <input className='searchBox' type = "text" onChange={handleChange} value={inputValue}/>
        <div id='buttons'> 
        <button onClick={handleOnClick} type = "submit" >Google Search</button>
        <button type = "submit" >I'm Feeling Lucky</button>
        <div>
        <p>you searched for: {pValue}</p>      

        <p className='ptag'>Google offered in: <span><Language/></span></p>
        </div>
        

        </div>
        </div>
      </div>
  );
}

export default App;
