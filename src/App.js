import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { songs } from './Context';
import DataSongs from './data/songs.json'
import Playing from './components/Playing';
import { useState } from 'react';


function App() {

  const [song , setSong] = useState(DataSongs[1]);
  
  const handleSetSong =  (idSong) =>{
  
  const song =  DataSongs.find(song => song.id === idSong)
        // console.log(song.id === idSong)
        if(!song) setSong(DataSongs.id[0])
        else 
          setSong(song);
  }

  return (
    <div className="App">
    <songs.Provider value={{DataSongs , song  , handleSetSong}}>
    <Navbar />
      <div className='grid grid-cols-3 bg-slate-700 screen-navbar-player h-screen-navbar-player overflow-hidden'>
        {/*Noi dung cua detailSong*/}
        <DetailSong></DetailSong>
        {/* span -2  */}
        <ListSong></ListSong>
      </div>
      <Playing></Playing>
    </songs.Provider>
    </div>

  );
}

export default App;
