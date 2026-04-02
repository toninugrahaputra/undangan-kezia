import { useEffect, useRef } from 'react'

const MusicPlayer = ({ data }) => {
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      // Set volume ke tingkat yang nyaman
      audioRef.current.volume = 0.5
      
      // Auto play saat komponen di-render (yaitu saat cover undangan dibuka)
      const playPromise = audioRef.current.play()
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay prevented by browser:', error)
          // Terkadang browser butuh user interaction ekstra
        })
      }
    }
  }, [])

  // Mengembalikan elemen audio saja tanpa UI (headless)
  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
    >
      <source src={data.music.url} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  )
}

export default MusicPlayer
