import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Mesh } from "three";
import { GLTF } from "three-stdlib";
import * as THREE from "three";

type GLTFResult = GLTF & {
  nodes: {
    Torus002: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export function Model() {
  const { nodes, materials } = useGLTF("/torrus.glb") as GLTFResult;
  const { viewport } = useThree();
  const mesh = useRef<Mesh | null>(null);

  // Set the material color
  useEffect(() => {
    if (materials.Material) {
      materials.Material.color.set(0xdf0d5491);
    }
  }, [materials]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.02; // Adjust rotation speed if needed
    }
  });

  return (
    <group scale={viewport.width / 2}>
      <mesh
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={materials.Material} // The material is now updated with a new color
      />
    </group>
  );
}

useGLTF.preload("/torrus.glb");
