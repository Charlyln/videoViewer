import React, { useEffect, useRef } from 'react'
import videojs from 'video.js'

function Live() {
  const videoSrc =
    'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8'
  const playerRef = useRef()
  const videoJSOptions = {
    autoplay: true,
    controls: false
  }

  useEffect(() => {
    const player = videojs(playerRef.current, videoJSOptions, () => {
      player.src(videoSrc)
    })
  })

  return (
    <div>
      <video ref={playerRef} />
    </div>
  )
}

export default Live
