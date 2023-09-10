import { Canvas } from "@react-three/fiber"
import { Environment, Center, OrbitControls } from "@react-three/drei"
import Shirt from "./shirt"
import Backdrop from "./Backdrop"
import CamaraRig from "./CamaraRig"

const CanvasModel = () => {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 0], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
            className="w-full max-w-full h-full transition-all ease-in"
        >
            <ambientLight intensity={0.4} />
            {/* <Environment preset="forest" /> */}
            <CamaraRig>
                <Backdrop />
                <Center>
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                    <Shirt />
                </Center>
            </CamaraRig>
        </Canvas>
    )
}

export default CanvasModel
