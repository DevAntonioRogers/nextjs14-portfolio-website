"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, {
  initParticlesEngine,
} from "@tsparticles/react";
import particlesConfig from "@/lib/particles-config";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";
const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (
    container?: Container
  ): Promise<void> => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesConfig as ISourceOptions}
      />
    );
  }

  return <></>;
};

export default ParticlesBackground;
