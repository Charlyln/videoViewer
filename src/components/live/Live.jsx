import React, { useEffect, useRef } from 'react'
import styles from './Live.module.css'
import Title from '../utils/cssComponents/Title'
import VideoDisplay from '../utils/VideoDisplay'
import { ALL_LIMIT_5 } from '../utils/queries/ALL_LIMIT_5'
import SubTitle from '../utils/cssComponents/SubTitle'

function Live() {
  const videoRef = useRef()
  useEffect(() => {
    videoRef.current.src =
      'https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4'
  }, [])

  return (
    <>
      <Title name={'Live'} />
      <div className="my-5 mx-5">
        <video className={styles.video} ref={videoRef} controls autoPlay />

        <div className="my-10 mx-10">
          <SubTitle name={'Other videos'} />
          <VideoDisplay query={ALL_LIMIT_5} isUnder={true} />
        </div>
      </div>
    </>
  )
}

export default Live
