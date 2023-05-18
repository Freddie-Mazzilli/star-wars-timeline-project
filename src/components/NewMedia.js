import React from "react";

function NewMedia({formData}) {

    if (formData.poster === ""){
        return(
            <div className="new-media-card">
                <h4>{formData.media_type}</h4>
                <h3>{formData.title}</h3>
            </div>
        )
    }
    return (
        <div className="new-media-card">
            <h4>{formData.media_type}</h4>
            <img src={formData.poster} alt="img"/>
            <h3>{formData.title}</h3>
        </div>
    )
}

export default NewMedia