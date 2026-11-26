import { loadFont as loadPlusJakartaSans } from "@remotion/google-fonts/PlusJakartaSans";

const plusJakarta = loadPlusJakartaSans("normal", {
  weights: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const AEOBILITY_FONT = plusJakarta.fontFamily;

/**
 * AEObility brand tokens — swap hex colours, fonts, and logo paths here
 * once final brand assets are dropped into public/aeobility/.
 */
export const AEOBILITY_COLOURS = {
  bg: "#0B0F19",
  surface: "#131A2B",
  accent: "#22D3EE",
  secondary: "#6366F1",
  white: "#FFFFFF",
  muted: "#CBD5E1",
} as const;
