import { RoundedBox, Text } from "@react-three/drei";
import { useAtom } from "jotai";
import { type FunctionComponent } from "react";
import { courseAtom, type CourseType } from "../../atoms";

const CourseBlock: FunctionComponent<{ course: CourseType, position: [ number, number, number ], size?: [ number, number, number ], arrowPos?: number}> = ({ course, position, size = [ 2, 0.5, 1 ], arrowPos }) => {

    const borderRadius = 0.05;

    const borderWidth = 0.001;

    const [ courseState, setCourseState ] = useAtom( courseAtom );

    return (

        <group position={position} onPointerDown={() => {

            setCourseState( course );

        }}>

            <RoundedBox args={[ size[0] + borderWidth, size[1] + borderWidth, size[2] ]} radius={borderRadius}>

                <meshStandardMaterial color={courseState === course ? "#abd841" : "#5a5a5a"}/>

            </RoundedBox>
            
            <RoundedBox args={size} radius={borderRadius}>

                <meshStandardMaterial color="#474747"/>

            </RoundedBox>
            
            { arrowPos && <mesh position={[arrowPos, 0, 0]}>

                <boxGeometry args={[ 1.05, 0.01, 1 ]}/>
                <meshStandardMaterial color=""/>

            </mesh>}


            <Text
                fontSize={0.2}
                position={[0.02, 0.02, 2]}
                anchorX="center"
                anchorY="middle"
                textAlign="center"
            >

                { course }

            </Text>


        </group>

    )
    
}

export default CourseBlock