import React from "react";
import { Series } from "remotion";
import { Slide1Hook } from "./Slide1Hook";
import { Slide2Customization } from "./Slide2Customization";
import { Slide3Thermal } from "./Slide3Thermal";
import { Slide4Durability } from "./Slide4Durability";
import { Slide5Versatility } from "./Slide5Versatility";
import { Slide6CTA } from "./Slide6CTA";
import { SLIDE_DURATION_FRAMES, type OverlaySlideProps } from "./theme";

export const MontiiCoMaster: React.FC<OverlaySlideProps> = (props) => {
  return (
    <Series>
      <Series.Sequence
        durationInFrames={SLIDE_DURATION_FRAMES}
        name="Slide 1 - Hook"
      >
        <Slide1Hook {...props} />
      </Series.Sequence>
      <Series.Sequence
        durationInFrames={SLIDE_DURATION_FRAMES}
        name="Slide 2 - Customization"
      >
        <Slide2Customization {...props} />
      </Series.Sequence>
      <Series.Sequence
        durationInFrames={SLIDE_DURATION_FRAMES}
        name="Slide 3 - Thermal"
      >
        <Slide3Thermal {...props} />
      </Series.Sequence>
      <Series.Sequence
        durationInFrames={SLIDE_DURATION_FRAMES}
        name="Slide 4 - Durability"
      >
        <Slide4Durability {...props} />
      </Series.Sequence>
      <Series.Sequence
        durationInFrames={SLIDE_DURATION_FRAMES}
        name="Slide 5 - Versatility"
      >
        <Slide5Versatility {...props} />
      </Series.Sequence>
      <Series.Sequence
        durationInFrames={SLIDE_DURATION_FRAMES}
        name="Slide 6 - CTA"
      >
        <Slide6CTA {...props} />
      </Series.Sequence>
    </Series>
  );
};
