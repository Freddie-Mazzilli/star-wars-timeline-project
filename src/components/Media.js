import React from "react";
import { useState } from "react";

function Media({media, index, buttonState, focusMediaSelector}) {
    

    const [toggle, setToggle] = useState(true)

    function handleToggle() {
        setToggle(!toggle)
    }


const dateSuffix = media.sw_date <= 0 ? `${Math.abs(media.sw_date)} BBY`: `${media.sw_date} ABY`
    
    return(
        <div className={index % 2 === 0 ? 'left' : 'right'}>
            <img onClick={focusMediaSelector} src={media.poster} alt="img"/>
            <h3 onClick={handleToggle}>{toggle ? media.title : buttonState ? dateSuffix : media.release}</h3>
        </div>
    )
}

export default Media