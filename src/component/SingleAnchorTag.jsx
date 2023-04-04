import React from "react";

const SingleAnchorTag = (props) => {
  return (
    <a href={props.url}>
      {props.name}
    </a>
  );
};

export default SingleAnchorTag;
