import React, { useState } from "react";
import Letters from "./component/Letters";
import SearchBar from "./component/SearchBar";
import TopNavFull from "./component/TopNavFull";
import TopNav from "./component/TopNav";
import MultiAnchorTags from "./component/MultiAnchorTags";
import SingleAnchorTag from './component/SingleAnchorTag'
import Footer from "./component/Footer";
import Button from "./component/Button";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchQuery(searchTerm);
  };
  

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log("searchTerm:", searchTerm);
  console.log("searchQuery:", searchQuery);

  return (
    <div className="App">
      <TopNavFull />
      <Letters name="Google" />
      <SearchBar value={searchTerm} onChange={handleInputChange} />
      <Button name="Google Search" onClick={() => handleSearch(searchTerm)} />
      <Button name="I'm Feeling Lucky" />
      {searchQuery && <h1>You searched for: {searchQuery}</h1>}
      <MultiAnchorTags />
      <Letters name="Nigeria " />
      <Footer />
    </div>
  );
}

export default App;
