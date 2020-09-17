import React from "react";

const CreatePost = () => {
  return (
    <div className='myCard'>
      <div
        className="card auth-card input-field"
        style={{
          margin: "10px, auto",
          maxWidth: "500px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <input type="text" placeholder="title" />
        <input type="text" placeholder="body" />
        <div className="file-field input-field">
          <div className="btn #90caf9 blue lighten-3">
            <span>Upload Image</span>
            <input type="file" />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button
          class="btn waves-effect waves-light #90caf9 blue lighten-3
          "
        >
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
