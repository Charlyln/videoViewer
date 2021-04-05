import React, { useState } from 'react'
import VideoCard from './VideoCard'
import { useQuery } from '@apollo/react-hooks'
import Button from './cssComponents/Button'

function VideoDisplay({ query, isUnder }) {
  const [viewAllVideos, setViewAllVideos] = useState(false)
  const { loading, error, data, fetchMore } = useQuery(query)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const fetchMoreVideos = () => {
    fetchMore({
      variables: {
        after: data.allVideos.cursor.after
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.allVideos.items = [...fetchMoreResult.allVideos.items]
        console.log(fetchMoreResult.allVideos.items)
        if (fetchMoreResult.allVideos.items.length !== 0) {
          return fetchMoreResult
        } else {
          console.log(prevResult)
          setViewAllVideos(true)
          return prevResult
        }
      }
    })
  }

  // const handle = () => {
  //   fetchMore({
  //     variables: {
  //       after: ''
  //     },
  //     updateQuery: (prevResult, { fetchMoreResult }) => {
  //       fetchMoreResult.allVideos.items = [...fetchMoreResult.allVideos.items]
  //       console.log(fetchMoreResult.allVideos.items, prevResult.allVideos.items)
  //       if (fetchMoreResult.allVideos.items.length !== 0) {
  //         return fetchMoreResult
  //       } else {
  //         console.log(prevResult)
  //         setViewAllVideos(true)
  //         return prevResult
  //       }
  //     }
  //   })
  // }

  return (
    <>
      <div className="cardsContainer">
        {data.allVideos.items.map((video) => (
          <VideoCard video={video} key={video.id} />
        ))}
      </div>

      {!isUnder ? <Button handleClick={fetchMoreVideos} name={'More'} /> : ''}

      {viewAllVideos ? <button disabled>no more videos</button> : ''}
    </>
  )
}

export default VideoDisplay
