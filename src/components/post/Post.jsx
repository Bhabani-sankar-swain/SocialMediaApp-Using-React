import React from 'react'
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData'
import { useState } from 'react';


export default function Post(props) {
    const [like,setLike] = useState(props.post.like)
    const [isLiked,setIsLiked] = useState(false)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === props.post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUserName">{Users.filter((u) => u.id === props.post.userId)[0].username}</span>
                    <span className="postDate">{props.post.date}</span>
                </div>
                <div className="postTopright">
                    <MoreVertIcon />
                </div>
            </div>
            <div className="postcenter">
                <span className="postText">{props.post?.desc}</span>
                <img src={PF+props.post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={`${PF}like.png`}alt="" onClick={likeHandler} className="likeIcon" />
                    <img src={`${PF}heart.png`} alt="" onClick={likeHandler} className="likeIcon" />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{props.post.comment} comments</span>
                </div>
            </div>
        </div>
         
    </div>
  )
}
