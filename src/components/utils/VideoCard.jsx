import React from 'react'
import { Link } from 'react-router-dom'
import style from './VideoCard.module.css'

function VideoCard({ video }) {
  const { name, poster, Tags, id } = video

  return (
    <div className={style.card}>
      <Link to={`/video/${id}`}>
        <img
          className={style.img}
          src={poster || 'https://via.placeholder.com/300x168'}
          alt={name}
        />
        <div>
          <h4>
            <b>{name}</b>
          </h4>
          {Tags.map((tag) => (
            <p key={tag.id}>{tag.name}</p>
          ))}
        </div>
      </Link>
    </div>
  )
}

export default VideoCard
