import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {saveComment, fetchComments} from "../actions/index";


const CommentBox = () => {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveComment(comment))
        setComment("")
    }
    const fetchHandler = (e) => {
      e.preventDefault();
      dispatch(fetchComments())
    }
    const handleChange = (e) =>{setComment(e.target.value)}
  return (
    <form>
      <h4>Add Comment</h4>
      <textarea value={comment} onChange={handleChange} />
      <div>
        <button className="submit-btn" onClick={submitHandler} >Submit Comment</button>
        <br/>
        <button className="fetch-btn" onClick={fetchHandler} >Fetch Comments</button>
      </div>
    </form>
  );
};

export default CommentBox;
