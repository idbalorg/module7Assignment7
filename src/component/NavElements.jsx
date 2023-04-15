import React from 'react';
import AnchorTags from './AnchorTags';
import ButtonComp from './ButtonComp';

const NavElement = () => {
    const names = ["Gmail ", " Image"];
    return(
        <div id = "topNav">
        {names.map((name, index) => (
            <AnchorTags key={index} name={ name } />
        ))
        }
        <ButtonComp id='sign' name = "Sign in" />
        </div>
    )


}
    

export default NavElement;
