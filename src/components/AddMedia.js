import React from "react";

function AddMedia({updateFormData, addMedia}) {
    return (
        <div className="new-pet-form">
          <h2>New Media</h2>
          <form onSubmit={addMedia}>
            <input onChange={updateFormData} type="text" name="title" placeholder="Media Title" required/>
            <input onChange={updateFormData} type="text" name="poster" placeholder="Poster URL" required/>
            <input onChange={updateFormData} type="text" name="media_type" placeholder="Type of Media" required/>
            <button type="submit">Add Media</button>
          </form>
        </div>
    );
}

export default AddMedia