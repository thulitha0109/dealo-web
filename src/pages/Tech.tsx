import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Html, useProgress } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Group } from 'three';
import Layout from './Layout';

// Loader component to show progress
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-lg font-semibold text-gray-700">
        {progress.toFixed(0)}% Loading
      </div>
    </Html>
  );
};

// Component to load and animate FBX model
interface FloatingFBXProps {
  url: string;
}

const FloatingFBX: React.FC<FloatingFBXProps> = ({ url }) => {
  const model = useLoader(FBXLoader, url);
  const ref = useRef<Group>(null);

  useFrame((state) => {
    if (ref.current) {
      // Float animation
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      ref.current.rotation.y -= 0.005; // slight rotation
    }
  });

  return <primitive ref={ref} object={model as any} scale={0.25} />;
};

const Tech = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center px-8 py-16 bg-white">
        {/* Left side */}
        <div className="md:col-span-1 text-left space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Where ideas meet innovation
          </h2>
          <p className="text-lg text-gray-600">
            Experience cutting-edge technology brought to life with creativity
            and vision. Explore the future today.
          </p>
        </div>

        {/* Right side - 3D model */}
        <div className="md:col-span-2 h-[540px] w-full bg-gradient-to-tl from-gray-100 to-gray-300 rounded-xl">
          <Canvas camera={{ position: [6, 3, 1], fov: 45 }}>
            {/* Lights */}
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <spotLight position={[-5, 5, 5]} intensity={0.5} />

            <Suspense fallback={<Loader />}>
              <FloatingFBX url="/models/satellite_fbx.fbx" />
            </Suspense>

            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          </Canvas>
        </div>
      </div>
    </Layout>
  );
};

export default Tech;
