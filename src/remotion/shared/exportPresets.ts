import type { CalculateMetadataFunction } from "remotion";

/**
 * Standard H.264 MP4 export defaults (social reels, web promos, YouTube).
 */
export const mp4Metadata: CalculateMetadataFunction<
  Record<string, unknown>
> = async () => {
  return {
    defaultCodec: "h264",
    defaultVideoImageFormat: "jpeg",
    defaultPixelFormat: "yuv420p",
  };
};

/**
 * Transparent ProRes 4444 (.mov) export defaults for OpenShot / NLE alpha overlays.
 */
export const proResAlphaMetadata = async () => {
  return {
    defaultCodec: "prores" as const,
    defaultVideoImageFormat: "png" as const,
    defaultPixelFormat: "yuva444p10le" as const,
    defaultProResProfile: "4444" as const,
  };
};
