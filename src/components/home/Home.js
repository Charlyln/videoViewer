import { gql } from 'apollo-boost'
import React from 'react'
import VideoCard from '../utils/VideoCard'
import { useQuery } from '@apollo/react-hooks'

function Home({ isInLiveSection }) {
  const ALLVIDEOS_LIMIT_5 = gql`
    query AllLimit5($after: String) {
      allVideos(limit: 5, after: $after) {
        items {
          id
          name
          poster
          Tags {
            id
            name
          }
        }
        cursor {
          before
          after
        }
      }
    }
  `

  const { loading, error, data, fetchMore } = useQuery(ALLVIDEOS_LIMIT_5)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const fetchMoreVideos = () => {
    fetchMore({
      variables: {
        after: data.allVideos.cursor.after
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.allVideos.items = [...fetchMoreResult.allVideos.items]
        return fetchMoreResult
      }
    })
  }

  return (
    <>
      <h1 className="text-2xl font-semibold py-5 px-5 ">Home</h1>
      <div className="cardsContainer">
        {data.allVideos.items.map((video) => (
          <VideoCard video={video} key={video.id} />
        ))}
      </div>

      {!isInLiveSection ? (
        <button
          className=" hover:text-gray-300 hover:bg-gray-500 bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium my-5 mx-5"
          onClick={fetchMoreVideos}
        >
          More
        </button>
      ) : (
        ''
      )}
    </>
  )
}

export default Home
