"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Float,
  Text,
  useTexture,
  Sparkles,
} from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

const useResponsiveSize = () => {
  const [size, setSize] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

const RotatingLogo = ({
  isMobile,
  isTablet,
}: {
  isMobile: boolean;
  isTablet: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/onewavelogo.png");

  const logoSize = isMobile ? 2.2 : isTablet ? 2.0 : 2.5;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      meshRef.current.rotation.z =
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <mesh ref={meshRef}>
        <circleGeometry args={[logoSize, 64]} />
        <meshStandardMaterial
          map={texture}
          side={THREE.DoubleSide}
          emissiveIntensity={0.1}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
};

const ComingSoonText = ({
  isMobile,
  isTablet,
}: {
  isMobile: boolean;
  isTablet: boolean;
}) => {
  const fontSize = isMobile ? 0.65 : isTablet ? 0.6 : 0.8;
  const yPosition = isMobile ? -3.0 : isTablet ? -2.7 : -3.2;

  return (
    <group position={[0, yPosition, 0]}>
      <Text
        fontSize={fontSize}
        color="black"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        characters="COMING SOON"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
        outlineWidth={0.02}
        outlineColor="#3073E7"
      >
        COMING SOON
        <meshStandardMaterial
          color="black"
          emissive="#3073E7"
          emissiveIntensity={0.5}
        />
      </Text>
    </group>
  );
};

const ParticleRing = ({
  isMobile,
  isTablet,
}: {
  isMobile: boolean;
  isTablet: boolean;
}) => {
  const ref = useRef<THREE.Group>(null);

  const particleCount = isMobile ? 50 : isTablet ? 70 : 100;
  const particleScale = isMobile ? 6.5 : isTablet ? 6.5 : 8;
  const particleSize = isMobile ? 2.5 : isTablet ? 3.2 : 4;

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      ref.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref} rotation={[Math.PI / 3, 0, 0]}>
      <Sparkles
        count={particleCount}
        scale={particleScale}
        size={particleSize}
        speed={0.4}
        opacity={0.5}
        color="#3073E7"
      />
    </group>
  );
};

const Scene = ({
  isMobile,
  isTablet,
}: {
  isMobile: boolean;
  isTablet: boolean;
}) => {
  const starCount = isMobile ? 1500 : isTablet ? 2200 : 3000;
  const groupYPosition = isMobile ? 0.4 : isTablet ? 0.35 : 0.5;

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <pointLight position={[-10, -5, -5]} intensity={1} color="#3073E7" />

      <Stars
        radius={100}
        depth={50}
        count={starCount}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <group position={[0, groupYPosition, 0]}>
        <RotatingLogo isMobile={isMobile} isTablet={isTablet} />
        <ParticleRing isMobile={isMobile} isTablet={isTablet} />
      </group>

      <ComingSoonText isMobile={isMobile} isTablet={isTablet} />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </>
  );
};

export default function ThreeAnimation() {
  const { width } = useResponsiveSize();

  const isMobile = width < 640;
  const isTablet = width >= 640 && width < 1024;

  const cameraPosition: [number, number, number] = isMobile
    ? [0, 0, 9]
    : isTablet
    ? [0, 0, 10.5]
    : [0, 0, 10];
  const cameraFov = isMobile ? 50 : isTablet ? 48 : 45;

  return (
    <div className="w-full h-full min-h-[280px]">
      <Canvas camera={{ position: cameraPosition, fov: cameraFov }}>
        <Scene isMobile={isMobile} isTablet={isTablet} />
      </Canvas>
    </div>
  );
}
