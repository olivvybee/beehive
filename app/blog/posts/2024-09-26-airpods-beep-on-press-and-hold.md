---
title:
  'If your AirPods Pro beep three times when trying to adjust noise cancelling'
date: 2024-09-26T09:00:00Z
description:
  'A simple check to fix a very annoying and confusing problem with AirPods Pro.'
---

I am desperately trying to switch to USB-C on all my devices, and in aid of that
I bought the USB-C charging case for my old AirPods Pro 2 that were still
charging using Lightning. It was a fairly smooth process, but it did involve
unpairing the AirPods from my phone and re-pairing them from the new case.

After I had done so, I discovered I could no longer switch between noise
cancelling modes by pressing and holding the stem of the AirPods. When I tried,
I would just hear three beeps in my ear and the setting wouldn't change. But I
could still change modes from my phone, so the AirPods themselves weren't
broken.

With a bit more investigating, I discovered I could press and hold to switch
from "adaptive" to noise cancelling just fine, but once they were set to noise
cancelling, I'd start hearing the dreaded beeps.

I opened up the AirPods settings on my phone with the intention of changing the
setting for what happens when you press and hold, which is when I discovered the
issue:

![A screenshot of the AirPods settings where only "noise cancellation" is ticked in the list of modes.](/img/2024-09-26/noise-cancelling-modes.jpeg)

Somehow during the re-pairing process, this setting had changed so that a press
and hold could _only_ activate noise cancelling. After ticking "adaptive" (so
that both are ticked) I was able to switch back and forth again just fine.

Trying again now, the setting doesn't actually _let_ you only have one option
ticked. So it must have happened because of a weird bug during setup.
