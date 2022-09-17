import ReactPlayer from "react-player";
import styled from "styled-components";
import useVideo from "./hooks/useVideo";
import video from "./joker.mp4";
import volume from "./alto-volumen.png"
import mute from "./Mute-Sound-PNG-Free-Download.png"
import { useState } from "react";

const MyStyleVideo = styled.div`
position:relative;
@media(max-width:770px){
  margin:3rem 0 0 0;
  width:70vw;
background-color:grey;
}
svg:hover {
  cursor: pointer;
}  

.video {
  width: 100%;
  object-fit: cover;
  min-height: 900px;
  max-height: 1200px;
   }
`

const MyStyledVolume = styled.div`
  position: absolute;
  right: 0;
  bottom: 42vh;
  margin-right: 5.5vw;
  height:7.5rem;
  width: 7.5rem;
  outline: none;
  background-color: Transparent;
  border: 1px solid white;
  color: white;
  border-radius: 50%;
  transition: 200ms;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; 
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.04);
    transition: 200ms; }
   img {
    height: 5rem;
    width: 5rem;
   padding:15px;
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