import React, { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { songs } from '../Context';
export default function Playing() {
  const {song , handleSetSong} = useContext(songs)
  const clickNext = () =>{
    handleSetSong(song.id + 1)
  }

  const clickPrev = () =>{
    handleSetSong(song.i - 1)

  }

  return (
    <div>
        <AudioPlayer
        src={song.url}
        className='bg-playing ' 
        layout="stacked-reverse" 
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={clickNext}
        onClickPrevious={clickPrev}
        />
    </div>
  )
}
