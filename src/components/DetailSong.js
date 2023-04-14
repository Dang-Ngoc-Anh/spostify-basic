import React, { useContext } from 'react'
import { songs } from '../Context'

export default function DetailSong() {
  const {song} = useContext(songs)
  
  return (
    <div className='col-span-1'>
      <h2 className=' text-cyan-200 font-bold text-3xl px-2 text-left'  >Now playing</h2>
      <h2 className=' text-gray-400 text-2xl  px-2 text-left' >{song.name}</h2>
      <div className='w-[240px] m-auto mt-10'> 
        <img src={song.links.images[0].url} alt='avata'></img>
      </div>

      <div className='flex justify-evenly items-center mt-10'>
        <img  className='w-[70px] rounded-full mx-3' src={song.links.images[0].url}  alt='avata2'></img>
        <span className='text-white text-2xl'>{song.author}</span> 
      </div>
    </div>
  )
}
