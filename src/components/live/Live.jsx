import React, { useEffect, useRef } from 'react'
import styles from './Live.module.css'
import Home from '../home/Home'

function Live() {
  const videoRef = useRef()
  useEffect(() => {
    videoRef.current.src =
      'https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_10mb.mp4'
  }, [])

  return (
    <div className="my-5 mx-5">
      <video className={styles.video} ref={videoRef} controls autoPlay />

      <div className="my-20 mx-20">
        <Home isInLiveSection={true} />
      </div>
    </div>
  )
}

export default Live
