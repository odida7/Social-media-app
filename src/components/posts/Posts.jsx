import React from 'react'
import bu from '../../pics/bu.png';
import N from '../../pics/N.png';
import melanin from '../../pics/melanin.jpg';
import Post from '../post/Post';
import './posts.css'


export default function Posts() {
   const PostsData = [
    {
        img: bu,
        name: 'Aber Faith',
        desc: "Happy New Year all friends! #2023",
        likes: 279,
        liked: true
    },
    {
        img: N,
        name: 'Akello Hope',
        desc: "Party time :)",
        likes: 0,
        liked: false

    },
    {
        img: melanin,
        name: "Atim Grace",
        desc: "At Archery Festival",
        likes: 800,
        liked: true
    }
]

  return (
        <div className="Posts">
          {PostsData.map((post, id)=>{
            return <Post data={post} id={id}/>
        })}
    </div>

  )
}
