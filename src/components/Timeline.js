import React from "react";
import { useState } from "react";
import Media from "./Media";



function Timeline({medias, buttonState, focusMediaSelector}) {

        const swTimelineMedia = orderObjectsBySWDate(medias)
        function orderObjectsBySWDate(medias) {
            return [...medias].sort((a, b) => a.sw_date - b.sw_date);
        }

        const releaseTimelineMedia = orderObjectsByReleaseDate(medias)
        function orderObjectsByReleaseDate(medias) {
            return [...medias].sort((a, b) => a.release - b.release)
        }

    const media = (buttonState ? swTimelineMedia : releaseTimelineMedia).map((media, index) => {
        return <Media focusMediaSelector={focusMediaSelector} buttonState={buttonState} index={index} key={media.id} media={media}/>
    })

    return(
        <>
        {media}
        </>
    )
}

export default Timeline