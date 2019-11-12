import React from 'react';

import '../styles/Comment.css';

function Comment(props) {
  return (
    <div className="comment">
      <img className="comment-picture" src={props.comment.author.avatar} alt="profile picture" />
      <p className="comment-text"><strong>{props.comment.author.name}</strong> {props.comment.content}</p>
    </div>
  )
}

export default Comment;