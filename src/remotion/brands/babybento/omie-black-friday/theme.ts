import { FORMATS } from "../../../shared/formats";
import {
  BABY_BENTO_COLOURS,
  BABY_BENTO_FONT,
  BABY_BENTO_LOGOS,
} from "../brand";

export const FONT = BABY_BENTO_FONT;
export const BB = BABY_BENTO_COLOURS;
export const SAFE = FORMATS.vertical.safe;

export const OMIE = {
  exploded: "babybento/omie-black-friday/omie-exploded.png",
  centreOpen: "babybento/omie-black-friday/omiefull-centre-open.png",
  topHalf: "babybento/omie-black-friday/omie-top-half.png",
  inUse: "babybento/omie-black-friday/omie-in-use-white-bottom-.png",
} as const;

export const LOGO = {
  white: BABY_BENTO_LOGOS.icon,
  colour: BABY_BENTO_LOGOS.colourWordmark,
} as const;

// Scene timing (frames @ 30fps), 360 frames total = 12s
export const TIMING = {
  hook: { from: 0, duration: 60 },
  pain: { from: 60, duration: 90 },
  snap: { from: 150, duration: 75 },
  hero: { from: 225, duration: 69 },
  cta: { from: 294, duration: 66 },
  total: 360,
} as const;
