import React from 'react';

import Comment from './Comment';

import '../styles/Post.css';

function Post(props) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-picture" src={props.post.author.avatar} alt="profile picture" />
        <p className="post-author">{props.post.author.name}</p>
        <p className="post-date">{props.post.date}</p>
      </div>
      <p className="post-content">{props.post.content}</p>
      {props.post.comments.map(comment => <Comment comment={comment} key={comment.id} />)}
    </div>
  );
}

export default Post;