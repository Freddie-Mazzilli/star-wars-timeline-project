import React from "react";

function Submit({showSubmit}) {
    if (showSubmit === true) {
        return(
            <h1>Thank You for your submission</h1>
        )
    }
    return(
        <></>
    )
}

export default Submit