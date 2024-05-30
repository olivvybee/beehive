---
title: 'Listing fonts used in a PDF without Adobe Reader'
date: 2024-05-30T16:30:00Z
description: 'A simple UNIX tool I found that does one thing well.'
---

While considering potential storage solutions for
[Sentinels of the Multiverse: Definitive Edition](https://boardgamegeek.com/boardgame/335212/sentinels-of-the-multiverse-definitive-edition)
I found myself wanting to know which fonts the game uses. That way if I want to
create additional materials like dividers, I can make sure they match the visual
design of the game.

Unfortunately I couldn't find a definitive (no pun intended) answer, so I had
the idea of seeing which fonts are used in the PDF of the rulebook, since it
definitely uses the same fonts as the cards. It turns out that Preview on macOS
has no way of telling you which fonts are used in a document, so I turned to
google and was disappointed to find most of the answers suggesting Adobe Reader
as the solution. I definitely don't have or want Adobe Reader.

Then I came across a
[StackOverflow question](https://stackoverflow.com/questions/614619/how-to-find-out-which-fonts-are-referenced-and-which-are-embedded-in-a-pdf-docum)
asking a related (but not identical) question about fonts in PDFs, and it turned
out the answer to their question is the same as mine: the `pdffonts` utility
that's distributed as part of
[Poppler](<http://en.wikipedia.org/wiki/Poppler_(software)>).

All you have to do is invoke the tool and point it at the PDF you're interested
in, and it'll list every font used in that document. You can even use the `-f`
and `-l` flags to narrow the search down to specific pages. Here's the output
from running `pdffonts` on the Sentinels rulebook, just looking at pages 1 and
2:

![A screenshot of terminal output displaying a table which lists font names and metadata about how they're used in the PDF.](/img/2024-05-30/pdffonts.png)

On macOS I was able to install `pdffonts` using homebrew
(`brew install poppler`) and it installed all of the Poppler utilities at once.
