import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Procedural particle system that drifts and reacts to scroll
function ParticleField({ scrollY }: { scrollY: number }) {
  const ref = useRef<THREE.Points>(null)
  
  // Create static positions inside a Float32Array
  const [positions] = useState(() => {
    const arr = new Float32Array(300 * 3)
    for (let i = 0; i < 300; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 15
      arr[i * 3 + 1] = (Math.random() - 0.5) * 15
      arr[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return arr
  })

  useFrame((state) => {
    if (ref.current) {
      // Gentle rotation
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.015
      
      // Reactive to scroll
      ref.current.position.y = -scrollY * 0.003
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#14b8a6"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  )
}

// Glowing organic dental structure / premium medical shape
function GlowingOrb({ scrollY }: { scrollY: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      // Gentle breathing animation
      const scale = 1.6 + Math.sin(t * 1.5) * 0.05 + (hovered ? 0.1 : 0)
      meshRef.current.scale.set(scale, scale, scale)
      
      // Floating motion
      meshRef.current.position.y = Math.sin(t * 1.2) * 0.15 - (scrollY * 0.001)
      meshRef.current.rotation.x = t * 0.2
      meshRef.current.rotation.y = t * 0.3
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = -t * 0.15
      ringRef.current.rotation.y = t * 0.4
      ringRef.current.position.y = Math.sin(t * 1.2) * 0.15 - (scrollY * 0.001)
    }
  })

  return (
    <group>
      {/* Central Core - High Premium Glass-like Orb with soft color */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusKnotGeometry args={[0.5, 0.18, 120, 16, 2, 3]} />
        <meshPhysicalMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.1}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          transmission={0.6}
          thickness={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Orbiting medical ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[1.5, 0.03, 8, 64]} />
        <meshBasicMaterial color="#14b8a6" transparent opacity={0.3} />
      </mesh>
    </group>
  )
}

export default function ThreeScene() {
  const [scrollY, setScrollY] = useState(0)
  const [hasWebGL, setHasWebGL] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Check WebGL availability to gracefully fall back
    try {
      const canvas = document.createElement('canvas')
      const supportsWebGL = !!(window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
      setHasWebGL(supportsWebGL)
    } catch {
      setHasWebGL(false)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!hasWebGL) {
    // Beautiful, lightweight premium animated CSS/SVG fallback
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
        {/* Soft cyan gradient orb */}
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-radial from-medical-200/40 to-transparent blur-3xl animate-pulse-slow"></div>
        {/* Soft teal gradient orb */}
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] rounded-full bg-radial from-primary-200/30 to-transparent blur-3xl animate-float-delayed"></div>
        {/* SVG animated medical geometric element */}
        <div className="absolute top-[25%] right-[10%] w-96 h-96 opacity-30 animate-spin-slow">
          <svg viewBox="0 0 200 200" className="w-full h-full text-primary-400" fill="none" stroke="currentColor" strokeWidth="0.5">
            <circle cx="100" cy="100" r="80" strokeDasharray="5 5" />
            <circle cx="100" cy="100" r="60" />
            <path d="M 20,100 L 180,100 M 100,20 L 100,180" />
            <rect x="50" y="50" width="100" height="100" rx="10" strokeDasharray="10 5" />
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-80 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 5, 2]} intensity={1.5} />
        <pointLight position={[-3, -3, -3]} intensity={1.0} color="#38bdf8" />
        
        <GlowingOrb scrollY={scrollY} />
        <ParticleField scrollY={scrollY} />
      </Canvas>
    </div>
  )
}
