import React from "react";

function Focus({focusMedia}) {
    console.log(focusMedia)
    const dateSuffix = focusMedia.sw_date <= 0 ? `${Math.abs(focusMedia.sw_date)} BBY`: `${focusMedia.sw_date} ABY`

    return(
        <div className="flexbox2">
            <h3>{focusMedia.title}</h3>
            <img src={focusMedia.poster} alt="img" />
            <p>{focusMedia.summary}</p>
            <h3>{focusMedia.media_type}</h3>
            <div className="flexbox3">
                <h4>Released In: {focusMedia.release}</h4>
                <h4>Chronologically: {dateSuffix}</h4>
            </div>
        </div>
    )
}

export default Focus