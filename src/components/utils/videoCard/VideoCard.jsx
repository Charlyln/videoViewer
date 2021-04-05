import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './VideoCard.module.css'

function VideoCard({ video }) {
  const { name, poster, Tags, id } = video
  const location = useLocation()

  return (
    <div className={styles.card}>
      <Link
        to={{
          pathname: `/video/${id}`,
          state: { from: location.pathname }
        }}
      >
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden my-4 mx-4">
          <img
            className="w-full object-cover object-center"
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
              <p className="text-1xl text-white whitespace-nowrap line-through">
                {`Tags`}
              </p>
            ) : (
              <div className="flex overflow-ellipsis overflow-hidden">
                {Tags.map((tag) => (
                  <div
                    key={tag.id}
                    className="flex text-1xl text-white whitespace-nowrap mx-1"
                  >
                    <p>{`#${tag.name}`}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default VideoCard
