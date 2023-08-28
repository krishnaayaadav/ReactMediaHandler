
import { useState,useEffect } from "react";
import VideoItem from "./VideoItem";
import {videoSerivices} from '../apiservices/videoservices';

import './VideoStyle.css';


export default function AllVideos(){
   const [getVideos, setVideos] = useState([]);

   useEffect( ()=>{
      videoSerivices().then(
         res => {
            if(res.status === 200){
               console.log(res.data)
               setVideos(res.data)
            }
         }
      )
   }, [getVideos.length] )

   
   return(
      < >
          <h4 className="mt-5"><a href="" target="_blank">React Media Handler App</a></h4>
         <p>This is created using Django Rest Framework APIs and React JS </p>
              
      {
         
         getVideos.length  ? getVideos.map( video => ( <VideoItem video={video} /> ) )  : 'No video found'

         }
      </>
   )
};
