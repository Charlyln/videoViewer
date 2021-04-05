import React from 'react'
import RenderData from '../utils/renderData/RenderData'
import { ALL_LIMIT_5 } from '../utils/queries/ALL_LIMIT_5'
import Title from '../utils/cssComponents/Title'

function Home() {
  return (
    <>
      <Title name={'Home'} />
      <RenderData query={ALL_LIMIT_5} />
    </>
  )
}

export default Home
