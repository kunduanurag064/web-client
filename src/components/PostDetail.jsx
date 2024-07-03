import React from "react";
import { useLocation } from "react-router-dom";

const PostDetail = () => {
    const location = useLocation();
    const { post } = location.state;

    return (
        <div>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} width={300} height={300} style={{margin:"20px"}}/>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;
