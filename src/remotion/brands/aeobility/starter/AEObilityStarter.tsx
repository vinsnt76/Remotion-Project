import React from "react";
import {
  AbsoluteFill,
  Easing,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { getSafeZone } from "../../../shared/formats";
import { AEOBILITY_COLOURS, AEOBILITY_FONT } from "../brand";

/**
 * Multi-aspect-ratio starter template for AEObility.
 * Automatically adapts typography, spacing, and safe zones for
 * 16:9 (landscape), 9:16 (vertical), and 1:1 (square).
 */
export const AEObilityStarter: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const safe = getSafeZone(width, height);
  const isLandscape = width > height;
  const isSquare = width === height;

  const ratioLabel = isLandscape
    ? "16:9 LANDSCAPE"
    : isSquare
      ? "1:1 SQUARE"
      : "9:16 VERTICAL";

  return (
    <AbsoluteFill
      style={{
        backgroundColor: AEOBILITY_COLOURS.bg,
        fontFamily: AEOBILITY_FONT,
      }}
    >
      {/* Subtle brand glow */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle at 50% 42%, rgba(34, 211, 238, 0.16) 0%, rgba(99, 102, 241, 0.08) 38%, rgba(11, 15, 25, 0) 70%)",
        }}
      />

      <AbsoluteFill
        style={{
          paddingTop: safe.top,
          paddingBottom: safe.bottom,
          paddingLeft: safe.side,
          paddingRight: safe.side,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: isLandscape ? "flex-start" : "center",
        }}
      >
        {/* Top brand badge */}
        <Interactive.Div
          name="AEObility Brand Tag"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 22px",
            borderRadius: 999,
            backgroundColor: AEOBILITY_COLOURS.surface,
            border: "1.5px solid rgba(34, 211, 238, 0.35)",
            opacity: interpolate(frame, [0, 12], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              backgroundColor: AEOBILITY_COLOURS.accent,
            }}
          />
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: AEOBILITY_COLOURS.white,
            }}
          >
            AEOBILITY • {ratioLabel}
          </span>
        </Interactive.Div>

        {/* Main responsive hero */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: isLandscape ? "flex-start" : "center",
            textAlign: isLandscape ? "left" : "center",
            gap: 24,
            maxWidth: isLandscape ? 1200 : 900,
          }}
        >
          <Interactive.Div
            name="AEObility Headline"
            style={{
              fontSize: isLandscape ? 96 : isSquare ? 82 : 90,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              color: AEOBILITY_COLOURS.white,
              opacity: interpolate(frame, [6, 18], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [6, 22], ["0px 36px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 260 }),
              }),
            }}
          >
            Get Found by{" "}
            <span style={{ color: AEOBILITY_COLOURS.accent }}>AI Search</span>.
          </Interactive.Div>

          <Interactive.Div
            name="AEObility Subcopy"
            style={{
              fontSize: isLandscape ? 36 : 34,
              fontWeight: 500,
              lineHeight: 1.35,
              color: AEOBILITY_COLOURS.muted,
              opacity: interpolate(frame, [14, 26], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [14, 28], ["0px 24px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 240 }),
              }),
            }}
          >
            Responsive starter composition ready for 16:9, 9:16, and 1:1
            campaigns.
          </Interactive.Div>
        </div>

        {/* Bottom CTA pill */}
        <Interactive.Div
          name="AEObility CTA"
          style={{
            padding: "18px 38px",
            borderRadius: 999,
            background: `linear-gradient(90deg, ${AEOBILITY_COLOURS.accent} 0%, ${AEOBILITY_COLOURS.secondary} 100%)`,
            color: AEOBILITY_COLOURS.bg,
            fontSize: 30,
            fontWeight: 800,
            opacity: interpolate(frame, [20, 32], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [20, 34], [0.9, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 280 }),
              output: "perceptual-scale",
            }),
          }}
        >
          aeobility.com →
        </Interactive.Div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
