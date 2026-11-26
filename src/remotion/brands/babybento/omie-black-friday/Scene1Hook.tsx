import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  Sequence,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { BrandLogo } from "./BrandLogo";
import { BB, FONT, SAFE } from "./theme";

/** One 10-frame word slam: scales down hard from 1.7 to 1 with a jolt. */
const SlamWord: React.FC<{ lines: string[]; fontSize: number }> = ({
  lines,
  fontSize,
}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: SAFE.side,
        paddingRight: SAFE.side,
      }}
    >
      <Interactive.Div
        name="Slam word"
        style={{
          fontFamily: FONT,
          fontWeight: 800,
          fontSize,
          lineHeight: 0.88,
          letterSpacing: "-0.03em",
          textTransform: "uppercase",
          textAlign: "center",
          color: BB.white,
          opacity: interpolate(frame, [0, 1], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [0, 5], [1.7, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.2, 0.9, 0.1, 1),
            output: "perceptual-scale",
          }),
          translate: interpolate(
            frame,
            [4, 5, 6, 7],
            ["0px 0px", "-10px 6px", "8px -4px", "0px 0px"],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          ),
        }}
      >
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </Interactive.Div>
    </AbsoluteFill>
  );
};

/** "BLACK FRIDAY..." slam, hold, then horizontal stretch smear wipe. */
const BlackFridaySmear: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;
  const offsetY = isSquare ? -420 : 0;

  const streaks = [
    { top: 760 + offsetY, height: 14, color: BB.coral, delay: 10 },
    { top: 840 + offsetY, height: 6, color: BB.white, delay: 12 },
    { top: 905 + offsetY, height: 22, color: BB.white, delay: 11 },
    { top: 1010 + offsetY, height: 8, color: BB.coral, delay: 13 },
    { top: 1080 + offsetY, height: 18, color: BB.coral, delay: 12 },
    { top: 1160 + offsetY, height: 5, color: BB.white, delay: 14 },
  ];

  return (
    <AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Interactive.Div
          name="Black Friday smear"
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: isSquare ? 175 : 200,
            lineHeight: 0.88,
            letterSpacing: "-0.03em",
            textAlign: "center",
            color: BB.white,
            opacity: interpolate(frame, [0, 1, 20, 28], [0, 1, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(
              frame,
              [0, 5, 12, 26],
              ["1.7 1.7", "1 1", "1 1", "5.5 0.92"],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.55, 0, 0.9, 0.4),
              }
            ),
            filter: `blur(${interpolate(frame, [12, 26], [0, 10], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}px)`,
          }}
        >
          <div>BLACK</div>
          <div>
            FRIDAY<span style={{ color: BB.coral }}>...</span>
          </div>
        </Interactive.Div>
      </AbsoluteFill>

      {/* Trailing horizontal streak bars */}
      {streaks.map((s) => (
        <div
          key={s.top}
          style={{
            position: "absolute",
            top: s.top,
            left: 0,
            width: 1400,
            height: s.height,
            borderRadius: s.height,
            background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${s.color} 45%, ${s.color} 70%, rgba(0,0,0,0) 100%)`,
            translate: `${interpolate(
              frame,
              [s.delay, s.delay + 14],
              [-1500, 1300],
              {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.in(Easing.cubic),
              }
            )}px 0px`,
            opacity: frame >= s.delay ? 1 : 0,
          }}
        />
      ))}
    </AbsoluteFill>
  );
};

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;

  return (
    <AbsoluteFill style={{ backgroundColor: BB.charcoal }}>
      <BrandLogo
        variant="white"
        opacity={interpolate(frame, [0, 4, 44, 52], [0, 1, 1, 0], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        })}
      />
      <Sequence name="DON’T BUY" durationInFrames={10}>
        <SlamWord lines={["DON’T", "BUY"]} fontSize={isSquare ? 195 : 230} />
      </Sequence>
      <Sequence name="A LUNCHBOX" from={10} durationInFrames={10}>
        <SlamWord
          lines={["A", "LUNCHBOX"]}
          fontSize={isSquare ? 160 : 180}
        />
      </Sequence>
      <Sequence name="THIS" from={20} durationInFrames={10}>
        <SlamWord lines={["THIS"]} fontSize={isSquare ? 280 : 340} />
      </Sequence>
      <Sequence name="BLACK FRIDAY..." from={30} durationInFrames={30}>
        <BlackFridaySmear />
      </Sequence>
    </AbsoluteFill>
  );
};
