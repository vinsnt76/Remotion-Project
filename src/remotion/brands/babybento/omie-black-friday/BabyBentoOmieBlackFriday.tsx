import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { InUseBackdrop } from "./InUse";
import { Scene1Hook } from "./Scene1Hook";
import { Scene2PainPoints } from "./Scene2PainPoints";
import { Scene3Snap } from "./Scene3Snap";
import { Scene4Hero } from "./Scene4Hero";
import { Scene5CTA } from "./Scene5CTA";
import { BB, TIMING } from "./theme";

export const BabyBentoOmieBlackFriday: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: BB.charcoal }}>
      <Sequence
        name="1 · Hook & stretch wipe"
        from={TIMING.hook.from}
        durationInFrames={TIMING.hook.duration}
      >
        <Scene1Hook />
      </Sequence>
      <Sequence
        name="2 · Stamped pain points"
        from={TIMING.pain.from}
        durationInFrames={TIMING.pain.duration}
        premountFor={15}
      >
        <Scene2PainPoints />
      </Sequence>
      <Sequence
        name="3 · 3-2-1 + snap cut"
        from={TIMING.snap.from}
        durationInFrames={TIMING.snap.duration}
        premountFor={15}
      >
        <Scene3Snap />
      </Sequence>
      <Sequence
        name="In-use backdrop"
        from={TIMING.hero.from}
        durationInFrames={TIMING.hero.duration + TIMING.cta.duration}
        premountFor={15}
      >
        <InUseBackdrop />
      </Sequence>
      <Sequence
        name="4 · Hero showcase"
        from={TIMING.hero.from}
        durationInFrames={TIMING.hero.duration}
      >
        <Scene4Hero />
      </Sequence>
      <Sequence
        name="5 · CTA"
        from={TIMING.cta.from}
        durationInFrames={TIMING.cta.duration}
      >
        <Scene5CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
