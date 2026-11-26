import React from "react";
import { Img, staticFile, useVideoConfig } from "remotion";
import { BB, FONT, LOGO, SAFE } from "./theme";

/**
 * Baby Bento logo, centred in the top safe zone.
 * Adapts automatically for 9:16 vertical and 1:1 square formats.
 */
export const BrandLogo: React.FC<{
  variant: "white" | "colour";
  opacity?: number;
}> = ({ variant, opacity = 1 }) => {
  const { width, height } = useVideoConfig();
  const isSquare = height <= width;

  return (
    <div
      style={{
        position: "absolute",
        top: isSquare
          ? variant === "white"
            ? 44
            : 56
          : variant === "white"
            ? SAFE.top
            : SAFE.top + 20,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity,
      }}
    >
      {variant === "white" ? (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: isSquare ? 12 : 16,
            filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.65))",
          }}
        >
          <Img
            src={staticFile(LOGO.white)}
            style={{
              height: isSquare ? 62 : 84,
              width: "auto",
              display: "block",
            }}
          />
          <span
            style={{
              fontFamily: FONT,
              fontWeight: 800,
              fontSize: isSquare ? 38 : 48,
              letterSpacing: "-0.02em",
              color: BB.white,
              lineHeight: 1,
            }}
          >
            Baby Bento
          </span>
        </div>
      ) : (
        <Img
          src={staticFile(LOGO.colour)}
          style={{
            height: isSquare ? 56 : 78,
            width: "auto",
          }}
        />
      )}
    </div>
  );
};
