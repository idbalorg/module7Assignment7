import React from 'react'
import AnchorTags from './AnchorTags';

const Language = ()=>{
    const langs = ["hausa", "Igbo", "Ede Yoruba", "Nigerian Pidgin"];

    const mapLang =(name, index)=>{

        return(
            <AnchorTags
        name = {name}
        key = {index}
        />
        )
    }
    return(
        <>
            {langs.map(mapLang)}
        </>
    )
}

export default Language
