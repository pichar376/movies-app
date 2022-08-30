import { useEffect, useState } from "react";

const useVideo = () => {
  const [scrollY, setScrollY] = useState(0);
  const [muted, setMuted] = useState(true);
  const [volumeStatus, setVolumeStatus] = useState({
    volume: "active"
  });

  useEffect(() => {
    //console.log("Moviendo el Scroll");



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