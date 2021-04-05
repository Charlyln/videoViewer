import React from 'react'
import { useHistory, useParams } from 'react-router'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import Testimonials from '../testimonials/Testimonials'
import Funzone from '../funzone/Funzone'

function VideoDetails() {
  const { id } = useParams()
  const history = useHistory()
  const { loading, error, data } = useQuery(gql`
    {
      video(id: ${JSON.stringify(id)}) {
        name
        poster
        Tags {
          id
          name
        }
      }
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const { name, poster, Tags } = data.video

  function goPreviousPage() {
    history.goBack()
  }

  return (
    <>
      <div className=" bg-gray-800 shadow-lg rounded-lg overflow-hidden my-10 mx-10">
        <img
          className="w-full object-cover object-center"
          src={poster || 'https://via.placeholder.com/300x168'}
          alt={name}
        />
        <div className="py-4 px-6">
          <h3 className="text-2xl font-semibold text-white whitespace-nowrap">
            {name}
          </h3>
        </div>
        {Tags.length === 0 ? (
          <h1 className="text-1xl font-semibold text-white py-2 px-2  line-through">
            {`Tags`}
          </h1>
        ) : (
          Tags.map((tag) => (
            <h1
              key={tag.id}
              className="text-1xl font-semibold text-white py-2 px-2 "
            >
              {tag.name}
            </h1>
          ))
        )}
      </div>

      <div className="my-10 mx-10">
        <h1 className="text-1xl font-semibold  py-2 px-2 ">Other videos</h1>

        {history.location.state &&
        history.location.state.from === '/testimonials' ? (
          <Testimonials isInVideoDetails={true} />
        ) : (
          <Funzone isInVideoDetails={true} />
        )}
      </div>

      <div className="my-10 mx-10">
        <button
          className=" hover:text-gray-300 hover:bg-gray-500 bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium "
          onClick={goPreviousPage}
        >
          retour
        </button>
      </div>
    </>
  )
}

export default VideoDetails
