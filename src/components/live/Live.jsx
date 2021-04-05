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
      <h1 className="text-2xl font-semibold my-5">Live</h1>
      <video className={styles.video} ref={videoRef} controls autoPlay />

      <div className="my-10 mx-10">
        <Home isInLiveSection={true} />
      </div>
      <button
          className=" hover:text-gray-300 hover:bg-gray-500 bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium my-5 mx-5"
          
        >
          More
        </button>
    </div>
  )
}

export default Live
