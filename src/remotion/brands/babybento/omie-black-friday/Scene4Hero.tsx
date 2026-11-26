import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BrandLogo } from "./BrandLogo";
import { Headline } from "./InUse";
import { BB, FONT } from "./theme";

const TICKER = "30% OFF BLACK FRIDAY SALE • LIMITED STOCK • ";

export const Scene4Hero: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;

  return (
    <AbsoluteFill>
      <BrandLogo
        variant="colour"
        opacity={interpolate(frame, [0, 6], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}
      />
      <Headline animate />

      {/* Lower-third diagonal ticker tape */}
      <div
        style={{
          position: "absolute",
          top: isSquare ? 780 : 1360,
          left: -200,
          width: 1480,
          height: isSquare ? 94 : 120,
          backgroundColor: BB.coral,
          rotate: "-5deg",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 18px 40px rgba(0,0,0,0.3)",
          translate: `${interpolate(
            frame,
            [0, 10, 60, 69],
            [-1600, 0, 0, 1600],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.65, 0, 0.35, 1),
            }
          )}px 0px`,
        }}
      >
        <div
          style={{
            whiteSpace: "nowrap",
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: isSquare ? 48 : 64,
            letterSpacing: "0.01em",
            color: BB.white,
            translate: `${-frame * 14}px 0px`,
          }}
        >
          {TICKER.repeat(5)}
        </div>
      </div>
    </AbsoluteFill>
  );
};
