import { Component } from "react";
import './index.css';

class CommentItem extends Component {
    
  render() {
    const{Items,deleteComment,setLike}=this.props
    const{profileIcon,name,comment,id,isLike}=Items
    const LikeUrl=isLike?"https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png":"https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
    return (
      <div className="comment-item">
        <div className="profile">
          <div className="profile-icon">{profileIcon}</div>
          <div className="user-info">
            <p className="username">{name}</p>
            <p className="time">less than a minute ago</p>
          </div>
        </div>
        
        <p className="comment-text">
            {comment}
        </p>
        
        <div className="actions">
          <div className="like">
            <img onClick={()=>setLike(id)} 
              className="icon like-icon" 
              src={LikeUrl}
              alt="like"
            />
            <span>Like</span>
          </div>
          <img  onClick={()=>deleteComment(id)}
            className="icon delete-icon" 
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" 
            alt="delete"
          />
        </div>
      </div>
    );
  }
}

export default CommentItem;
