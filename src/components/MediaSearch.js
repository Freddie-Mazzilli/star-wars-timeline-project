import React from "react";

function Media({media, focusMediaSelector}) {
    
const dateSuffix = media.sw_date <= 0 ? `${Math.abs(media.sw_date)} BBY`: `${media.sw_date} ABY`
    
    return(
        <div className="media-search-card">
            <h4>{media.media_type}</h4>
            <img onClick={focusMediaSelector} src={media.poster} alt="img"/>
            <h3>{media.title}</h3>
            <h4>{media.release}, {dateSuffix}</h4>
        </div>
    )
}

export default Media