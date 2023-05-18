import React from "react";
import MediaSearch from "./MediaSearch";

function SearchList({medias, focusMediaSelector}) {

    const media = medias.map((media) => {
        return <MediaSearch focusMediaSelector={focusMediaSelector} media={media} key={media.id}/>
    })

    return(
        <>
          {media}
        </>
    )
}

export default SearchList