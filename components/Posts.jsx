import React from 'react'
import Post from './Post'

export default function Posts() {
    const posts = [
        {
            id: '1', 
            username: 'Tinsae Zegeye', 
            userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIO8i8i3D60705OwMtBDweKC3aTIkThlqQw&s', 
            img: 'https://images.unsplash.com/photo-1755004609094-1d91b019aaa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', 
            caption: 'Nice image', 
        }, 
        {
            id: '2', 
            username: 'Estifanos Zegeye', 
            userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFIO8i8i3D60705OwMtBDweKC3aTIkThlqQw&s', 
            img: 'https://images.unsplash.com/photo-1755311903890-c0aed5dc2825?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', 
            caption: 'Woww.... beautiful image', 
        }
    ]
  return (
    <div>
          {posts.map(post => (
              <Post
                  key={post.id}
                  id={post.id}
                  username={post.username}
                  userImg={post.userImg}
                  img={post.img}
                  caption = {post.caption}
              />
      ))}
    </div>
  )
}
