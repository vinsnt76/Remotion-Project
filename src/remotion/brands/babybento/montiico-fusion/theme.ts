import { z } from "zod";
import { proResAlphaMetadata as sharedProResAlphaMetadata } from "../../../shared/exportPresets";
import { BABY_BENTO_FONT } from "../brand";

export const FONTS = {
  display: BABY_BENTO_FONT,
  body: BABY_BENTO_FONT,
} as const;

export const COLORS = {
  coral: "#FF3B5C",
  coralDeep: "#E11D48",
  coralGlow: "rgba(255, 59, 92, 0.32)",
  gold: "#FFC857",
  goldBright: "#FFE29A",
  goldBorder: "rgba(255, 200, 87, 0.34)",
  goldSoft: "rgba(255, 200, 87, 0.16)",
  iceCyan: "#7CE8FF",
  iceSoft: "rgba(124, 232, 255, 0.16)",
  iceBorder: "rgba(124, 232, 255, 0.38)",
  cardBg: "rgba(12, 13, 18, 0.84)",
  cardBgDeep: "rgba(9, 10, 15, 0.90)",
  pillBg: "rgba(18, 19, 27, 0.92)",
  white: "#FFFFFF",
  subtext: "#ECEAE4",
  muted: "#B8B5AE",
} as const;

export const SAFE_ZONE = {
  top: 140,
  bottom: 260,
  horizontal: 80,
} as const;

export const SLIDE_FPS = 30;
export const SLIDE_DURATION_FRAMES = 105; // 3.5 seconds @ 30fps

export const overlaySlideSchema = z.object({
  previewBackdrop: z
    .boolean()
    .describe(
      "Show dark Studio preview backdrop (automatically disabled during render for alpha transparency)"
    ),
  showSafeZoneGuides: z
    .boolean()
    .describe(
      "Show 9:16 social safe-zone guide frame in Studio (automatically disabled during render)"
    ),
});

export type OverlaySlideProps = z.infer<typeof overlaySlideSchema>;

export const proResAlphaMetadata = sharedProResAlphaMetadata;
