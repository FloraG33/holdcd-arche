import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isControlsVisible, setIsControlsVisible] = useState(true); // State for controls visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsControlsVisible(false); // Hide controls after 4 seconds
    }, 7000);

    // Clean up the timer when the component unmounts or visibility changes
    return () => clearTimeout(timer);
  }, []);

  // Show controls on hover
  const handleMouseEnter = () => {
    setIsControlsVisible(true);
  };

  // Hide controls when mouse leaves
  const handleMouseLeave = () => {
    setIsControlsVisible(false);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percent);
    }
  };

  const handleProgressClick = (e: React.MouseEvent) => {
    if (videoRef.current) {
      const progressBar = e.currentTarget as HTMLDivElement;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const newProgress = (clickPosition / progressBar.offsetWidth) * 100;
      videoRef.current.currentTime = (newProgress / 100) * videoRef.current.duration;
      setProgress(newProgress);
    }
  };

  return (
    <div
      className="relative w-full mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full rounded-xl shadow-lg"
        controls={false}
        onTimeUpdate={handleProgress}
      />

    {!isPlaying && (
    <button
        onClick={togglePlay}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl z-10 bg-black bg-opacity-50 rounded-full p-6 hover:bg-opacity-75 transition-all duration-200"
    >
        <Play size={40} />
    </button>
    )}


      {/* Controls container */}
      {isControlsVisible && (
        <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 bg-black bg-opacity-50 p-2 rounded-xl">
          {/* Progress bar */}
          <div
            className="w-full h-2 bg-gray-700 rounded overflow-hidden cursor-pointer"
            onClick={handleProgressClick}
          >
            <div className="h-full bg-primary" style={{ width: `${progress}%` }}></div>
          </div>
          {/* Controls buttons */}
          <div className="flex gap-4 items-center">
            <button onClick={togglePlay} className="text-white">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button onClick={toggleMute} className="text-white">
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <button onClick={toggleFullscreen} className="text-white">
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
