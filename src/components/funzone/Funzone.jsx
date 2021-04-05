import React from 'react'
import VideoDisplay from '../utils/VideoDisplay'
import { FUNZONE_LIMIT_5 } from '../utils/queries/FUNZONE_LIMIT_5'
import Title from '../utils/cssComponents/Title'

function Funzone() {
  return (
    <>
      <Title name={'Funzone'} />
      <VideoDisplay query={FUNZONE_LIMIT_5} />
    </>
  )
}
export default Funzone
