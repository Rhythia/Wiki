---
layout: doc
---

# Basic mapping: Patterns
Learn how to use patterns to make maps

## Common terms
- Spacing (form. ![Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry)):
The distance of 2 points (p, q) on a 2-dimensional grid, when only travelling on the edges of said grid.
- Quantum: Allows notes to be placed off the classic 3x3 grid's limits.
- Spin: Gamemode where both grid and camera move with the cursor.
- Half Lock (HL): Gamemode where only the grid moves with the cursor.
- Full Lock (FL): Gamemode where both grid and camera are static.

## Intro: Pattern terminology
Mappers usually express patterns as letter arrays, where each letter represents its corresponding keybind on the grid.  
Take for example **ZAQWE**. This pattern can be subdivided into **Z -> A -> Q -> W -> E**, 
which can then be translated into **(2|0, 2|1, 2|2, 1|2, 0|2)**.  
In the Editor, said pattern looks like this:  
![Slide](/src/map/slide.jpg)

:::info
These rules and pattern names have no practical application and will be only used to simplify the explanation.
:::

## 1. Jumps
**Jumps** are displacements from a note to another, measured in studs. They can be **vertical**, **horizontal**, or a mix of both (**diagonal**). 
We can classify any jump type into subcategories by **length**:
- **Long jump**: At least one of the spacings is longer than 2 studs. For example, **ZD** -> **(2, 1)**.
- **Short jump**: None of the spacings is longer than 2 studs. For example, **ES** -> **(1, 1)**.
- **Stack**: Both spacings are equal to 0. For example, **QQ** -> **(0, 0)**.  

:::details
Normally, the term "jump" refers to a spacing of at least 2 blocks.
:::  

We can also break down jumps into subcategories by their **movement** type:
### Straight Jumps
These jumps are followed in a straight line, so one of the spacings will be equal to 0:
- **Sidesteps/steps**: Straight jumps of spacing less than 2. Commonly used in easier maps.
**Example**: AZAZ (bottom left corner sidestep)
- Verticals/Horizontals: Straight jumps of spacing of at least 2. Commonly seen in pattern-wise maps. Probably the easiest type of jumps to read.  
**Example**: ZQXWCE (verticals)

:::details
If they are fast enough, they're also called **vibros**.
:::

### Mixed Jumps
These jumps involve both vertical and horizontal movement, one at a time or both simultaneously:
- **Diagonals**: Mixed jumps which require moving diagonally. If the player needs to move from corner to corner they're called **corner jumps**.  
**Example**: QC (top left to bottom right)
- **Star jumps**: Mixed jumps which look similar to an 8-pointed star ([octagram](https://en.wikipedia.org/wiki/Octagram)).
It is often hit by spinning in circles.
**Example**: ZWCAEXQD (full star pattern)
- **Rotating jumps**: Mixed jumps, made up by alternating verticals and horizontals with diagonals. This results in a spin kind-of pattern.
  Example: ZEXWCQDAEZ (full spin pattern)
- **Square jumps**: Mixed jumps which go around the grid’s edges. In essence, they're alternated verticals and horizontals.
**Example**: QECZQECZ (2 spins)
- **Pinjumps**: Jumps which, no matter their length, use a note alternately as an axis and go all over the grid. 
Said axis doesn't have to be a corner note _exclusively_.
**Example**: ZWZDZEZQ (Z axis)

## 2. Slides & Spirals
- **Slides** are successions of notes that are 1 block away from each other. It’s the same as a long jump pattern, but the notes in between also need to be hit.
- **Spirals** are successions of slides which go from one note to another, typically using the corner notes as turning points between slides.  
Slides/spirals tend to go all across the grid, which differentiates them from sidesteps, only involving 2 notes at a time. 

:::info
The main difference between a slide and a spiral is their length. A spiral should loop across the same positions more than once.  
Slides which are loops (end where they started, ex. **Q**WEDSA**Q**) are **NOT** considered spirals.
:::  

Since there's many possibilities for slides and spirals, we'll go with some common examples based on their length (in notes).
Spirals can also be made by linking slides together, so we won't be considering them here:

### Short Slides
- **Straight slide**: 3 contiguous vertical/horizontal notes
**Example**: EDC 
- **Corner slide**: 3 contiguous notes which go over a corner
**Example**: AQW (top left)

### Medium Slides
- **Short S-slide**: 5 contiguous notes, which go from corner to corner including the whole middle column and flow like an "S" shape.    
**Example**: EWSXZ (top right to bottom left)
- **Short U-slide**: 5 contiguous notes, which go around half of the grid and flow like a "U" shape.
**Example**: AZXCD (bottom half)
- **L-slide**: 5 contiguous notes, which go around a corner and flow like an "L" shape. 
**Example**: EDCXZ (top right to bottom left)

### Long Slides
- **S-slide**: 8 contiguous notes, which go from corner to corner including all columns and flow like an "S" shape.    
  **Example**: EDCXSWQAZ (top right to bottom left)
- **O-Slide/Spin**: 8 contiguous notes, which go around the grid and flow like an "O" shape.
  **Example**: QWEDCXZAQ (clockwise spin)

## 3. How to create patterns
To make your own patterns, you must find a way to tie smaller patterns to each other using a **linking note**.  
A **linking note** is a note which 2 patterns have in common, which thus can be used to join them.  
For example, QWEDCXZA**Q** and **Q**WEDSAZXC can be joined at **Q**, making **QWEDCXZAQWEDSAZXC**.  

You may use the patterns above (or your own!) as building blocks for your map.

:::info
You may save patterns by selecting the desired pattern, then pressing _Shift_ + any numeric key (0-9).
To place a stored pattern, simply press a key which has a bound pattern.
To clear a binding made previously, press _Ctrl_ + the corresponding numeric key.
:::

## 4. Flow
The **flow** of a pattern is the direction in which the pattern goes. In most maps, flow is often changing to spice things up.
We can also classify it into types based on its direction:
- **Vertical**: Up to down or vice versa
- **Horizontal**: Left to right or vice versa
- **Circular**: In circles, clock-wise or counter-clockwise

Generally, flow indicates the **deviance** between where you expect to go next and where you're supposed to.   
While playing inside your comfort zone, flow might not be noticeable.
Flow depends on the maps you play, the patterns you enjoy most or the ones you find easier, and your ability to play the game as well.
