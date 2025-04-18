// StarsBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function StarsBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadStarsPreset(engine); // load the stars preset
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "stars",
        fullScreen: { enable: true, zIndex: -1 }, // background behind everything
      }}
    />
  );
}
