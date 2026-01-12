/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import * as THREE from 'three';

interface Card3DModelProps {
  scale: number;
  positionY: number;
  rotationY: number;
  enableFloat: boolean;
  mouseX: number;
  mouseY: number;
}

function Card3DModel({ scale, positionY, rotationY, enableFloat, mouseX, mouseY }: Card3DModelProps) {
  const meshRef = useRef<THREE.Group>(null);

  // Load the FBX model
  const fbx = useLoader(FBXLoader, '/3d/card.fbx');

  // Animation effects (subtle floating)
  useFrame(() => {
    if (meshRef.current) {
      if (enableFloat) {
        meshRef.current.position.y = positionY + Math.sin(Date.now() * 0.0005) * 0.1;
      } else {
        meshRef.current.position.y = positionY;
      }

      // 3D tilt effect based on mouse position (very subtle)
      const targetRotationX = mouseY * 0.15; // Tilt on X axis (up/down)
      const targetRotationY = rotationY + mouseX * 0.15; // Tilt on Y axis (left/right)

      // Smooth lerp to target rotation
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={fbx}
      scale={scale}
      position={[0, positionY, 0]}
      rotation={[0, rotationY, 0]}
    />
  );
}

export default function Card3D() {
  // Dev mode state
  const [devMode, setDevMode] = useState(false);

  // Mouse position state (normalized -1 to 1)
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Camera controls
  const [cameraX, setCameraX] = useState(0.81);
  const [cameraY, setCameraY] = useState(0.19);
  const [cameraZ, setCameraZ] = useState(2.79);
  const [fov, setFov] = useState(30);

  // Model controls
  const [scale, setScale] = useState(0.44);
  const [positionY, setPositionY] = useState(0.10);
  const [rotationY, setRotationY] = useState(0.70);

  // Orbit controls
  const [enableOrbit, setEnableOrbit] = useState(false);
  const [enableFloat, setEnableFloat] = useState(false);

  // Orbit control tracking
  const orbitControlsRef = useRef<any>(null);
  const [orbitTarget, setOrbitTarget] = useState({ x: 0, y: 0, z: 0 });
  const [orbitCameraPos, setOrbitCameraPos] = useState({ x: 0.81, y: 0.19, z: 2.79 });
  const [orbitPolarAngle, setOrbitPolarAngle] = useState(1.5);
  const [orbitAzimuthalAngle, setOrbitAzimuthalAngle] = useState(0.28);

  const copyToClipboard = () => {
    const config = {
      camera: {
        position: [cameraX, cameraY, cameraZ],
        fov
      },
      model: {
        scale,
        positionY,
        rotationY
      },
      orbitControls: enableOrbit ? {
        target: [orbitTarget.x, orbitTarget.y, orbitTarget.z],
        cameraPosition: [orbitCameraPos.x, orbitCameraPos.y, orbitCameraPos.z],
        polarAngle: orbitPolarAngle,
        azimuthalAngle: orbitAzimuthalAngle
      } : null,
      enableFloat
    };
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    alert('Configuration copied to clipboard!');
  };

  // Update orbit control values in real-time
  const handleOrbitChange = () => {
    if (orbitControlsRef.current) {
      const controls = orbitControlsRef.current;
      setOrbitTarget({
        x: parseFloat(controls.target.x.toFixed(2)),
        y: parseFloat(controls.target.y.toFixed(2)),
        z: parseFloat(controls.target.z.toFixed(2))
      });
      setOrbitCameraPos({
        x: parseFloat(controls.object.position.x.toFixed(2)),
        y: parseFloat(controls.object.position.y.toFixed(2)),
        z: parseFloat(controls.object.position.z.toFixed(2))
      });
      setOrbitPolarAngle(parseFloat(controls.getPolarAngle().toFixed(2)));
      setOrbitAzimuthalAngle(parseFloat(controls.getAzimuthalAngle().toFixed(2)));
    }
  };

  // Handle mouse move for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize to -1 to 1 range
    const normalizedX = (x / rect.width) * 2 - 1;
    const normalizedY = -((y / rect.height) * 2 - 1);

    setMouseX(normalizedX);
    setMouseY(normalizedY);
  };

  const handleMouseLeave = () => {
    // Reset to center when mouse leaves
    setMouseX(0);
    setMouseY(0);
  };

  return (
    <div
      className="w-full h-[500px] relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dev Mode Panel */}
      {devMode && (
        <div className="absolute top-4 right-4 z-50 bg-black/90 border border-blue-500/50 rounded-lg p-4 max-w-xs max-h-[450px] overflow-y-auto backdrop-blur-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-bold text-sm">Dev Mode</h3>
            <button
              onClick={() => setDevMode(false)}
              className="text-white/70 hover:text-white text-xs"
            >
              ✕
            </button>
          </div>

          {/* Camera Controls */}
          <div className="mb-4">
            <h4 className="text-blue-400 text-xs font-semibold mb-2">Camera</h4>

            <label className="text-white/70 text-xs block mb-1">X: {cameraX.toFixed(2)}</label>
            <input
              type="range"
              min="-5"
              max="5"
              step="0.1"
              value={cameraX}
              onChange={(e) => setCameraX(parseFloat(e.target.value))}
              className="w-full mb-2"
            />

            <label className="text-white/70 text-xs block mb-1">Y: {cameraY.toFixed(2)}</label>
            <input
              type="range"
              min="-2"
              max="5"
              step="0.1"
              value={cameraY}
              onChange={(e) => setCameraY(parseFloat(e.target.value))}
              className="w-full mb-2"
            />

            <label className="text-white/70 text-xs block mb-1">Z: {cameraZ.toFixed(2)}</label>
            <input
              type="range"
              min="0.5"
              max="10"
              step="0.1"
              value={cameraZ}
              onChange={(e) => setCameraZ(parseFloat(e.target.value))}
              className="w-full mb-2"
            />

            <label className="text-white/70 text-xs block mb-1">FOV: {fov}</label>
            <input
              type="range"
              min="10"
              max="120"
              step="1"
              value={fov}
              onChange={(e) => setFov(parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Model Controls */}
          <div className="mb-4">
            <h4 className="text-blue-400 text-xs font-semibold mb-2">Model</h4>

            <label className="text-white/70 text-xs block mb-1">Scale: {scale.toFixed(2)}</label>
            <input
              type="range"
              min="0.1"
              max="2"
              step="0.05"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-full mb-2"
            />

            <label className="text-white/70 text-xs block mb-1">Position Y: {positionY.toFixed(2)}</label>
            <input
              type="range"
              min="-2"
              max="3"
              step="0.1"
              value={positionY}
              onChange={(e) => setPositionY(parseFloat(e.target.value))}
              className="w-full mb-2"
            />

            <label className="text-white/70 text-xs block mb-1">Rotation Y: {rotationY.toFixed(2)}</label>
            <input
              type="range"
              min="0"
              max="6.28"
              step="0.1"
              value={rotationY}
              onChange={(e) => setRotationY(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Options */}
          <div className="mb-4">
            <h4 className="text-blue-400 text-xs font-semibold mb-2">Options</h4>

            <label className="flex items-center gap-2 text-white/70 text-xs mb-2">
              <input
                type="checkbox"
                checked={enableOrbit}
                onChange={(e) => setEnableOrbit(e.target.checked)}
                className="w-4 h-4"
              />
              Enable Orbit Controls
            </label>

            <label className="flex items-center gap-2 text-white/70 text-xs">
              <input
                type="checkbox"
                checked={enableFloat}
                onChange={(e) => setEnableFloat(e.target.checked)}
                className="w-4 h-4"
              />
              Enable Float Animation
            </label>
          </div>

          {/* Orbit Control Values */}
          {enableOrbit && (
            <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded">
              <h4 className="text-blue-400 text-xs font-semibold mb-2">Orbit Control Values</h4>

              <div className="text-white/70 text-[10px] space-y-1">
                <div>Target: [{orbitTarget.x}, {orbitTarget.y}, {orbitTarget.z}]</div>
                <div>Camera: [{orbitCameraPos.x}, {orbitCameraPos.y}, {orbitCameraPos.z}]</div>
                <div>Polar Angle: {orbitPolarAngle}</div>
                <div>Azimuthal: {orbitAzimuthalAngle}</div>
              </div>
            </div>
          )}

          <button
            onClick={copyToClipboard}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold py-2 rounded transition-colors"
          >
            Copy Config
          </button>
        </div>
      )}

      {/* Uncomment below to enable dev mode */}
      {/* {!devMode && (
        <button
          onClick={() => setDevMode(true)}
          className="absolute top-4 right-4 z-50 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded transition-colors"
        >
          Dev Mode
        </button>
      )} */}
      {/* Platform Image */}
      <img
        src="/obj1.png"
        alt="Platform"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-auto z-0"
        style={{
          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 0 60px rgba(59, 85, 123, 0.4))'
        }}
      />
      <Canvas
        camera={{ position: [cameraX, cameraY, cameraZ], fov }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} />
        <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.6} penumbra={1} color="#3b82f6" />
        <pointLight position={[2, 2, 2]} intensity={0.5} color="#60a5fa" />
        <Suspense fallback={null}>
          <Card3DModel
            scale={scale}
            positionY={positionY}
            rotationY={rotationY}
            enableFloat={enableFloat}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        </Suspense>
        {enableOrbit && (
          <OrbitControls
            ref={orbitControlsRef}
            enableZoom={true}
            enablePan={true}
            autoRotate={false}
            onChange={handleOrbitChange}
          />
        )}
      </Canvas>
    </div>
  );
}
