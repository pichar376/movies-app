import ReactPlayer from "react-player";
import styled from "styled-components";
import useVideo from "./hooks/useVideo";
import video from "./joker.mp4";
import volume from "./alto-volumen.png"
import mute from "./Mute-Sound-PNG-Free-Download.png"

const MyStyleVideo = styled.div`
position:relative;
background-color:red;
@media(max-width:770px){
  margin:3rem 0 0 0;
  width:70vw;
background-color:grey;

svg:hover {
  cursor: pointer;
}  
}
.video {
  width: 100%;
  object-fit: cover;
  min-height: 500px;
  max-height: 600px; }


 
  

`

const MyStyledVolume = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  margin-right: 60px;
  margin-bottom: 200px;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 0.1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; 
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(1.04);
    transition: 200ms; }
   img {
    height: 25px;
    width: 25px; }
    img::selection {
      color: rgba(255, 255, 255, 0.8); }

`
const Video = () => {

  const { muted, scrollY, handleMuted } = useVideo()
  const minWidth = "450px";
  const maxWidth = "1200px";

  return (
    < MyStyleVideo>

      <video className="video" loop autoPlay muted={true}>

        <source src={video} />


      </video>


      < MyStyledVolume className="volume" onClick={handleMuted}>
        <img src={
          muted
            ? "https://i.ibb.co/ZBggBTd/mute.png"
            : "https://i.ibb.co/k6JLmFc/unmute.png"
        } alt="volume" />
      </ MyStyledVolume >

    </ MyStyleVideo>
  );
}

export default Video;