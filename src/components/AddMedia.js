import React from "react";


function AddMedia({updateFormData, addMedia}) {

    return (
        <div>
          <h2>New Media</h2>
          <form onSubmit={addMedia}>
            <div>
                <input onChange={updateFormData} type="text" name="title" placeholder="Media Title" required/>
                <input onChange={updateFormData} type="text" name="poster" placeholder="Poster URL" required/>
                <input onChange={updateFormData} type="text" name="media_type" placeholder="Type of Media" required/>
            </div>
                <input onChange={updateFormData} type="text" name="release" placeholder="Release Year" required/>
                <input onChange={updateFormData} type="text" name="sw_date" placeholder="Star Wars Year" required/>
                <input onChange={updateFormData} type="text" name="summary" placeholder="Summary (optional)" />
            <div>
                <button type="submit">Add Media</button>
            </div>
          </form>
        </div>
    );
}

export default AddMedia