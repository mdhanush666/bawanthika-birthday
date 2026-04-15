import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const Heart3D = ({ position, scale, color }: { position: [number, number, number]; scale: number; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0] * 2) * 0.3;
    }
  });

  const heartShape = useMemo(() => {
    const shape = new THREE.Shape();
    const x = 0, y = 0;
    shape.moveTo(x, y + 0.35);
    shape.bezierCurveTo(x, y + 0.35, x - 0.05, y + 0.3, x - 0.25, y + 0.3);
    shape.bezierCurveTo(x - 0.55, y + 0.3, x - 0.55, y + 0.575, x - 0.55, y + 0.575);
    shape.bezierCurveTo(x - 0.55, y + 0.8, x - 0.35, y + 1.04, x, y + 1.2);
    shape.bezierCurveTo(x + 0.35, y + 1.04, x + 0.55, y + 0.8, x + 0.55, y + 0.575);
    shape.bezierCurveTo(x + 0.55, y + 0.575, x + 0.55, y + 0.3, x + 0.25, y + 0.3);
    shape.bezierCurveTo(x + 0.1, y + 0.3, x, y + 0.35, x, y + 0.35);
    return shape;
  }, []);

  const geometry = useMemo(() => {
    return new THREE.ExtrudeGeometry(heartShape, {
      depth: 0.15,
      bevelEnabled: true,
      bevelSegments: 3,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    });
  }, [heartShape]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.4} />
      </mesh>
    </Float>
  );
};

const Sparkle3D = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 2;
      const s = 0.5 + Math.sin(state.clock.elapsedTime * 3 + position[0]) * 0.3;
      ref.current.scale.setScalar(s);
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.08, 0]} />
      <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.5} />
    </mesh>
  );
};

const ThreeScene = () => {
  const hearts = useMemo(() => [
    { pos: [-2, 1, -1] as [number, number, number], scale: 0.5, color: "#e84393" },
    { pos: [2.5, -0.5, -2] as [number, number, number], scale: 0.35, color: "#fd79a8" },
    { pos: [-1.5, -1, -1.5] as [number, number, number], scale: 0.4, color: "#e17055" },
    { pos: [1, 1.5, -2.5] as [number, number, number], scale: 0.3, color: "#ff7675" },
    { pos: [0, -1.5, -1] as [number, number, number], scale: 0.25, color: "#fab1a0" },
    { pos: [-2.5, 0.5, -2] as [number, number, number], scale: 0.45, color: "#e84393" },
    { pos: [2, 0.8, -1.5] as [number, number, number], scale: 0.3, color: "#fd79a8" },
  ], []);

  const sparkles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      pos: [
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
        -1 - Math.random() * 2,
      ] as [number, number, number],
    })), []
  );

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#ff69b4" />
        <pointLight position={[-5, -3, 3]} intensity={0.5} color="#ffd700" />
        
        {hearts.map((h, i) => (
          <Heart3D key={i} position={h.pos} scale={h.scale} color={h.color} />
        ))}
        
        {sparkles.map((s, i) => (
          <Sparkle3D key={`s-${i}`} position={s.pos} />
        ))}
      </Canvas>
    </div>
  );
};

export default ThreeScene;
