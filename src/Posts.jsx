import React from 'react';


const Posts = props => (
    <div className='App'>
        {props.posts.map((post, i) => {
            return (
                <>
                <div className="features">
                <div> userId: {post.userId} </div>
                <p key={i}> <br />Title: {post.title} </p>
                <div>{post.body}</div>
                </div>
                </>
                )
        }
        )
        }
    </div>
)
export default Posts;