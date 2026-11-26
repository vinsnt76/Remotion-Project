import React from "react";
import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { EyebrowBadge, OverlayFrame } from "./OverlayFrame";
import { COLORS, FONTS, type OverlaySlideProps } from "./theme";

export const Slide3Thermal: React.FC<OverlaySlideProps> = (props) => {
  const frame = useCurrentFrame();

  return (
    <OverlayFrame {...props}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          opacity: interpolate(frame, [91, 104], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 1, 1),
          }),
          translate: interpolate(frame, [91, 104], ["0px 0px", "0px -22px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 1, 1),
          }),
        }}
      >
        {/* Top row: Eyebrow + 24H Cold / 8H Hot stat pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Interactive.Div
            name="Thermal Eyebrow"
            style={{
              opacity: interpolate(frame, [0, 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [0, 15], ["0px 24px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 260 }),
              }),
            }}
          >
            <EyebrowBadge label="Double-Wall Vacuum" accent="ice" />
          </Interactive.Div>

          <div style={{ display: "flex", gap: 10 }}>
            <Interactive.Div
              name="Stat 24H Cold"
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                backgroundColor: COLORS.pillBg,
                border: `1.5px solid ${COLORS.iceBorder}`,
                color: COLORS.iceCyan,
                fontFamily: FONTS.display,
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "0.06em",
                opacity: interpolate(frame, [10, 19], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                translate: interpolate(
                  frame,
                  [10, 22],
                  ["0px 20px", "0px 0px"],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.spring({ damping: 200, stiffness: 280 }),
                  }
                ),
              }}
            >
              ❄️ 24H COLD
            </Interactive.Div>

            <Interactive.Div
              name="Stat 8H Hot"
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                backgroundColor: COLORS.pillBg,
                border: `1.5px solid rgba(255, 59, 92, 0.48)`,
                color: COLORS.goldBright,
                fontFamily: FONTS.display,
                fontSize: 22,
                fontWeight: 800,
                letterSpacing: "0.06em",
                opacity: interpolate(frame, [15, 24], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                translate: interpolate(
                  frame,
                  [15, 27],
                  ["0px 20px", "0px 0px"],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.spring({ damping: 200, stiffness: 280 }),
                  }
                ),
              }}
            >
              🔥 8H HOT
            </Interactive.Div>
          </div>
        </div>

        {/* Cool slide-up card with subtle frost shimmer sweep */}
        <Interactive.Div
          name="Thermal Card"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 32,
            padding: "38px 40px 40px 40px",
            backgroundColor: COLORS.cardBg,
            border: `1.5px solid ${COLORS.iceBorder}`,
            boxShadow:
              "0 24px 54px rgba(0, 0, 0, 0.48), 0 0 28px rgba(124, 232, 255, 0.12) inset",
            opacity: interpolate(frame, [3, 15], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [3, 20], ["0px 48px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 240 }),
            }),
          }}
        >
          {/* Cool frost shimmer sweep passing cleanly across card */}
          <div
            style={{
              position: "absolute",
              top: -80,
              bottom: -80,
              left: 0,
              width: 240,
              background:
                "linear-gradient(105deg, rgba(124,232,255,0) 0%, rgba(124,232,255,0.20) 50%, rgba(255,255,255,0) 100%)",
              pointerEvents: "none",
              translate: interpolate(
                frame,
                [24, 68],
                ["-280px 0px", "1050px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                }
              ),
            }}
          />

          {/* Top ice-to-coral accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 6,
              background: `linear-gradient(90deg, ${COLORS.iceCyan} 0%, ${COLORS.gold} 62%, ${COLORS.coral} 100%)`,
            }}
          />

          <Interactive.Div
            name="Thermal Headline"
            style={{
              fontFamily: FONTS.display,
              fontSize: 62,
              fontWeight: 900,
              lineHeight: 1.07,
              letterSpacing: "-0.02em",
              color: COLORS.white,
              textShadow: "0 4px 18px rgba(0, 0, 0, 0.45)",
              opacity: interpolate(frame, [8, 19], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [8, 22], ["0px 26px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 250 }),
              }),
            }}
          >
            Ice-Cold Refreshment. All Day. 🧊⚡
          </Interactive.Div>

          <Interactive.Div
            name="Thermal Subcopy"
            style={{
              marginTop: 18,
              fontFamily: FONTS.body,
              fontSize: 32,
              fontWeight: 600,
              lineHeight: 1.32,
              color: COLORS.subtext,
              opacity: interpolate(frame, [14, 26], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [14, 28], ["0px 20px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 230 }),
              }),
            }}
          >
            Double-wall vacuum insulation keeps drinks chilled for up to 24
            hours (or hot for up to 8 hours).
          </Interactive.Div>
        </Interactive.Div>
      </div>
    </OverlayFrame>
  );
};
