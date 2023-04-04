import React from "react";
import SingleAnchorTag from './SingleAnchorTag'



const Footer = ()=>{

    

    return(
        <div>
            <div>
                <SingleAnchorTag name = "Carbon nuetral since 2007" url = "#" />
            </div>
            <div>
               <SingleAnchorTag name = "About" url="#"/>
               <SingleAnchorTag name = "Advertising" url="#"/> 
               <SingleAnchorTag name = "Business" url="#"/> 
               <SingleAnchorTag name = "How Search works" url="#"/> 
               <SingleAnchorTag name = "Privacy" url="#"/>
               <SingleAnchorTag name = "Terms" url="#"/> 
               <SingleAnchorTag name = "Settings" url="#"/> 
 

            </div>

        </div>
        
    )
}


export default Footer