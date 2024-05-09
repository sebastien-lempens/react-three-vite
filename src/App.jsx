import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import fragmentShader from "./shaders/fragment.glsl";
import vertexShader from "./shaders/vertex.glsl";
import { Uniform } from "three";

const World = () => {
  const boxRef = useRef();
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
      <Box ref={boxRef} args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
        <shaderMaterial transparent={true} uniforms={uniforms} fragmentShader={fragmentShader} vertexShader={vertexShader} />
      </Box>
      <ambientLight />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <OrbitControls />
      <World />
    </Canvas>
  );
};

export default App;
