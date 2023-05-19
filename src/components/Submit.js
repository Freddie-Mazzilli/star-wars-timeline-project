import React from "react";

function Submit({showSubmit}) {
    if (showSubmit === true) {
        return(
            <div className="button-div">
                <h1>Thank You for your submission!</h1>
            </div>
        )
    }
    return(
        <></>
    )
}

export default Submit