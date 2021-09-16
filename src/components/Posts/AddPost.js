import React, { useState } from "react";
import shortid from "shortid";
import { createPost } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const AddPost = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const new_post = {
      id: shortid.generate(),
      title: title,
      body: body,
    };

    dispatch(createPost(new_post));
    history.push("/");
  };
  return (
    <div className="container border"
    style={{marginTop:"50px", width:"80%", 
    backgroundImage:"url('https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg')",
    backgroundPosition: "center",
    backgroundSize:"cover",
    }}>
      <div >
        <div>
          <div className="card-header">Add A Post</div>
          <div className="card-body">
            <form onSubmit={submitForm} style={{width:"20%"}}>
              <div className="form-group">
                <input style={{width:"500px"}}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea style={{width:"500px"}}
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Body Text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <button className="btn btn-primary btn-lg"  style={{width:"500px"}}>Add New Post</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
