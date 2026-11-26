import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BB, FONT, OMIE } from "./theme";

/**
 * Persistent omie-in-use backdrop across Scenes 4 + 5 (135 frames)
 * so the zoom never jumps at the scene cut.
 * Adapts automatically for 9:16 vertical and 1:1 square formats.
 */
export const InUseBackdrop: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;

  return (
    <AbsoluteFill style={{ backgroundColor: BB.offWhite }}>
      <Img
        src={staticFile(OMIE.inUse)}
        style={{
          position: "absolute",
          top: isSquare ? -420 : 0,
          left: 0,
          width: 1080,
          height: 1920,
          transformOrigin: "50% 60%",
          scale: interpolate(frame, [0, 69, 135], [1, 1.07, 1.09], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};

/** Two-line headline; `animate` slides it in, otherwise it's static (Scene 5). */
export const Headline: React.FC<{ animate: boolean }> = ({ animate }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;
  const f = animate ? frame : 100;

  return (
    <div
      style={{
        position: "absolute",
        top: isSquare ? 122 : 250,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: FONT,
        fontWeight: 800,
        fontSize: isSquare ? 74 : 118,
        lineHeight: 0.95,
        letterSpacing: "-0.03em",
        color: BB.charcoal,
      }}
    >
      <div
        style={{
          opacity: interpolate(f, [0, 4], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: `${interpolate(f, [0, 12], [-260, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}px 0px`,
        }}
      >
        BUY ONCE.
      </div>
      <div
        style={{
          color: BB.coral,
          opacity: interpolate(f, [5, 9], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: `${interpolate(f, [5, 17], [260, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}px 0px`,
        }}
      >
        PACK EASY.
      </div>
    </div>
  );
};
