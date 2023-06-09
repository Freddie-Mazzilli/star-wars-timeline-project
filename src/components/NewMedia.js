import React from "react";

function NewMedia({formData}) {

    if (formData.poster === ""){
        return(
            <div className="new-media-card">
                <h4>{formData.media_type}</h4>
                <h3>{formData.title}</h3>
                <div className="flexbox3">
                    <h3>{formData.release}</h3>
                    <h3>{formData.sw_date}</h3>
                </div>
                <p>{formData.summary}</p>
            </div>
        )
    }
    return (
        <div className="new-media-card">
            <h4>{formData.media_type}</h4>
            <img src={formData.poster} alt="img"/>
            <h3>{formData.title}</h3>
            <div className="flexbox3">
                <h3>{formData.release}</h3>
                <h3>{formData.sw_date}</h3>
            </div>
            <p>{formData.summary}</p>
        </div>
    )
}

export default NewMedia