import React from 'react'
import RenderData from '../utils/renderData/RenderData'
import { TESTIMONIALS_LIMIT_5 } from '../utils/queries/TESTIMONIALS_LIMIT_5'
import Title from '../utils/cssComponents/Title'

function Testimonials() {
  return (
    <>
      <Title name={'Testimonials'} />
      <RenderData query={TESTIMONIALS_LIMIT_5} />
    </>
  )
}

export default Testimonials
