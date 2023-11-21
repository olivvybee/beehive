---
title: 'Making a Pixel Watch Face'
date: 2023-11-21T15:00:00Z
---

Last week I saw
[a fediverse post](https://corteximplant.com/@Botiplz/111408017729006507) where
someone had recreated the
[What a Week, Huh? meme](https://knowyourmeme.com/memes/what-a-week-huh) as a
watch face:

![A Pixel Watch with a watch face showing an illustration of Tintin and Captain Haddock sitting at a bar. Captain Haddock is saying "What a day, huh?", and Tintin is replying "Captain, it's 09:41".](/img/2023-11-21/original-face.jpg)

Unfortunately they did not provide any information about where they got the face
from, so I set about a mission to recreate it (and slightly improve it, because
I really did not like how the speech bubbles were clipped by the circular
display). I should note that I personally don't have a Pixel Watch, but my
partner does, so I was making it for them to use.

As an Apple Watch user, which famously does not allow custom watch faces of any
kind, I had no idea how Wear OS watch faces are made. I assumed that it'd need
to be an entire app that vended a watch face using an API.

While I believe that is one option, it turns out Samsung has an app called
[Watch Face Studio](https://developer.samsung.com/watch-face-studio/overview.html)
which is a WYSIWYG style editor for building watch faces. So I downloaded that
and got to work. It even turned out that the default project settings work
perfectly for a Pixel Watch!

## The first pass

Starting with a copy of the original meme image, I used
[Affinity Designer](https://affinity.serif.com/en-gb/designer/) to painstakingly
remove the yellow background from the comic panel and arrange everything in a
450 by 450 pixel image (the resolution of the Pixel Watch). The result is a
template with which I could start building the watch face.

![A screenshot of Watch Face Studio with a mockup of a watch face with a version of the meme image where the speech bubbles are empty.](/img/2023-11-21/blank-template.png)

Then I added a date component and a time component from the "Add Component"
dropdown to put the text into the speech bubbles.

![Another screenshot of Watch Face Studio where the speech bubbles have been filled in. Captain Haddock is saying "What a Tuesday, huh?" and Tintin is replying "Captain, it's 10:08".](/img/2023-11-21/with-date-and-time.png)

Using a custom format, I could make a single component display the entire line
of text, which means it will flow around the dynamic date or time, rather than
trying to leave a gap which would accommodate all possible values.

![A screenshot of the inspector in Watch Face Studio. The date format for the date component on the watch face is set to "What a [DAY_WEEK_F], huh?".](/img/2023-11-21/date-format.png)

## The always-on problem

At this point, I thought I was ready to test the watch face on an actual watch.
Unfortunately when I clicked "Run on Device", I was greeted with an error
message:

![A screenshot of an error dialog that says "To conserve the watch battery in Always-on mode, a watch face should have less than 15% of pixels lit. Currently, your watch face has 34.6% of pixels lit at 00:51. Please make necessary changes to your Always-on watch face to show fewer lit pixels.](/img/2023-11-21/always-on-error.png)

It makes sense that the always-on version of a watch face should light up fewer
pixels to use less battery (since it's an OLED display), but I didn't realise it
would completely block me from running the watch face locally for testing.

It turns out that in the layers panel in Watch Face Studio, you can switch
between "Normal" and "Always On" modes. So I went back to Affinity Designer and
created a second version of the image where the speech bubbles were inverted and
the characters were a little smaller. Then I switched to always-on mode, deleted
the copy of the images and components that were duplicated from normal mode, and
replaced them with the new inverted version.

![A screenshot of Watch Face Studio with the same watch face as before, but the speech bubbles now use white text on a black background.](/img/2023-11-21/always-on-first-attempt.png)

After some adjustments to the image to make sure only 15% of the pixels were
being used, it finally let me run the watch face on a real device!

Except... it turns out the components in always-on mode _weren't_ duplicates
after all. The components in the layers panel are shared between both modes, so
switching back to normal mode I could see that it had been replaced with the
inverted version as well.

(Note: I'm sure there are some people who would prefer to have the inverted
version as the _only_ version, because it's more subtle than the original. But
the goal of this project was to recreate the image from the fediverse post.)

## Separating normal and always-on

This stumped me for a while! Why have two modes if they're totally linked and
changes to one mode affect both? At first I thought I was going to have to give
up on the idea of them being different, until I had the idea to try something:
maybe even if the components are shared between modes, the visibility of
individual components isn't? After all, it wouldn't make sense to have invisible
components if they were invisible in both modes.

This was a totally random guess, but I tried it anyway. I made a copy of each
component, one for normal and one for always-on. Then I set the visibility of
each component in each mode so that only the regular version was visible in
normal mode, and only the inverted version was visible in always-on mode.

![Two screenshots of the layers panel in Watch Face Studio where there are two each of the date, time, and image components, but in each screenshot one of each type is hidden, indicated by an icon of an eye with a line through it.](/img/2023-11-21/visibility.png)

As luck would have it, that actually worked! Now the normal and always-on modes
looked different, as I intended. Finally I could run it on a real Pixel Watch
and see it live.

![A Pixel Watch running the watch face from this post. Captain Haddock is saying "What a Tuesday, huh?" and Tintin is replying "Captain, it's 12:18"](/img/2023-11-21/on-device.jpg)

## Making it complicated

In the photo above, you can see the date above the speech bubbles. In the watch
world, this is known as a "complication", and it's something I threw in at the
end to make the watch face a little bit more useable.

Wear OS has a similar complication system to watchOS, where each watch face has
defined slots where the user can choose which complication to display in each
slot. Adding support for a complication was as easy as adding one from the "Add
Component" dropdown.

![A screenshot of Watch Face Studio with the same watch face but with a complication at the top of the screen. It's a placeholder so it says "Text" and "Title".](/img/2023-11-21/complication.png)

Since the idea was to leave the complication configurable, I didn't change any
of the settings. You can choose a default complication that gets put into the
slot when the face is installed, but there isn't one that particularly made
sense for this face, so I left it blank by default.

## Final thoughts

Watch Face Studio is a surprisingly easy and capable way of making a Wear OS
watch face. I only made a simple face with a static image and two text elements,
but it can do a lot more, including animations based on the current time.

As far as I can tell, the method of duplicating components and hiding them in
normal and always-on mode to swap them out isn't documented anywhere. Hopefully
this post helps someone out who's as stuck as I was with that problem.

## Where can I get the watch face?

I'm not a registered developer on the Play Store, so the face isn't available
officially. I've put the code for the Watch Face Studio project
[on github](https://github.com/olivvybee/what-a-week-watch-face), which will
allow you to open it in WFS and install it on a watch. Note that it's only
designed specifically for the Pixel Watch, so I have no idea how well it works
on other watches.
