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
import { BB, FONT, SAFE } from "./theme";

export const Scene5CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;

  const border = isSquare
    ? { x: 40, y: 40, w: width - 80, h: height - 80, r: 34 }
    : {
        x: SAFE.side,
        y: SAFE.top,
        w: width - SAFE.side * 2,
        h: height - SAFE.top - SAFE.bottom,
        r: 44,
      };

  const perimeter =
    2 * (border.w + border.h) - (8 - 2 * Math.PI) * border.r;

  return (
    <AbsoluteFill>
      {/* Animated SVG motion border inside the safe zones */}
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: "absolute", inset: 0 }}
      >
        <rect
          x={border.x}
          y={border.y}
          width={border.w}
          height={border.h}
          rx={border.r}
          fill="none"
          stroke={BB.coral}
          strokeWidth={7}
          strokeLinecap="round"
          strokeDasharray={perimeter}
          strokeDashoffset={interpolate(frame, [0, 30], [perimeter, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.65, 0, 0.35, 1),
          })}
        />
      </svg>

      <BrandLogo variant="colour" />
      <Headline animate={false} />

      {/* Sub-badge */}
      <div
        style={{
          position: "absolute",
          top: isSquare ? 276 : 498,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: isSquare ? 24 : 34,
            letterSpacing: "0.12em",
            color: BB.charcoal,
            backgroundColor: BB.white,
            border: `3px solid ${BB.coral}`,
            borderRadius: 999,
            padding: isSquare ? "6px 22px" : "10px 30px",
            opacity: interpolate(frame, [4, 10], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [4, 14], [0.8, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
              output: "perceptual-scale",
            }),
          }}
        >
          AUSSIE SCHOOL READY
        </div>
      </div>

      {/* CTA card */}
      <div
        style={{
          position: "absolute",
          left: isSquare ? 68 : SAFE.side + 24,
          right: isSquare ? 68 : SAFE.side + 24,
          bottom: isSquare ? 68 : 260 + 24,
          borderRadius: isSquare ? 28 : 36,
          backgroundColor: BB.charcoal,
          border: `3px solid ${BB.coral}`,
          padding: isSquare ? "22px 28px 26px 28px" : "34px 36px 38px 36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isSquare ? 16 : 24,
          boxShadow: "0 26px 60px rgba(0,0,0,0.4)",
          opacity: interpolate(frame, [8, 18], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: `0px ${interpolate(frame, [8, 22], [90, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}px`,
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: isSquare ? 46 : 60,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: BB.white,
            textAlign: "center",
          }}
        >
          SHOP <span style={{ color: BB.coral }}>30% OFF</span>
          <div
            style={{
              fontSize: isSquare ? 32 : 44,
              marginTop: isSquare ? 6 : 10,
              letterSpacing: "0.04em",
            }}
          >
            BLACK FRIDAY SALE
          </div>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 999,
            backgroundColor: BB.coral,
            padding: isSquare ? "14px 36px" : "20px 46px",
            fontFamily: FONT,
            fontWeight: 800,
            fontSize: isSquare ? 32 : 42,
            color: BB.white,
            boxShadow: "0 12px 30px rgba(232,93,74,0.45)",
            scale: interpolate(frame, [40, 44, 48], [1, 0.96, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              output: "perceptual-scale",
            }),
          }}
        >
          {/* Shimmer sweep */}
          <div
            style={{
              position: "absolute",
              top: -20,
              bottom: -20,
              left: 0,
              width: 120,
              background:
                "linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)",
              translate: `${interpolate(frame, [24, 50], [-160, 640], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
              })}px 0px`,
            }}
          />
          <span style={{ position: "relative" }}>Shop Baby Bento Now →</span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
