"use client"

import { Group } from "three"
import { ReactNode, forwardRef } from "react"
import { Float } from "@react-three/drei"

import { SodaCan, SodaCanProps } from "@/components/SodaCan"

type FloatingCanProps = {
    flavor?: SodaCanProps["flavor"];
    floatSpeed?: number;
    rotationIntensity?: number;
    floatIntensity?: number;
    floatingRange?: [number, number];
    children?: ReactNode
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(({
    flavor = "blackCherry", 
    children,
    floatIntensity = 1, 
    floatSpeed = 1.5, 
    floatingRange = [-0.1, 0.1], 
    rotationIntensity = 1,
    ...props
}, ref) => {
    return (
        <group ref={ref} {...props}>
            <Float
                speed={floatSpeed}
                rotationIntensity={rotationIntensity}
                floatIntensity={floatIntensity}
                floatingRange={floatingRange}
            >
                {children}
                <SodaCan flavor={flavor} />
            </Float>
        </group>
    );
});

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;