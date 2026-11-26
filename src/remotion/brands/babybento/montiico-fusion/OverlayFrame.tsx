import React from "react";
import {
  AbsoluteFill,
  Easing,
  Img,
  Interactive,
  getRemotionEnvironment,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { BABY_BENTO_LOGOS } from "../brand";
import { COLORS, FONTS, SAFE_ZONE, type OverlaySlideProps } from "./theme";

interface OverlayFrameProps extends OverlaySlideProps {
  children: React.ReactNode;
}

/**
 * Transparent 9:16 overlay wrapper with:
 * - Guaranteed transparent background during render (isRendering === true)
 * - Toggleable dark Studio preview backdrop for crisp visibility while editing
 * - Optional 9:16 social safe-zone guide frame (140px top, 260px bottom, 80px sides)
 * - Baby Bento brand logo badge anchored inside the top-left safe zone
 * - Lower-third alignment above the bottom safe zone so product footage shines in the center
 */
export const OverlayFrame: React.FC<OverlayFrameProps> = ({
  previewBackdrop,
  showSafeZoneGuides,
  children,
}) => {
  const frame = useCurrentFrame();
  const isRendering = getRemotionEnvironment().isRendering;
  const renderPreviewBackdrop = previewBackdrop && !isRendering;
  const renderGuides = showSafeZoneGuides && !isRendering;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "transparent",
        fontFamily: FONTS.body,
      }}
    >
      {renderPreviewBackdrop && (
        <AbsoluteFill
          style={{
            background:
              "radial-gradient(circle at 50% 32%, #292c3a 0%, #151720 55%, #0c0d12 100%)",
          }}
        >
          {/* Subtle studio grid so transparency & card elevation read clearly */}
          <AbsoluteFill
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 56,
              left: 0,
              right: 0,
              textAlign: "center",
              fontFamily: FONTS.body,
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.34)",
            }}
          >
            STUDIO PREVIEW BACKDROP — TRANSPARENT ON RENDER
          </div>
        </AbsoluteFill>
      )}

      {renderGuides && (
        <div
          style={{
            position: "absolute",
            top: SAFE_ZONE.top,
            bottom: SAFE_ZONE.bottom,
            left: SAFE_ZONE.horizontal,
            right: SAFE_ZONE.horizontal,
            border: "2px dashed rgba(255, 200, 87, 0.28)",
            borderRadius: 28,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 12,
              right: 16,
              fontFamily: FONTS.body,
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "rgba(255, 200, 87, 0.45)",
            }}
          >
            9:16 SAFE ZONE
          </div>
        </div>
      )}

      {/* Safe-zone content container: Baby Bento logo at top-left, promo card in lower-third */}
      <AbsoluteFill
        style={{
          paddingTop: SAFE_ZONE.top,
          paddingBottom: SAFE_ZONE.bottom,
          paddingLeft: SAFE_ZONE.horizontal,
          paddingRight: SAFE_ZONE.horizontal,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "stretch",
        }}
      >
        {/* Baby Bento Logo Pill */}
        <Interactive.Div
          name="Baby Bento Logo"
          style={{
            alignSelf: "flex-start",
            display: "inline-flex",
            alignItems: "center",
            padding: "12px 26px",
            borderRadius: 999,
            backgroundColor: "#FFFFFF",
            border: `2px solid ${COLORS.goldBorder}`,
            boxShadow: "0 14px 34px rgba(0, 0, 0, 0.36)",
            opacity: interpolate(frame, [0, 10, 92, 104], [0, 1, 1, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.16, 1, 0.3, 1),
            }),
            translate: interpolate(frame, [0, 14], ["0px -16px", "0px 0px"], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.spring({ damping: 200, stiffness: 280 }),
            }),
          }}
        >
          <Img
            src={staticFile(BABY_BENTO_LOGOS.colourWordmark)}
            style={{
              height: 62,
              width: "auto",
              display: "block",
            }}
          />
        </Interactive.Div>

        {children}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

interface EyebrowBadgeProps {
  label: string;
  accent?: "coral" | "gold" | "ice";
}

export const EyebrowBadge: React.FC<EyebrowBadgeProps> = ({
  label,
  accent = "coral",
}) => {
  const dotColor =
    accent === "gold"
      ? COLORS.gold
      : accent === "ice"
        ? COLORS.iceCyan
        : COLORS.coral;
  const borderColor =
    accent === "gold"
      ? COLORS.goldBorder
      : accent === "ice"
        ? COLORS.iceBorder
        : "rgba(255, 59, 92, 0.48)";

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 22px",
        borderRadius: 999,
        backgroundColor: COLORS.pillBg,
        border: `1.5px solid ${borderColor}`,
        boxShadow: "0 10px 26px rgba(0, 0, 0, 0.35)",
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: 999,
          backgroundColor: dotColor,
          boxShadow: `0 0 12px ${dotColor}`,
        }}
      />
      <span
        style={{
          fontFamily: FONTS.display,
          fontSize: 22,
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: COLORS.goldBright,
          lineHeight: 1,
        }}
      >
        {label}
      </span>
    </div>
  );
};
