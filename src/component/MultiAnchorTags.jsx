import React from "react";
import TopNav from "./TopNav";
import SingleAnchorTag from "./SingleAnchorTag";

const MultiAnchorTags = ()=>{
    
    
    return(
        <div>
            <TopNav name = "Google offered in:"  />
            <SingleAnchorTag name = " Hausa " url="#"/>
            <SingleAnchorTag name = " Igbo " url="#"/>
            <SingleAnchorTag name = " Ede Yoruba " url="#"/>
            <SingleAnchorTag name = " Nigerian pidgin " url="#"/>

        </div>
    )
}
export default MultiAnchorTags