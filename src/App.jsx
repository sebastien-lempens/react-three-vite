import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

const World = () => {
  const boxRef = useRef();
  useFrame((state, delta) => {
    boxRef.current.rotation.y += 0.02;
  });

  return (
    <>
      <Box ref={boxRef} args={[1, 1, 1]} rotation={[0.5, 0, 0]}>
        <meshNormalMaterial />
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
