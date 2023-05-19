import React from "react";


function AddMedia({updateFormData, addMedia}) {

    return (
        <div className="form-flex">
          <h2>New Media</h2>
          <form onSubmit={addMedia}>
            <div className="form-flex2">
                <input className="form" onChange={updateFormData} type="text" name="title" placeholder="Media Title" required/>
                <input className="form" onChange={updateFormData} type="text" name="poster" placeholder="Poster URL" required/>
                <input className="form" onChange={updateFormData} type="text" name="media_type" placeholder="Type of Media" required/>
            </div>
            <div className="form-flex2">
                <input className="form" onChange={updateFormData} type="text" name="release" placeholder="Release Year" required/>
                <input className="form" onChange={updateFormData} type="text" name="sw_date" placeholder="Star Wars Year" required/>
                <input className="form" onChange={updateFormData} type="text" name="summary" placeholder="Summary (optional)" />
            </div>
            <div className="form-flex2">
                <button className="form" type="submit">Add Media</button>
            </div>
          </form>
        </div>
    );
}

export default AddMedia