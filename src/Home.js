import { gql, useQuery } from '@apollo/client'
import React from 'react'
import VideoCard from './components/VideoCard'

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
    <div className="App">
      <header className="App-header">
        {data.allVideos.items.map((video) => (
          <div key={video.id}>
            <VideoCard video={video} />
          </div>
        ))}
      </header>
    </div>
  )
}

export default Home
