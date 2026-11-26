import React from "react";
import { Easing, Interactive, interpolate, useCurrentFrame } from "remotion";
import { EyebrowBadge, OverlayFrame } from "./OverlayFrame";
import { COLORS, FONTS, type OverlaySlideProps } from "./theme";

export const Slide5Versatility: React.FC<OverlaySlideProps> = (props) => {
  const frame = useCurrentFrame();

  const wipePercent = interpolate(frame, [2, 24], [100, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

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
          translate: interpolate(frame, [91, 104], ["0px 0px", "32px 0px"], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.4, 0, 1, 1),
          }),
        }}
      >
        {/* Top row: Eyebrow + gliding lifestyle tags */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <Interactive.Div
            name="Versatility Eyebrow"
            style={{
              opacity: interpolate(frame, [0, 10], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(frame, [0, 16], ["-36px 0px", "0px 0px"], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
                easing: Easing.bezier(0.16, 1, 0.3, 1),
              }),
            }}
          >
            <EyebrowBadge label="All Sizes & Shades" accent="coral" />
          </Interactive.Div>

          <Interactive.Div
            name="Tag School"
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              backgroundColor: COLORS.pillBg,
              border: `1.5px solid ${COLORS.goldBorder}`,
              color: COLORS.goldBright,
              fontFamily: FONTS.display,
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: "0.08em",
              opacity: interpolate(frame, [10, 18], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(
                frame,
                [10, 22],
                ["-28px 0px", "0px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                }
              ),
            }}
          >
            SCHOOL
          </Interactive.Div>

          <Interactive.Div
            name="Tag Work"
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              backgroundColor: COLORS.pillBg,
              border: `1.5px solid ${COLORS.goldBorder}`,
              color: COLORS.goldBright,
              fontFamily: FONTS.display,
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: "0.08em",
              opacity: interpolate(frame, [15, 23], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(
                frame,
                [15, 27],
                ["-28px 0px", "0px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                }
              ),
            }}
          >
            WORK
          </Interactive.Div>

          <Interactive.Div
            name="Tag Workouts"
            style={{
              padding: "10px 18px",
              borderRadius: 999,
              backgroundColor: COLORS.pillBg,
              border: `1.5px solid rgba(255, 59, 92, 0.5)`,
              color: COLORS.white,
              fontFamily: FONTS.display,
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: "0.08em",
              opacity: interpolate(frame, [20, 28], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: interpolate(
                frame,
                [20, 32],
                ["-28px 0px", "0px 0px"],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                }
              ),
            }}
          >
            WORKOUTS
          </Interactive.Div>
        </div>

        {/* Horizontal wipe/reveal card synced to a panning shot */}
        <div
          style={{
            position: "relative",
            clipPath: `inset(0 ${wipePercent}% 0 0 round 32px)`,
          }}
        >
          <Interactive.Div
            name="Versatility Card"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 32,
              padding: "38px 40px 40px 40px",
              backgroundColor: COLORS.cardBg,
              border: `1.5px solid ${COLORS.goldBorder}`,
              boxShadow:
                "0 24px 54px rgba(0, 0, 0, 0.48), 0 0 0 1px rgba(255, 255, 255, 0.06) inset",
            }}
          >
            {/* Leading horizontal wipe accent bar */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 6,
                background: `linear-gradient(90deg, ${COLORS.coral} 0%, ${COLORS.gold} 50%, ${COLORS.coral} 100%)`,
              }}
            />

            <Interactive.Div
              name="Versatility Headline"
              style={{
                fontFamily: FONTS.display,
                fontSize: 60,
                fontWeight: 900,
                lineHeight: 1.07,
                letterSpacing: "-0.02em",
                color: COLORS.white,
                textShadow: "0 4px 18px rgba(0, 0, 0, 0.45)",
                translate: interpolate(
                  frame,
                  [4, 24],
                  ["-40px 0px", "0px 0px"],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.16, 1, 0.3, 1),
                  }
                ),
              }}
            >
              A Size &amp; Shade for Everyone. 🎒🏋️
            </Interactive.Div>

            <Interactive.Div
              name="Versatility Subcopy"
              style={{
                marginTop: 18,
                fontFamily: FONTS.body,
                fontSize: 32,
                fontWeight: 600,
                lineHeight: 1.32,
                color: COLORS.subtext,
                opacity: interpolate(frame, [10, 24], [0, 1], {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                }),
                translate: interpolate(
                  frame,
                  [10, 28],
                  ["-32px 0px", "0px 0px"],
                  {
                    extrapolateLeft: "clamp",
                    extrapolateRight: "clamp",
                    easing: Easing.bezier(0.16, 1, 0.3, 1),
                  }
                ),
              }}
            >
              From compact kids&apos; sizes to large daily hydration
              flasks—designed for school, work, and workouts.
            </Interactive.Div>
          </Interactive.Div>
        </div>
      </div>
    </OverlayFrame>
  );
};
