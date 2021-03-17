import React from "react";
import { useSelector } from "react-redux";
import SingleComment from "./SingleComment";

const CommentList = () => {
  const { comments } = useSelector((state) => state);
  return <div>
            <h3>Comment List</h3>
            <ul>
                {comments.map((i,index)=>{
                    return <SingleComment key={index} comment={i}/>
                })}
            </ul>
        </div>;
};

export default CommentList;
