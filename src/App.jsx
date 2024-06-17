import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";
import { MathUtils, Uniform } from "three";
import { Leva, useControls, folder } from "leva";
const World = () => {
  const boxRef = useRef();
  const { position } = useControls({
    position: {
      value: [0, 0, 0],
      step: 0.1,
    },
  });
  const [uniforms] = useState(() => {
    return {
      uTime: new Uniform(0),
    };
  });
  useFrame((state, delta) => {
    uniforms.uTime.value = state.clock.getElapsedTime();
  });

  return (
    <>
      <Box ref={boxRef} args={[1, 1, 1]} position={[...position]} rotation={[0.5, 0, 0]}>
        <shaderMaterial
          key={MathUtils.generateUUID()}
          transparent={true}
          uniforms={uniforms}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
        />
      </Box>
      <ambientLight />
    </>
  );
};

const App = () => {
  return (
    <>
      <Canvas>
        <OrbitControls />
        <World />
      </Canvas>
      <Leva flat oneLineLabels collapsed={false} />
    </>
  );
};

export default App;
