import React from "react";
import TopNav from "./TopNav";
import Button from './Button';
import ImageComp from "./ImageComp";

const TopNavFull = () => {
  return (
    <div>
      <TopNav name="Gmail" />
      <TopNav name = "Image"/>
      <ImageComp fileName="menu.png" alt="menu-image"/>
      <Button name="Sign in"/>
    </div>
  );
};

export default TopNavFull;
