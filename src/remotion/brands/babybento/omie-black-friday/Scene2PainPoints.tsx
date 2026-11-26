import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BrandLogo } from "./BrandLogo";
import { BB, FONT, OMIE, SAFE } from "./theme";

/** Rubber-stamp line: "NO MORE ..." with a coral highlight pill. */
const Stamp: React.FC<{
  lead: string;
  highlight: string;
  tilt: string;
  compact: boolean;
}> = ({ lead, highlight, tilt, compact }) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: compact ? 5 : 8,
        rotate: tilt,
        opacity: interpolate(frame, [0, 2], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
        scale: interpolate(frame, [0, 6], [1.8, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.bezier(0.3, 0, 0.2, 1),
          output: "perceptual-scale",
        }),
      }}
    >
      <div
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: compact ? 36 : 54,
          letterSpacing: "0.02em",
          color: BB.white,
          lineHeight: 1,
          textShadow: "0 4px 16px rgba(0,0,0,0.6)",
        }}
      >
        {lead}
      </div>
      <div
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: compact ? 50 : 74,
          letterSpacing: "-0.01em",
          lineHeight: 1,
          color: BB.white,
          backgroundColor: BB.coral,
          padding: compact ? "9px 24px 12px 24px" : "12px 30px 16px 30px",
          borderRadius: 999,
          boxShadow: "0 12px 30px rgba(232, 93, 74, 0.35)",
        }}
      >
        {highlight}
      </div>
    </div>
  );
};

export const Scene2PainPoints: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;

  // Tiny whole-stack jolt on each stamp impact (frames 6, 36, 66)
  const jolt = (start: number) =>
    interpolate(
      frame,
      [start, start + 1, start + 2, start + 4],
      [0, 7, -4, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
  const joltY = jolt(5) + jolt(35) + jolt(65);

  return (
    <AbsoluteFill style={{ backgroundColor: BB.charcoal }}>
      {/* Soft coral glow behind the lunchbox */}
      <AbsoluteFill
        style={{
          background: isSquare
            ? "radial-gradient(ellipse 55% 32% at 50% 24%, rgba(232,93,74,0.22) 0%, rgba(18,18,18,0) 70%)"
            : "radial-gradient(ellipse 60% 30% at 50% 26%, rgba(232,93,74,0.22) 0%, rgba(18,18,18,0) 70%)",
        }}
      />

      <Img
        src={staticFile(OMIE.topHalf)}
        style={{
          position: "absolute",
          top: isSquare ? -10 : 0,
          left: 0,
          width: 1080,
          height: 1920,
          transformOrigin: isSquare ? "50% 0%" : "50% 22%",
          scale: interpolate(
            frame,
            [0, 90],
            isSquare ? [0.56, 0.59] : [1, 1.05],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.quad),
            }
          ),
          filter: "drop-shadow(0 34px 44px rgba(0,0,0,0.7))",
        }}
      />

      <BrandLogo variant="white" />

      {/* Stamp stack: below the lunchbox, inside safe zones */}
      <div
        style={{
          position: "absolute",
          top: isSquare ? 520 : 960,
          bottom: isSquare ? 60 : SAFE.bottom + 20,
          left: SAFE.side,
          right: SAFE.side,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: isSquare ? 22 : 34,
          translate: `0px ${joltY}px`,
        }}
      >
        <Sequence name="Stamp 1" layout="none">
          <Stamp
            lead="NO MORE"
            highlight="YOGHURT EXPLOSIONS."
            tilt="-1.5deg"
            compact={isSquare}
          />
        </Sequence>
        <Sequence name="Stamp 2" from={30} layout="none">
          <Stamp
            lead="NO MORE"
            highlight="SOGGY CRACKERS."
            tilt="1.5deg"
            compact={isSquare}
          />
        </Sequence>
        <Sequence name="Stamp 3" from={60} layout="none">
          <Stamp
            lead="NO MORE 7:30 AM"
            highlight="LID HUNTS."
            tilt="-1.5deg"
            compact={isSquare}
          />
        </Sequence>
      </div>
    </AbsoluteFill>
  );
};
