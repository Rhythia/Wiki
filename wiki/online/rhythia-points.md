---
layout: doc
---

# Rhythia Points
The ranked scoring system for Rhythia

## Scoring system

Rhythia uses rp (Rhythia Points) to quantify a player's skill and progression.

There is currently plans to update the rp system to make it more relevant to the game,
as of right now the game scoring system is based similarly to osu relax's calculations.

Only your __best play__ for each map will be used for calculating your scores.

For now this section remains bare-bones until a new system is implemented.

## Weight system

Rhythia uses a common concept called weight where your points you earn for a play is
determined by your relative performance to other scores you submitted as well.

The formula to calculate rp is:

```rp = p * 0.97^(n-1)```

When you look at yours scores on the website you will see two rp values for each score.
The first one represents your unweighted score and the second one represents your weighted score.
Only the second score will be used for determining your _rank_.

![Scores Example](/src/online/topscores.png)