import React from 'react'
import ButtonComp from './ButtonComp'


const Form = (props) =>{
    const buttonNames = [
        {
            id : 1,
            name : "Google Search",
            type : "submit"
        }, 
        {
            id : 2,
            name :"I'm Feeling Lucky",
            type : "reset"

        
        }]

    return(
        <div id ="topNav"> 
        <form action="">
            <input type="text" value = {props.value} /> 
            <div>
            {buttonNames.map((info)=><ButtonComp key = {info.id} name = {info.name}  type = {info.type} />)}
            </div>


        </form>
        </div>
    )
}

export default Form