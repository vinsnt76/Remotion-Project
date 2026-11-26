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
import { BB, FONT, OMIE } from "./theme";

/** 8-frame inverted countdown flash. */
const CountFlash: React.FC<{ n: string; bg: string }> = ({ n, bg }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: bg,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize: isSquare ? 640 : 920,
          lineHeight: 1,
          color: BB.charcoal,
          scale: interpolate(frame, [0, 7], [1.35, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.2, 0.9, 0.1, 1),
            output: "perceptual-scale",
          }),
        }}
      >
        {n}
      </div>
    </AbsoluteFill>
  );
};

/** Drifting hollow outline text rows, sitting behind the product. */
const OutlineRows: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;
  const rows = isSquare ? [0, 1, 2, 3, 4] : [0, 1, 2, 3, 4, 5];

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {rows.map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: isSquare ? 150 + i * 175 : 260 + i * 230,
            left: -400,
            whiteSpace: "nowrap",
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: isSquare ? 155 : 210,
            lineHeight: 1,
            letterSpacing: "-0.01em",
            color: "transparent",
            WebkitTextStroke:
              i % 2 === 0
                ? "3px rgba(255,255,255,0.28)"
                : "3px rgba(232,93,74,0.55)",
            translate: `${(i % 2 === 0 ? -1 : 1) * frame * 6}px 0px`,
          }}
        >
          HOT + COLD • ALL IN ONE • HOT + COLD • ALL IN ONE •
        </div>
      ))}
    </AbsoluteFill>
  );
};

const ExplodedShot: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;

  return (
    <Img
      src={staticFile(OMIE.exploded)}
      style={{
        position: "absolute",
        top: isSquare ? -400 : 0,
        left: 0,
        width: 1080,
        height: 1920,
        scale: interpolate(
          frame,
          [0, 10],
          isSquare ? [0.78, 0.9] : [0.85, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
            output: "perceptual-scale",
          }
        ),
        // Subtle floating-parts feel
        translate: `0px ${Math.sin(frame / 3) * 7}px`,
        rotate: `${Math.sin(frame / 4) * 0.8}deg`,
        filter: "drop-shadow(0 40px 50px rgba(0,0,0,0.65))",
        // Crop the PNG's faint semi-transparent canvas edges
        clipPath: "inset(470px 30px 530px 30px)",
      }}
    />
  );
};

const PackedShot: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;

  return (
    <AbsoluteFill>
      <Img
        src={staticFile(OMIE.centreOpen)}
        style={{
          position: "absolute",
          top: isSquare ? -400 : 0,
          left: 0,
          width: 1080,
          height: 1920,
          // Impact micro-shake as the parts "snap" together
          translate: interpolate(
            frame,
            [0, 2, 4, 6, 8],
            ["0px 0px", "-16px 10px", "12px -7px", "-5px 3px", "0px 0px"],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          ),
          scale: interpolate(
            frame,
            [0, 3, 10],
            isSquare ? [0.94, 0.89, 0.9] : [1.04, 0.99, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              output: "perceptual-scale",
            }
          ),
          filter: "drop-shadow(0 40px 50px rgba(0,0,0,0.65))",
          // Crop the PNG's faint semi-transparent canvas edges
          clipPath: "inset(570px 30px 540px 30px)",
        }}
      />
      {/* Impact flash */}
      <AbsoluteFill
        style={{
          backgroundColor: BB.white,
          opacity: interpolate(frame, [0, 4], [0.55, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
    </AbsoluteFill>
  );
};

export const Scene3Snap: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BB.charcoal }}>
      <Sequence name="Flash 3" from={0} durationInFrames={8}>
        <CountFlash n="3" bg={BB.coral} />
      </Sequence>
      <Sequence name="Flash 2" from={8} durationInFrames={8}>
        <CountFlash n="2" bg={BB.white} />
      </Sequence>
      <Sequence name="Flash 1" from={16} durationInFrames={8}>
        <CountFlash n="1" bg={BB.coral} />
      </Sequence>

      <Sequence name="Exploded to packed" from={24} durationInFrames={51}>
        <AbsoluteFill style={{ backgroundColor: BB.charcoal }}>
          <OutlineRows />
          <AbsoluteFill
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(232,93,74,0.28) 0%, rgba(18,18,18,0) 55%)",
            }}
          />
          <Sequence name="Exploded" from={0} durationInFrames={22}>
            <ExplodedShot />
          </Sequence>
          <Sequence name="Packed" from={22} durationInFrames={29}>
            <PackedShot />
          </Sequence>
          <BrandLogo variant="white" />
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
