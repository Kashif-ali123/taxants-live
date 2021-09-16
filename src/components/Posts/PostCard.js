import React from "react";
import { deletePost } from "../../actions/postAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import DeleteIcon from '@material-ui/icons/Delete';


import EllipsisText from "react-ellipsis-text";
import ArrowRightAlt from "@material-ui/icons/ArrowRightAlt";
import EditIcon from '@material-ui/icons/Edit';
const PostCard = ({ postItem }) => {
  const dispatch = useDispatch();
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card custom-card">
        <img
          src={`https://source.unsplash.com/collection/${postItem.id}/1600x900`}
          alt={postItem.title}
          className="card-img-top"
        />
        <Link
          to={`/updatePost/${postItem.id}`}
          className="btn btn-danger btn-edit"
        >
          <span className="material-icons"><EditIcon className="edit" /> </span>
        </Link>
        <button
          className="btn btn-danger btn-delete"
          onClick={() => dispatch(deletePost(postItem.id))}
        >
         <span class="material-icons-outlined">
       <DeleteIcon />
</span>
        </button>
        <div className="card-body">
          <h6 className="texts">{postItem.title}</h6>
          <EllipsisText text={postItem.body} length={"100"} className="post" />
        </div>
        <div className="card-footer">
          <Link to={`/post/${postItem.id}`} className="btn btn-primary">
            <span className="read"> Read more</span>
               <span className="alt"><ArrowRightAlt className="arrr" /> </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
