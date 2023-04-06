
import React, { useState } from 'react';
import Button  from './Button';
import { FaSearch, FaCamera } from 'react-icons/fa';


function SearchBar() {
  const [state, setState] = useState(()=> "")
  const [h1Value, setH1Value] = useState("");

  function handleButtonClick() {
    setH1Value(state);
  }

  function handleFieldText(e){
    setState(e.target.value);
    console.log(e);
  }



  return (
    <div className="">
      <form>
        <div className="">
          <input value={state} onChange={handleFieldText} type="text" placeholder="Search Google" className="" />
          <FaSearch className="" />
          <FaCamera className="" />
        </div>
        <div>
          <Button onClick={handleButtonClick} name = "Google Search"/>
          <Button name = "Im Feeling Lucky"/>
          <h1>{h1Value}</h1>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
