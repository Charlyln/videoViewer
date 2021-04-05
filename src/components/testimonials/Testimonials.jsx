import React from 'react'
import VideoDisplay from '../utils/VideoDisplay'
import { TESTIMONIALS_LIMIT_5 } from '../utils/queries/TESTIMONIALS_LIMIT_5'
import Title from '../utils/cssComponents/Title'

function Testimonials() {
  return (
    <>
      <Title name={'Testimonials'} />
      <VideoDisplay query={TESTIMONIALS_LIMIT_5} />
    </>
  )
}

export default Testimonials
