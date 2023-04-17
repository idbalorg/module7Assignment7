import React from 'react'

const AnchorTags = (props)=>{

    return(
       <a className='anchor' href="https://www.google.com">{props.name}</a> 
    )
}

export default AnchorTags;