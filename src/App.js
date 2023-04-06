import React from "react";
import Letters from "./component/Letters";
import SearchBar from "./component/SearchBar";
import TopNavFull from "./component/TopNavFull";
import MultiAnchorTags from "./component/MultiAnchorTags";
import Footer from "./component/Footer";

function App() {
  
  return (
    <div className="App">
      <TopNavFull />
      <Letters name="Google" />
      <SearchBar/>
      <MultiAnchorTags />
      <Letters name="Nigeria " />
      <Footer />
    </div>
  );
}

export default App;
