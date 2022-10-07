import ReactPlayer from "react-player";
import styled from "styled-components";
import useVideo from "./hooks/useVideo";
import video from "./joker.mp4";
import volume from "./alto-volumen.png"
import mute from "./Mute-Sound-PNG-Free-Download.png"
import { useState } from "react";

const MyStyleVideo = styled.div`
position:relative;

.details {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  margin-left: 60px;
  margin-bottom: 200px; }

.details-titleContainer {
  overflow: hidden; }
  .details-titleContainer:hover {
    width: auto; }

.details-titleContainer__mainVideoTitle {
  transition: 500ms;
  font-family: "Cinzel", serif;
  color: #bf0603;
  font-size: 80px;
  animation-duration: 3s;
  animation-name: slidein;
  cursor: pointer; }
  .details-titleContainer__mainVideoTitle:hover {
    transition: 500ms;
    transform: scale(1.01); }
  .details-titleContainer__mainVideoTitle::selection {
    color: #f03434; }

.details-descriptionContainer {
  width: 500px;
  overflow: hidden;
  height: 100px;
  margin-top: 0px; }

.details-descriptionContainer__mainVideoDescription {
  font-family: "Cinzel", serif;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  animation-duration: 3.5s;
  animation-name: slidein;
  cursor: pointer;
  transition: 500ms; }
  .details-descriptionContainer__mainVideoDescription:hover {
    transition: 500ms;
    transform: scale(1.01); }
  .details-descriptionContainer__mainVideoDescription::selection {
    color: rgba(255, 255, 255, 0.5); }

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%; }
  to {
    margin-left: 0%;
    width: 100%; } }
@media only screen and (max-width: 925px) {
  .details-titleContainer__mainVideoTitle {
    font-size: 50px; }

  .details-descriptionContainer__mainVideoDescription {
    font-size: 14px; }

  .details {
    margin-bottom: 120px; } }
@media only screen and (max-width: 695px) {
  .details {
    margin-right: 40px; }

  .muteUnmute {
    margin-bottom: 40px; }

  .details-descriptionContainer {
    width: auto;
    word-break: break-all;
    height: auto; } }
@media only screen and (max-width: 465px) {
  .details {
    margin-left: 10px; }

  .details-titleContainer__mainVideoTitle {
    font-size: 30px; } }
@media only screen and (max-width: 375px) {
  .muteUnmute {
    margin-right: 10px; } }
@media only screen and (max-width: 285px) {
  .details-descriptionContainer {
    display: none; } }

svg:hover {
  cursor: pointer;
}  

.video {
  width: 100%;
  object-fit: cover;
  min-height: 500px;
  max-height: 600px;
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

      <div className="details">
        <div className="details-titleContainer">
          <h2 className="details-titleContainer__mainVideoTitle">
            JOKER (2019)
          </h2>
        </div>
        <div className="details-descriptionContainer">
          <p className="details-descriptionContainer__mainVideoDescription">
            In Gotham City, mentally troubled comedian Arthur Fleck is
            disregarded and mistreated by society. He then embarks on a
            downward spiral of revolution and bloody crime. This path brings
            him face-to-face with his alter-ego: the Joker.
          </p>
        </div>
      </div>


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