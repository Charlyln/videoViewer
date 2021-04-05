import React from 'react'
import RenderData from '../utils/renderData/RenderData'
import { FUNZONE_LIMIT_5 } from '../utils/queries/FUNZONE_LIMIT_5'
import Title from '../utils/cssComponents/Title'

function Funzone() {
  return (
    <>
      <Title name={'Funzone'} />
      <RenderData query={FUNZONE_LIMIT_5} />
    </>
  )
}
export default Funzone
