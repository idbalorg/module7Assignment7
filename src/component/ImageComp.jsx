import React from "react";

const ImageComp = (props) => {
  return (
    <img src={`./icons/${props.fileName}`} alt={props.alt} />
  );
};

export default ImageComp;
