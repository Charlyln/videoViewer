import React from 'react'
import { gql, useQuery } from '@apollo/client'
import VideoCard from '../utils/VideoCard'

function Funzone() {
  const { loading, error, data } = useQuery(gql`
    {
      allVideos(tags: "Funzone", limit: 5) {
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

  return (
    <div className="cardsContainer">
      {data.allVideos.items.map((video) => (
        <VideoCard video={video} key={video.id} />
      ))}
    </div>
  )
}
export default Funzone
