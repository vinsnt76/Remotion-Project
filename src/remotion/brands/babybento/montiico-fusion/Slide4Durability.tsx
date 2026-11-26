import React from "react";
import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { EyebrowBadge, OverlayFrame } from "./OverlayFrame";
import { COLORS, FONTS, type OverlaySlideProps } from "./theme";

export const Slide4Durability: React.FC<OverlaySlideProps> = (props) => {
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
          translate: interpolate(frame, [91, 104], ["0px 0px", "0px 20px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 1, 1),
          }),
        }}
      >
        {/* Top row: Eyebrow + prominent 100% Lead & BPA-Free callout badge */}
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
            name="Durability Eyebrow"
            style={{
              opacity: interpolate(frame, [0, 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            <EyebrowBadge label="Heavy-Duty Stainless" accent="gold" />
          </Interactive.Div>

          <Interactive.Div
            name="Lead & BPA-Free Callout"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "11px 22px",
              borderRadius: 999,
              background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldBright} 100%)`,
              color: "#121318",
              fontFamily: FONTS.display,
              fontSize: 22,
              fontWeight: 900,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              boxShadow: "0 12px 28px rgba(255, 200, 87, 0.36)",
              opacity: interpolate(frame, [14, 22], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              scale: interpolate(frame, [14, 26], [0.85, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 320 }),
                output: "perceptual-scale",
              }),
            }}
          >
            <span>✓</span>
            <span>100% Lead &amp; BPA-Free</span>
          </Interactive.Div>
        </div>

        {/* Sturdy impact-settle card (drops in firmly from above with zero bounce) */}
        <Interactive.Div
          name="Durability Card"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 32,
            padding: "38px 40px 40px 40px",
            backgroundColor: COLORS.cardBgDeep,
            border: `2px solid ${COLORS.goldBorder}`,
            boxShadow:
              "0 26px 56px rgba(0, 0, 0, 0.52), 0 0 0 1px rgba(255, 200, 87, 0.14) inset",
            opacity: interpolate(frame, [2, 11], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: interpolate(frame, [2, 16], ["0px -44px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 340, mass: 1.1 }),
            }),
            scale: interpolate(frame, [2, 16], [1.04, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 340, mass: 1.1 }),
              output: "perceptual-scale",
            }),
          }}
        >
          {/* Impact flash border highlight that settles cleanly */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 30,
              border: `3px solid ${COLORS.gold}`,
              pointerEvents: "none",
              opacity: interpolate(frame, [10, 16, 30], [0, 0.65, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          />

          {/* Bold left gold-to-coral accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: 8,
              background: `linear-gradient(180deg, ${COLORS.gold} 0%, ${COLORS.coral} 100%)`,
            }}
          />

          <Interactive.Div
            name="Durability Headline"
            style={{
              paddingLeft: 10,
              fontFamily: FONTS.display,
              fontSize: 60,
              fontWeight: 900,
              lineHeight: 1.07,
              letterSpacing: "-0.02em",
              color: COLORS.white,
              textShadow: "0 4px 18px rgba(0, 0, 0, 0.45)",
              opacity: interpolate(frame, [5, 14], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            Built Tough. 100% Dishwasher Safe. 🧼
          </Interactive.Div>

          <Interactive.Div
            name="Durability Subcopy"
            style={{
              marginTop: 18,
              paddingLeft: 10,
              fontFamily: FONTS.body,
              fontSize: 32,
              fontWeight: 600,
              lineHeight: 1.32,
              color: COLORS.subtext,
              opacity: interpolate(frame, [11, 22], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [11, 24], ["0px 14px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 260 }),
              }),
            }}
          >
            Heavy-duty stainless steel built to survive playground drops &amp;
            daily hustle. 100% Lead &amp; BPA-free.
          </Interactive.Div>
        </Interactive.Div>
      </div>
    </OverlayFrame>
  );
};
