import { gql, useQuery } from '@apollo/client'
import React from 'react'
import VideoCard from '../utils/VideoCard'

function Home() {
  const { loading, error, data } = useQuery(gql`
    {
      allVideos(limit: 5) {
        items {
          id
          name
          poster
          Tags {
            id
            name
          }
        }
      }
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  console.log(data)

  return (
    <div className="cardsContainer">
      {data.allVideos.items.map((video) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </div>
  )
}

export default Home
