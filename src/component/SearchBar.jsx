
import React from 'react';
import Button  from './Button';
import { FaSearch, FaCamera } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="">
      <form>
        <div className="">
          <input type="text" placeholder="Search Google" className="" />
          <FaSearch className="" />
          <FaCamera className="" />
        </div>
        <div>
          <Button name = "Google Search"/>
          <Button name = "Im Feeling Lucky"/>

        </div>
      </form>
    </div>
  );
}

export default SearchBar;
