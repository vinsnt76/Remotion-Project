import React from "react";
import { Composition, Folder } from "remotion";
import { DynamicComp } from "./DynamicComp";
import { AEObilityStarter } from "./brands/aeobility/starter/AEObilityStarter";
import { MontiiCoMaster } from "./brands/babybento/montiico-fusion/MontiiCoMaster";
import { Slide1Hook } from "./brands/babybento/montiico-fusion/Slide1Hook";
import { Slide2Customization } from "./brands/babybento/montiico-fusion/Slide2Customization";
import { Slide3Thermal } from "./brands/babybento/montiico-fusion/Slide3Thermal";
import { Slide4Durability } from "./brands/babybento/montiico-fusion/Slide4Durability";
import { Slide5Versatility } from "./brands/babybento/montiico-fusion/Slide5Versatility";
import { Slide6CTA } from "./brands/babybento/montiico-fusion/Slide6CTA";
import {
  overlaySlideSchema,
  SLIDE_DURATION_FRAMES,
  SLIDE_FPS,
} from "./brands/babybento/montiico-fusion/theme";
import { BabyBentoOmieBlackFriday } from "./brands/babybento/omie-black-friday/BabyBentoOmieBlackFriday";
import { mp4Metadata, proResAlphaMetadata } from "./shared/exportPresets";
import { DEFAULT_FPS, FORMATS } from "./shared/formats";

const defaultCode = `import { AbsoluteFill } from "remotion";
export const MyAnimation = () => <AbsoluteFill style={{ backgroundColor: "#000" }} />;`;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Baby-Bento">
        <Folder name="Omie-Black-Friday">
          <Composition
            id="BabyBentoOmieBlackFriday"
            component={BabyBentoOmieBlackFriday}
            durationInFrames={360}
            fps={DEFAULT_FPS}
            width={FORMATS.vertical.width}
            height={FORMATS.vertical.height}
            calculateMetadata={mp4Metadata}
          />
          <Composition
            id="BabyBentoOmieBlackFriday-1x1"
            component={BabyBentoOmieBlackFriday}
            durationInFrames={360}
            fps={DEFAULT_FPS}
            width={FORMATS.square.width}
            height={FORMATS.square.height}
            calculateMetadata={mp4Metadata}
          />
        </Folder>

        <Folder name="MontiiCo-Fusion-Overlays">
          <Composition
            id="MontiiCoFusion-Master"
            component={MontiiCoMaster}
            durationInFrames={SLIDE_DURATION_FRAMES * 6}
            fps={SLIDE_FPS}
            width={FORMATS.vertical.width}
            height={FORMATS.vertical.height}
            schema={overlaySlideSchema}
            defaultProps={{
              previewBackdrop: true,
              showSafeZoneGuides: true,
            }}
            calculateMetadata={proResAlphaMetadata}
          />
          <Composition
            id="Slide1-Hook"
            component={Slide1Hook}
            durationInFrames={SLIDE_DURATION_FRAMES}
            fps={SLIDE_FPS}
            width={FORMATS.vertical.width}
            height={FORMATS.vertical.height}
            schema={overlaySlideSchema}
            defaultProps={{
              previewBackdrop: true,
              showSafeZoneGuides: true,
            }}
            calculateMetadata={proResAlphaMetadata}
          />
          <Composition
            id="Slide2-Customization"
            component={Slide2Customization}
            durationInFrames={SLIDE_DURATION_FRAMES}
            fps={SLIDE_FPS}
            width={FORMATS.vertical.width}
            height={FORMATS.vertical.height}
            schema={overlaySlideSchema}
            defaultProps={{
              previewBackdrop: true,
              showSafeZoneGuides: true,
            }}
            calculateMetadata={proResAlphaMetadata}
          />
          <Composition
            id="Slide3-Thermal"
            component={Slide3Thermal}
            durationInFrames={SLIDE_DURATION_FRAMES}
            fps={SLIDE_FPS}
            width={FORMATS.vertical.width}
            height={FORMATS.vertical.height}
            schema={overlaySlideSchema}
            defaultProps={{
              previewBackdrop: true,
              showSafeZoneGuides: true,
            }}
            calculateMetadata={proResAlphaMetadata}
          />
          <Composition
            id="Slide4-Durability"
            component={Slide4Durability}
            durationInFrames={SLIDE_DURATION_FRAMES}
            fps={SLIDE_FPS}
            width={FORMATS.vertical.width}
            height={FORMATS.vertical.height}
            schema={overlaySlideSchema}
            defaultProps={{
              previewBackdrop: true,
              showSafeZoneGuides: true,
            }}
            calculateMetadata={proResAlphaMetadata}
          />
          <Composition
            id="Slide5-Versatility"
            component={Slide5Versatility}
            durationInFrames={SLIDE_DURATION_FRAMES}
            fps={SLIDE_FPS}
            width={FORMATS.vertical.width}
            height={FORMATS.vertical.height}
            schema={overlaySlideSchema}
            defaultProps={{
              previewBackdrop: true,
              showSafeZoneGuides: true,
            }}
            calculateMetadata={proResAlphaMetadata}
          />
          <Composition
            id="Slide6-CTA"
            component={Slide6CTA}
            durationInFrames={SLIDE_DURATION_FRAMES}
            fps={SLIDE_FPS}
            width={FORMATS.vertical.width}
            height={FORMATS.vertical.height}
            schema={overlaySlideSchema}
            defaultProps={{
              previewBackdrop: true,
              showSafeZoneGuides: true,
            }}
            calculateMetadata={proResAlphaMetadata}
          />
        </Folder>
      </Folder>

      <Folder name="AEObility">
        <Folder name="Starter">
          <Composition
            id="AEObility-Starter-16x9"
            component={AEObilityStarter}
            durationInFrames={150}
            fps={DEFAULT_FPS}
            width={FORMATS.landscape.width}
            height={FORMATS.landscape.height}
            calculateMetadata={mp4Metadata}
          />
          <Composition
            id="AEObility-Starter-9x16"
            component={AEObilityStarter}
            durationInFrames={150}
            fps={DEFAULT_FPS}
            width={FORMATS.vertical.width}
            height={FORMATS.vertical.height}
            calculateMetadata={mp4Metadata}
          />
          <Composition
            id="AEObility-Starter-1x1"
            component={AEObilityStarter}
            durationInFrames={150}
            fps={DEFAULT_FPS}
            width={FORMATS.square.width}
            height={FORMATS.square.height}
            calculateMetadata={mp4Metadata}
          />
        </Folder>
      </Folder>

      <Composition
        id="DynamicComp"
        component={DynamicComp}
        durationInFrames={180}
        fps={DEFAULT_FPS}
        width={1920}
        height={1080}
        defaultProps={{ code: defaultCode }}
        calculateMetadata={({ props }) => ({
          durationInFrames: props.durationInFrames as number,
          fps: props.fps as number,
        })}
      />
    </>
  );
};
