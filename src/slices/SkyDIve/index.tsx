"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";

/**
 * Props for `SkyDIve`.
 */
export type SkyDIveProps = SliceComponentProps<Content.SkyDIveSlice>;

/**
 * Component for "SkyDIve" Slices.
 */
const SkyDIve = ({ slice }: SkyDIveProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive h-screen"
    >
      <h2 className="sr-only">{slice.primary.sentence}</h2>
      <View className="h-screen w-screen">
        <Scene flavor={slice.primary.flavor} sentence={slice.primary.sentence} />
      </View>
    </Bounded>
  );
};

export default SkyDIve;
