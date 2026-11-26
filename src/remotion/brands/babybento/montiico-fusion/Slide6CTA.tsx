import React from "react";
import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { EyebrowBadge, OverlayFrame } from "./OverlayFrame";
import { COLORS, FONTS, type OverlaySlideProps } from "./theme";

export const Slide6CTA: React.FC<OverlaySlideProps> = (props) => {
  const frame = useCurrentFrame();

  return (
    <OverlayFrame {...props}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
          opacity: interpolate(frame, [93, 104], [1, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 1, 1),
          }),
        }}
      >
        <Interactive.Div
          name="CTA Eyebrow"
          style={{
            alignSelf: "flex-start",
            opacity: interpolate(frame, [0, 10], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [0, 14], ["0px 18px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 280 }),
            }),
          }}
        >
          <EyebrowBadge label="Black Friday • Limited Offer" accent="gold" />
        </Interactive.Div>

        {/* Bold CTA Promo Card */}
        <Interactive.Div
          name="CTA Card"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 34,
            padding: "38px 40px 42px 40px",
            backgroundColor: COLORS.cardBgDeep,
            border: `2px solid ${COLORS.gold}`,
            boxShadow:
              "0 26px 60px rgba(0, 0, 0, 0.56), 0 0 36px rgba(255, 59, 92, 0.16) inset",
            opacity: interpolate(frame, [3, 14], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            scale: interpolate(frame, [3, 18], [0.93, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 280 }),
              output: "perceptual-scale",
            }),
            translate: interpolate(frame, [3, 18], ["0px 34px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 280 }),
            }),
          }}
        >
          {/* Electric coral to gold accent strip */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 7,
              background: `linear-gradient(90deg, ${COLORS.coral} 0%, ${COLORS.gold} 100%)`,
            }}
          />

          <Interactive.Div
            name="CTA Headline"
            style={{
              fontFamily: FONTS.display,
              fontSize: 60,
              fontWeight: 900,
              lineHeight: 1.07,
              letterSpacing: "-0.02em",
              color: COLORS.white,
              textShadow: "0 4px 18px rgba(0, 0, 0, 0.45)",
              opacity: interpolate(frame, [7, 18], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [7, 20], ["0px 22px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 260 }),
              }),
            }}
          >
            Ready to Build Your Ultimate Bottle? ✨
          </Interactive.Div>

          <Interactive.Div
            name="CTA Subcopy"
            style={{
              marginTop: 16,
              fontFamily: FONTS.body,
              fontSize: 31,
              fontWeight: 600,
              lineHeight: 1.32,
              color: COLORS.subtext,
              opacity: interpolate(frame, [12, 23], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [12, 24], ["0px 16px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 250 }),
              }),
            }}
          >
            Discover your favorite colors and accessories in the MontiiCo Fusion
            Collection.
          </Interactive.Div>

          {/* Animated CTA pill button with subtle pulse/tap micro-interaction & light sheen */}
          <Interactive.Div
            name="CTA Button"
            style={{
              position: "relative",
              overflow: "hidden",
              marginTop: 30,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              padding: "22px 44px",
              borderRadius: 999,
              background: `linear-gradient(95deg, ${COLORS.coral} 0%, #FF6B4A 52%, ${COLORS.gold} 100%)`,
              boxShadow:
                "0 14px 34px rgba(255, 59, 92, 0.46), 0 0 0 2px rgba(255, 226, 154, 0.45) inset",
              opacity: interpolate(frame, [18, 28], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              scale: interpolate(
                frame,
                [18, 30, 48, 53, 59, 76, 81, 87],
                [0.88, 1, 1, 0.96, 1.02, 1, 0.96, 1],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                  output: "perceptual-scale",
                }
              ),
            }}
          >
            {/* Glossy sheen sweep across CTA pill */}
            <div
              style={{
                position: "absolute",
                top: -20,
                bottom: -20,
                left: 0,
                width: 140,
                background:
                  "linear-gradient(105deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.42) 50%, rgba(255,255,255,0) 100%)",
                pointerEvents: "none",
                translate: interpolate(
                  frame,
                  [34, 62],
                  ["-180px 0px", "680px 0px"],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                  }
                ),
              }}
            />

            <span
              style={{
                position: "relative",
                fontFamily: FONTS.display,
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: "0.01em",
                color: "#111217",
              }}
            >
              Shop the Collection Now
            </span>
            <span
              style={{
                position: "relative",
                fontFamily: FONTS.display,
                fontSize: 34,
                fontWeight: 900,
                color: "#111217",
              }}
            >
              →
            </span>
          </Interactive.Div>
        </Interactive.Div>
      </div>
    </OverlayFrame>
  );
};
