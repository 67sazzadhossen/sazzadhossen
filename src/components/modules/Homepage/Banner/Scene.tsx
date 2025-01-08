import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import { Environment, OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <div className="w-[80vw] h-screen  ">
      <Canvas>
        {/* Adds directional light */}
        <OrbitControls enableZoom={false}></OrbitControls>
        <Environment preset="city"></Environment>
        <Model></Model>
      </Canvas>
    </div>
  );
};

export default Scene;
