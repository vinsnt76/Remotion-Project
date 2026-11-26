import React from "react";
import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { EyebrowBadge, OverlayFrame } from "./OverlayFrame";
import { COLORS, FONTS, type OverlaySlideProps } from "./theme";

export const Slide1Hook: React.FC<OverlaySlideProps> = (props) => {
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
          translate: interpolate(frame, [91, 104], ["0px 0px", "0px 22px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 1, 1),
          }),
        }}
      >
        {/* Snappy pop-in eyebrow badge */}
        <Interactive.Div
          name="Hook Eyebrow"
          style={{
            alignSelf: "flex-start",
            opacity: interpolate(frame, [0, 10], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [0, 14], [0.84, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 320 }),
              output: "perceptual-scale",
            }),
            translate: interpolate(frame, [0, 14], ["0px 18px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 320 }),
            }),
          }}
        >
          <EyebrowBadge label="Black Friday • Fusion Range" accent="coral" />
        </Interactive.Div>

        {/* Main translucent frosted promo card */}
        <Interactive.Div
          name="Hook Card"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 32,
            padding: "38px 40px 40px 40px",
            backgroundColor: COLORS.cardBg,
            border: `1.5px solid ${COLORS.goldBorder}`,
            boxShadow:
              "0 24px 54px rgba(0, 0, 0, 0.48), 0 0 0 1px rgba(255, 255, 255, 0.06) inset",
            opacity: interpolate(frame, [3, 14], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [3, 18], [0.92, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 280 }),
              output: "perceptual-scale",
            }),
            translate: interpolate(frame, [3, 18], ["0px 36px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 280 }),
            }),
          }}
        >
          {/* Electric coral to gold top accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: 6,
              width: "100%",
              background: `linear-gradient(90deg, ${COLORS.coral} 0%, ${COLORS.gold} 100%)`,
              transformOrigin: "left center",
              scale: interpolate(frame, [6, 24], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          />

          <Interactive.Div
            name="Hook Headline"
            style={{
              fontFamily: FONTS.display,
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-0.02em",
              color: COLORS.white,
              textShadow: "0 4px 18px rgba(0, 0, 0, 0.45)",
              opacity: interpolate(frame, [7, 18], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [7, 20], ["0px 24px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 260 }),
              }),
            }}
          >
            Meet the MontiiCo Fusion Range 🌈
          </Interactive.Div>

          <Interactive.Div
            name="Hook Subcopy"
            style={{
              marginTop: 18,
              fontFamily: FONTS.body,
              fontSize: 33,
              fontWeight: 600,
              lineHeight: 1.32,
              color: COLORS.subtext,
              opacity: interpolate(frame, [13, 24], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [13, 26], ["0px 18px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 240 }),
              }),
            }}
          >
            The ultimate mix &amp; match hydration bottle built for everyday
            adventures.
          </Interactive.Div>
        </Interactive.Div>
      </div>
    </OverlayFrame>
  );
};
