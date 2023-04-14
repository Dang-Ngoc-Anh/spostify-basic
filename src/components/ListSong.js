import React, { useContext, useEffect, useState } from 'react'
import { songs } from '../Context'

export default function ListSong() {

  //useContext : Lay value state
  const {DataSongs , handleSetSong , song} = useContext(songs);
  // use state xem la song nao
  const [idSong , setidSong]  = useState(0);

  const handlePlaySong = (idSong) =>{
      setidSong(idSong);
      handleSetSong(idSong);
  }

  useEffect(() => {
    setidSong(song.id)
  } , [song])
  return (
    <div className='col-span-2 overflow-y-scroll '>
      <table className='table-auto w-full '>
        <thead className='text-white text-xl font-bold'>
          <tr>
            <td>#</td>
            <td>Title</td>
            <td>Author</td>
            <td><i class="fa-solid fa-download"></i></td>
          </tr>
        </thead>
        <tbody className=''>
          {
            DataSongs.map((song , index) =>(
              <tr className={`bg-slate-800 text-gray-500 h-10 hover:bg-gray-300
              ${idSong === song.id && 'text-teal-600'} `}
              key={index} 
              onClick = {() => handlePlaySong(song.id)}
              >  
                <td>{index + 1}</td>
                <td>{song.name}</td>
                <td>{song.author}</td>
                <td>
                  <a href={song.url}>
                     <i className='fa fa-download'></i>
                  </a>
                  </td>
              </tr> 
            ))}
        </tbody>
      </table>
    </div>
  )
}
