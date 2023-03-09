import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Detail = () => {
    const {id} = useParams();
    const [url, setUrl] = useState("");

    const getUrl = async() => {
        const {data} = await axios.get(
        "https://youtube-music-downloader-mp3.p.rapidapi.com/get_download_url",
        {
            params: {id: 'XbGs_qK2PQA', ext: 'mp3'},
            headers: {
                'X-RapidAPI-Key': '2f6f581b26msh62189312f511da9p137602jsn2bca03d5e6a5',
                'X-RapidAPI-Host': 'youtube-music-downloader-mp3.p.rapidapi.com'
            },
        });
    };

  return (
    <div>
        <a target={"_blank"} href={url} 
        className='text-white bg-blue-700 px-9'>download - {id} </a>
    </div>
  )
}

export default Detail