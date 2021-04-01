import React from 'react'
import style from './VideoCard.module.css'

function VideoCard({ video }) {
  const { name, poster, Tags } = video

  return (
    <div className={style.card}>
      <img className={style.img} src={poster} alt={name} />
      <div>
        <h4>
          <b>{name}</b>
        </h4>
        {Tags.map((tag) => (
          <p key={tag.id}>{tag.name}</p>
        ))}
      </div>
    </div>
  )
}

export default VideoCard
