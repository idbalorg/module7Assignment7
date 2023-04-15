import React from 'react';

const ButtonComp = (props)=>{
    return(

        <button id={props.id} name={props.name} type = {props.type} > {props.name} </button>
    )
}

export default ButtonComp;