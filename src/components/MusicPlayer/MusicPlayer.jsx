import { useEffect, useRef, useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from 'lucide-react'

const MusicPlayer = ({ data }) => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true)
        }).catch((error) => {
          console.log('Autoplay prevented:', error)
          setIsPlaying(false) // Required user interaction
        })
      }
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    setProgress(audioRef.current.currentTime)
  }

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration)
  }

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  const progressPercent = duration ? (progress / duration) * 100 : 0
  
  // Use hero image or fallback as album art
  const heroImage = data.gallery?.[0] || "https://images.unsplash.com/photo-1519741497674-611481863552?w=100&q=80"
  const coupleName = `${data.couple.groom.nickname} & ${data.couple.bride.nickname}`
  
  return (
    <>
      <audio
        ref={audioRef}
        loop
        src={data.music.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      
      {/* Spacer to prevent content hiding behind bottom bar */}
      <div className="h-20 md:h-24 w-full bg-spotify-base" />

      {/* Spotify Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-20 md:h-24 bg-spotify-surface border-t border-white/5 z-[60] flex items-center justify-between px-2 md:px-4 font-sans text-text-primary shadow-2xl">
        
        {/* Left: Album Art & Info */}
        <div className="flex items-center gap-3 w-1/3 min-w-[140px]">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-spotify-elevated rounded overflow-hidden flex-shrink-0 shadow-md">
            <img src={heroImage} alt="Album Art" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-1 pr-2 truncate">
            <h4 className="text-sm md:text-base font-semibold text-text-primary truncate">
              {data.music.title || "Perfect Harmony"}
            </h4>
            <p className="text-xs text-text-secondary truncate hover:underline cursor-pointer">
              {coupleName}
            </p>
          </div>
          <Heart className="w-5 h-5 ml-1 text-spotify-green fill-spotify-green hidden sm:block flex-shrink-0 cursor-pointer" />
        </div>

        {/* Center: Controls & Scrubber */}
        <div className="flex flex-col items-center justify-center w-1/3 flex-1 px-2 md:px-4 max-w-xl">
          <div className="flex items-center gap-4 md:gap-6 mb-1 md:mb-2">
            <SkipBack className="w-4 h-4 md:w-5 md:h-5 text-text-secondary hover:text-text-primary transition-colors cursor-not-allowed" />
            <button 
              onClick={togglePlay}
              className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 md:w-5 md:h-5 text-black fill-black" />
              ) : (
                <Play className="w-4 h-4 md:w-5 md:h-5 text-black fill-black ml-0.5 md:ml-1" />
              )}
            </button>
            <SkipForward className="w-4 h-4 md:w-5 md:h-5 text-text-secondary hover:text-text-primary transition-colors cursor-not-allowed" />
          </div>
          
          {/* Progress Bar row */}
          <div className="flex items-center w-full gap-2 text-xs text-text-secondary hidden sm:flex">
            <span className="w-10 text-right tabular-nums">{formatTime(progress)}</span>
            <div className="flex-1 h-3 flex items-center group cursor-pointer">
              <div className="w-full h-1 md:h-1.5 bg-[#4d4d4d] rounded-full relative overflow-hidden group-hover:overflow-visible">
                <div 
                  className="h-full bg-white group-hover:bg-spotify-green rounded-full relative"
                  style={{ width: `${progressPercent}%` }}
                >
                  {/* Knob handles appear on hover */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md" />
                </div>
              </div>
            </div>
            <span className="w-10 text-left tabular-nums">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Right: Extra Controls (Desktop only) */}
        <div className="w-1/3 flex justify-end items-center gap-3 hidden md:flex text-text-secondary pr-4">
           <Volume2 className="w-5 h-5 hover:text-text-primary cursor-pointer" />
           <div className="w-24 h-3 flex items-center group cursor-pointer">
              <div className="w-full h-1.5 bg-[#4d4d4d] rounded-full overflow-hidden group-hover:overflow-visible">
                 <div className="w-1/2 h-full bg-white group-hover:bg-spotify-green rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </>
  )
}

export default MusicPlayer
