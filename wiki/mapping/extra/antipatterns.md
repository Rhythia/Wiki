---
layout: doc
---

:::warning
It is recommended to read [this document](design_patterns.md) before proceeding.
:::

# Extra 03: Antipatterns
Learn how to identify common problems in your maps

## Introduction
An anti-pattern, also used in programming, is used to define a common problem in a possible solution
and its possible causes.

In Rhythia, the equivalent would be to find common flaws in maps.
We can also distinguish 2 types of anti-patterns depending on the topic they're related to:
- Execution/Gameplay
- Representation/Sync

### Execution anti-patterns
- **Difficulty dragging**: A map section's difficulty is greatly inflated/deflated forcefully by the mapper,
who wants a map that can fit in their envisioned difficulty range. 

:::details
This concept encompasses both difficulty spikes and difficulty drops.
:::

- **The Safe Player**: The patterns in the map feel way too predictable, so the player is not engaged.

### Representation anti-patterns
- **Overmapping/Undermapping**: The map has sections which are too dense/intense for the map.
- **BPM/Offset misusage**: The map has got at least one timing point wrong.



