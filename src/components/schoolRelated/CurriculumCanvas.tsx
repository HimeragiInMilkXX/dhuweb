import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MOUSE } from "three";
import CourseBlock from "./CourseBlock";
import BranchArrow from "../BranchArrow";
import CameraBounds from "./CameraBounds";
import { useRef } from "react";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const CurriculumCanvas = () => {

    const controlsRef = useRef<OrbitControlsImpl | null>(null);

    return (

        <Canvas orthographic camera={{ position: [3.6, 0.1, 5], zoom: 125 }} style={{ height: '350px' }}>

            <ambientLight intensity={0.5} />

            <directionalLight position={[5, 5, 5]} intensity={5} />

            <CourseBlock position={[0, 0, 0]} course="基礎ツール演習"/>
            <BranchArrow position={[1.2, 0 ,0]}/>
            
            <CameraBounds controlsRef={controlsRef}/>

            <group position={[0, 0.75, 0]}>

                <CourseBlock position={[2.75, 0, 0]} course="Webデザイン演習" arrowPos={1.5}/>
                <CourseBlock position={[6.25, 0, 0]} course="Webサイトプロトタイプ演習" size={[ 3, 0.5, 0 ]} arrowPos={2}/>
                <CourseBlock position={[10.25, 0, 0]} course="Webサイト表現演習応用B" size={[ 3, 0.5, 0 ]}/>

            </group>

            <group position={[0, -0.75, 0]}>

                <CourseBlock position={[3.25, 0, 0]} course="Webサイトマークアップ演習" size={[ 3, 0.5, 0 ]} arrowPos={2}/>
                <CourseBlock position={[7.25, 0, 0]} course="Webサイトスタイリング演習" size={[ 3, 0.5, 0 ]} arrowPos={2}/>
                <CourseBlock position={[11.25, 0, 0]} course="Webサイト表現演習" size={[ 3, 0.5, 0 ]} arrowPos={2}/>
                <CourseBlock position={[15.25, 0, 0]} course="Webサイト制作実践演習" size={[ 3, 0.5, 0 ]}/>

                <BranchArrow position={[16.95, 0 ,0]}/>

                <group position={[ 19, 0, 0 ]}>

                    <CourseBlock position={[0, 0.75, 0]} course="Webサイト表現演習応用A" size={[ 3, 0.5, 0 ]}/>
                    <CourseBlock position={[0.25, -0.75, 0]} course="Webサイト制作プロジェクト演習" size={[ 3.5, 0.5, 0 ]}/>

                </group>

            </group>

            <OrbitControls enableRotate={false} target={[3.5, 0, 0]} maxZoom={150} minZoom={50} ref={controlsRef}
            
                mouseButtons={{

                    LEFT: MOUSE.PAN,
                    RIGHT: MOUSE.PAN,
                    MIDDLE: MOUSE.DOLLY

                }}

            />

        </Canvas>

    )

}

export default CurriculumCanvas