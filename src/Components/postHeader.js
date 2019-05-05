import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="postHeader-container">
    <img className="avatar" src={props.avatar} alt="avatar" />

    <div className="dataContainer">
      <strong>{props.name}</strong>
      <span>{props.time}</span>
    </div>
  </div>
);

PostHeader.PropTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
