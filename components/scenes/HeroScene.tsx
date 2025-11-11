import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '@/contexts/ThemeProvider';

/**
 * This component contains the actual 3D objects.
 * It must be a child of the <Canvas> component to use R3F hooks.
 */
function SceneContents() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null!);
  
  // Get our custom theme state
  const { theme } = useTheme();
  
  // Get viewport and mouse state from R3F
  const { viewport, mouse } = useThree();

  // Animate the mesh rotation and mouse follow
  useFrame((state, delta) => {
    // Gentle rotation
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.1;

    // Mouse follow effect
    // We calculate the x/y position based on mouse coordinates
    const x = (mouse.x * viewport.width) / 2.5;
    const y = (mouse.y * viewport.height) / 2.5;
    
    // Use THREE.MathUtils.lerp for a smooth "spring" effect
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y, 0.05);
  });

  // Update material color when the theme changes
  useEffect(() => {
    if (materialRef.current) {
      if (theme === 'night') {
        // Dark chrome
        materialRef.current.color.set('#222222'); 
      } else {
        // Light silver
        materialRef.current.color.set('#FFFFFF');
      }
    }
  }, [theme]);

  return (
    <>
      {/* Basic lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0000FF" /> {/* Blue accent */}
      
      {/* The 3D "Ninja" element */}
      <Icosahedron ref={meshRef} args={[2.5, 0]}> 
        <meshStandardMaterial 
          ref={materialRef}
          metalness={1}  // Makes it metallic
          roughness={0.1} // Makes it shiny
        />
      </Icosahedron>
    </>
  );
}
export function HeroScene() {
  return (
    <Canvas 
      camera={{ position: [0, 0, 7] }} // Move camera back
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%' 
      }}
    >
      <SceneContents />
    </Canvas>
  );
}