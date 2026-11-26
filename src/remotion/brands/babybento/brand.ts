import { loadFont as loadAssistant } from "@remotion/google-fonts/Assistant";

const assistant = loadAssistant("normal", {
  weights: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

export const BABY_BENTO_FONT = assistant.fontFamily;

export const BABY_BENTO_COLOURS = {
  charcoal: "#121212",
  coral: "#E85D4A",
  white: "#FFFFFF",
  offWhite: "#F8F8F8",
} as const;

export const BABY_BENTO_LOGOS = {
  icon: "babybento/icon-logo.png",
  colourWordmark: "babybento/baby-bento-site-text-logo.svg",
} as const;
