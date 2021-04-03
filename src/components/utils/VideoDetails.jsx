import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useHistory, useParams } from 'react-router'

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
    <div>
      <img
        style={{ width: '100%' }}
        src={poster || 'https://via.placeholder.com/400'}
        alt={name}
      />
      <h1>{name}</h1>
      {Tags.map((tag) => (
        <p key={tag.name}>{tag.name}</p>
      ))}
      <button onClick={goPreviousPage}>retour</button>
    </div>
  )
}

export default VideoDetails
