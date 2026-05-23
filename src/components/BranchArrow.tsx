import type { FunctionComponent } from "react"

const BranchArrow: FunctionComponent<{ position: [ number, number, number ]}> = ( { position }) => {

    return (

        <group position={position}>

            <mesh position={[0, 0, 0]}>

                <boxGeometry args={[ 0.4, 0.01, 1 ]}/>
                <meshStandardMaterial color=""/>

            </mesh>

            <mesh position={[0.2, 0, 0]}>

                <boxGeometry args={[ 0.01, 1.5, 1 ]}/>
                <meshStandardMaterial color=""/>

            </mesh>

            <mesh position={[0.38, 0.75, 0]}>

                <boxGeometry args={[ 0.375, 0.01, 1 ]}/>
                <meshStandardMaterial color=""/>

            </mesh>

            <mesh position={[0.38, -0.75, 0]}>

                <boxGeometry args={[ 0.375, 0.01, 1 ]}/>
                <meshStandardMaterial color=""/>

            </mesh>

        </group>

    )

}

export default BranchArrow