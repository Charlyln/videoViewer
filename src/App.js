import { gql, useQuery } from '@apollo/client'
import React from 'react'
import './App.css'

function App() {
  const { loading, error, data } = useQuery(gql`
    {
      allVideos(limit: 5) {
        items {
          name
        }
      }
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  console.log(data)

  return (
    <div className="App">
      <header className="App-header">{`Hello world ! `}</header>
    </div>
  )
}

export default App
