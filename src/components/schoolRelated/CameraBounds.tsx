import { useFrame } from "@react-three/fiber";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three"
import type { FunctionComponent } from "react";

const CameraBounds: FunctionComponent<{ controlsRef: React.RefObject<OrbitControlsImpl | null> }> = ({ controlsRef }) => {

    const minY = -1, maxY = 1, minX = -2, maxX = 25, minZ = 8, maxZ = 10;

    useFrame( ( {camera} ) => {

        const controls = controlsRef.current;

        camera.position.x = THREE.MathUtils.clamp( camera.position.x, minX, maxX );
        camera.position.y = THREE.MathUtils.clamp( camera.position.y, minY, maxY );
        camera.position.z = THREE.MathUtils.clamp( camera.position.z, minZ, maxZ );

        if( controls ) {

            controls.target.x = THREE.MathUtils.clamp( controls.target.x, minX, maxX );
            controls.target.y = THREE.MathUtils.clamp( controls.target.y, minY, maxY );

            controls.target.z = 0;

            controls.update();

        }

    })

    return null;

}

export default CameraBounds;