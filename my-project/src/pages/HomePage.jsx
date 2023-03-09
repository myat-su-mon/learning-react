import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {debounce, result} from 'lodash';
import axios from 'axios';
import Card from '../components/Card';

const HomePage = () => {

  const [name, setName] = useState(null);
  const [songs, setSongs] = useState([]);

  const getSongs = async() => {
    const {data} = await axios.get(
      "https://youtube-music-downloader-mp3.p.rapidapi.com/v2/search",
      {
        params: {
          query: `${name}`
        },
        headers: {
          'X-RapidAPI-Key': '2f6f581b26msh62189312f511da9p137602jsn2bca03d5e6a5',
          'X-RapidAPI-Host': 'youtube-music-downloader-mp3.p.rapidapi.com'
        },
      });
      setSongs(data?.result?.songs);
      console.log(data?.result?.songs);
  }

  useEffect(()=> {
    getSongs()
  }, [name]);

  return (
    <div className='container mx-auto'>
      <input type="text" 
      className='border-b-2 border-gray-500 outline-none' 
      placeholder='Search by Artist'
      // value={name}
      onChange={debounce((e) => setName(e.target.value),1000)}/>

      {songs?.map(song=> <Card key={song?.id} song={song}/>)}
    </div>
  )
}

export default HomePage
