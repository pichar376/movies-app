import { useEffect, useState } from "react";


const initialVolumeController = {
  iconVolume: false,
  videoMuted: true,
  statusVolume: ""
}

const useVideo = () => {



  const [volumeController, setVolumeController] = useState(initialVolumeController
  );
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {




    const detectedScroll = () => setScrollY(window.pageYOffset);


    window.addEventListener("scroll", detectedScroll);




    if (scrollY > 750 && volumeController.statusVolume === "active") {
      setVolumeController({ ...volumeController, videoMuted: true })
      console.log("s c r oll")
    }
    if (scrollY < 750 && volumeController.statusVolume === "active") {
      setVolumeController({ ...volumeController, videoMuted: false })
    }
  }, [scrollY]);

  const handleMuted = () => {
    if (volumeController.videoMuted) {
      setVolumeController({ ...volumeController, videoMuted: false, iconVolume: true, statusVolume: "active" });
    } else {
      setVolumeController({ ...volumeController, videoMuted: true, iconVolume: false, statusVolume: "desactive" });
    }
  }


  return {
    scrollY,
    handleMuted,
    volumeController,
  }

}

export default useVideo;