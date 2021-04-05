import React from 'react'
import VideoDisplay from '../utils/VideoDisplay'
import { ALL_LIMIT_5 } from '../utils/queries/ALL_LIMIT_5'
import Title from '../utils/cssComponents/Title'

function Home() {
  return (
    <>
      <Title name={'Home'} />
      <VideoDisplay query={ALL_LIMIT_5} />
    </>
  )
}

export default Home
