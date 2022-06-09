import React from 'react'

const SoundPlay = (src) => {
    const sound = new Howl({
        src
      })
      sound.play()
}

export default SoundPlay