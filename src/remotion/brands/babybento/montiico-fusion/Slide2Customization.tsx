import React from "react";
import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { EyebrowBadge, OverlayFrame } from "./OverlayFrame";
import { COLORS, FONTS, type OverlaySlideProps } from "./theme";

export const Slide2Customization: React.FC<OverlaySlideProps> = (props) => {
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
          translate: interpolate(frame, [91, 104], ["0px 0px", "-30px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 1, 1),
          }),
        }}
      >
        {/* Modular snap-in component pills: Lid + Base + Bumper */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Interactive.Div
            name="Eyebrow Mix & Match"
            style={{
              opacity: interpolate(frame, [0, 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [0, 14], ["-32px 0px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 300 }),
              }),
            }}
          >
            <EyebrowBadge label="Mix & Match Modular" accent="gold" />
          </Interactive.Div>

          <Interactive.Div
            name="Modular Pill Lid"
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              backgroundColor: COLORS.coral,
              color: COLORS.white,
              fontFamily: FONTS.display,
              fontSize: 21,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              boxShadow: "0 10px 24px rgba(255, 59, 92, 0.35)",
              opacity: interpolate(frame, [8, 16], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(
                frame,
                [8, 18, 46, 56],
                ["-26px 0px", "0px 0px", "0px 0px", "0px -6px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.spring({ damping: 200, stiffness: 280 }),
                }
              ),
            }}
          >
            Lids
          </Interactive.Div>

          <Interactive.Div
            name="Modular Pill Base"
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              backgroundColor: COLORS.gold,
              color: "#14151B",
              fontFamily: FONTS.display,
              fontSize: 21,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              boxShadow: "0 10px 24px rgba(255, 200, 87, 0.30)",
              opacity: interpolate(frame, [13, 21], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(
                frame,
                [13, 23, 52, 62],
                ["-26px 0px", "0px 0px", "0px 0px", "0px -6px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.spring({ damping: 200, stiffness: 280 }),
                }
              ),
            }}
          >
            Bases
          </Interactive.Div>

          <Interactive.Div
            name="Modular Pill Bumper"
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              backgroundColor: COLORS.pillBg,
              border: `1.5px solid ${COLORS.gold}`,
              color: COLORS.white,
              fontFamily: FONTS.display,
              fontSize: 21,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: interpolate(frame, [18, 26], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(
                frame,
                [18, 28, 58, 68],
                ["-26px 0px", "0px 0px", "0px 0px", "0px -6px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.spring({ damping: 200, stiffness: 280 }),
                }
              ),
            }}
          >
            Bumpers
          </Interactive.Div>
        </div>

        {/* Modular swap card */}
        <Interactive.Div
          name="Customization Card"
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
            translate: interpolate(frame, [3, 19], ["44px 0px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 280 }),
            }),
          }}
        >
          {/* Segmented 3-color modular accent bar */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 6,
              display: "flex",
              gap: 6,
            }}
          >
            <div style={{ flex: 1, backgroundColor: COLORS.coral }} />
            <div style={{ flex: 1, backgroundColor: COLORS.gold }} />
            <div style={{ flex: 1, backgroundColor: COLORS.white }} />
          </div>

          <Interactive.Div
            name="Customization Headline"
            style={{
              fontFamily: FONTS.display,
              fontSize: 62,
              fontWeight: 900,
              lineHeight: 1.07,
              letterSpacing: "-0.02em",
              color: COLORS.white,
              textShadow: "0 4px 18px rgba(0, 0, 0, 0.45)",
              opacity: interpolate(frame, [7, 17], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [7, 21], ["-28px 0px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.spring({ damping: 200, stiffness: 260 }),
              }),
            }}
          >
            Custom Style. Endless Combos. 🎨
          </Interactive.Div>

          <Interactive.Div
            name="Customization Subcopy"
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
              translate: interpolate(
                frame,
                [13, 26],
                ["28px 0px", "0px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.spring({ damping: 200, stiffness: 240 }),
                }
              ),
            }}
          >
            Swap lids, bases, and protective silicone Fusion Bumpers to match
            your vibe.
          </Interactive.Div>
        </Interactive.Div>
      </div>
    </OverlayFrame>
  );
};
