export interface SafeZone {
  top: number;
  bottom: number;
  side: number;
}

export interface VideoFormat {
  width: number;
  height: number;
  safe: SafeZone;
}

/**
 * Standard social & web video aspect ratios with UI safe-zone padding.
 */
export const FORMATS = {
  /** 9:16 — Instagram Reels, TikTok, YouTube Shorts */
  vertical: {
    width: 1080,
    height: 1920,
    safe: { top: 140, bottom: 250, side: 80 },
  },
  /** 16:9 — YouTube, Website Hero, LinkedIn Video */
  landscape: {
    width: 1920,
    height: 1080,
    safe: { top: 72, bottom: 72, side: 110 },
  },
  /** 1:1 — LinkedIn, Instagram, Facebook Square Feed */
  square: {
    width: 1080,
    height: 1080,
    safe: { top: 80, bottom: 80, side: 80 },
  },
  /** 4:5 — Instagram / Facebook Portrait Feed */
  portrait: {
    width: 1080,
    height: 1350,
    safe: { top: 90, bottom: 110, side: 80 },
  },
} as const satisfies Record<string, VideoFormat>;

export const DEFAULT_FPS = 30;

/**
 * Returns the appropriate safe-zone padding for any composition dimensions.
 */
export const getSafeZone = (width: number, height: number): SafeZone => {
  if (width > height) {
    return FORMATS.landscape.safe;
  }
  if (width === height) {
    return FORMATS.square.safe;
  }
  if (height / width >= 1.6) {
    return FORMATS.vertical.safe;
  }
  return FORMATS.portrait.safe;
};
