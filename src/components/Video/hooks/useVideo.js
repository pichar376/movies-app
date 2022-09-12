import { useContext, useEffect, useState } from "react";
import MoviesContext from "../../../context/MoviesContext";

const useVideo = () => {

  const { muted, setMuted, scrollY, setScrollY, volumeStatus, setVolumeStatus } = useContext(MoviesContext)
  useEffect(() => {




    const detectarScroll = () => setScrollY(window.pageYOffset);


    window.addEventListener("scroll", detectarScroll);


    if (scrollY > 750 && volumeStatus.volume === "active") {
      setMuted(true)
    }
    if (scrollY < 750 && volumeStatus.volume === "active") {
      setMuted(false)
    }



    // return () => {
    //   window.removeEventListener("scroll", detectarScroll);

    // };

  }, [scrollY]);

  const handleMuted = () => {
    setMuted(!muted)
    if (muted) {
      setVolumeStatus({ volume: "active" })
    } else {
      setVolumeStatus({ volume: "desactive" })
    }
  }


  return {
    scrollY,
    muted,
    handleMuted
  }

}

export default useVideo;