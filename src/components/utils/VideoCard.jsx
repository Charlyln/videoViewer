import React from 'react'
import { Link } from 'react-router-dom'
import styles from './VideoCard.module.css'

function VideoCard({ video }) {
  const { name, poster, Tags, id } = video

  return (
    <Link to={`/video/${id}`}>
      <div className="max-w-sm bg-gray-800 shadow-lg rounded-lg overflow-hidden my-4">
        <img
          className="w-full h-56 object-cover object-center"
          src={poster || 'https://via.placeholder.com/300x168'}
          alt={name}
        />
        <div className="py-4 px-6">
          <div className={styles.title}>
            <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
              {name}
            </h3>
          </div>
          {Tags.length === 0 ? (
            <p className="text-1xl font-semibold text-white whitespace-nowrap line-through">
              {`Tags`}
            </p>
          ) : (
            Tags.map((tag) => (
              <p
                key={tag.id}
                className="text-1xl font-semibold text-white whitespace-nowrap"
              >
                {tag.name}
              </p>
            ))
          )}
        </div>
      </div>
    </Link>
  )
}

export default VideoCard
