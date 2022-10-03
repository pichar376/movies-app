import ReactPlayer from "react-player";
import styled from "styled-components";
import useVideo from "./hooks/useVideo";
import video from "./joker.mp4";
import volume from "./alto-volumen.png"
import mute from "./Mute-Sound-PNG-Free-Download.png"
import { useState } from "react";

const MyStyleVideo = styled.div`
position:relative;


svg:hover {
  cursor: pointer;
}  

.video {
  width: 100%;
  object-fit: cover;
  min-height: 300px;
  max-height: 500px;
  @media (min-widht:1200px) {

    height:1200px;
    
   }
   }

   
   
   `

const MyStyledVolume = styled.div`
  position: absolute;
  right: 0;
  bottom:40%;
  margin-right: 5.5vw;
  height:60px;
  width:60px;
  outline: none;
  background-color: Transparent;
  border: .5px solid white;
  color: white;
  border-radius: 50%;
  transition: 200ms;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width:678px){
     height:40px;
     width:40px;
     bottom:10%;

       }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.04);
    transition: 200ms;
   cursor:poineter;
  }
   img {
    height: 3.5rem;
    width:3.5rem;
   padding:15px;

   @media(max-width:678px){
      height: 3rem;
      width:3rem;
  
     
   }
  }
    img::selection {
      color: rgba(255, 255, 255, 0.8); }

`
const Video = () => {

  const { handleMuted, volumeController } = useVideo()


  return (
    < MyStyleVideo>

      <video className="video" loop autoPlay muted={volumeController.videoMuted}>

        <source src={video} />


      </video>


      < MyStyledVolume className="volume" onClick={handleMuted}>
        <img src={
          volumeController.videoMuted
            ? "https://i.ibb.co/k6JLmFc/unmute.png"
            : "https://i.ibb.co/ZBggBTd/mute.png"
        } alt="volume" />
      </ MyStyledVolume >

    </ MyStyleVideo>
  );
}

export default Video;