---
layout: doc
---

# Basic mapping: Patterns
Learn how to use patterns to make maps

## Common terms
- **Spacing**: The distance (![Manhattan distance](https://en.wikipedia.org/wiki/Taxicab_geometry)) between 2 notes.
It can be on the X-axis (horizontal) or the Y-axis (vertical).
- **Quantum**: A setting which allows notes to be placed off the regular 3x3 grid's limits.

## Intro: Pattern terminology
Mappers usually express patterns as **letter arrays**, where each letter represents its corresponding keybind on the grid.   
In said pattern, notes should be hit in **reading order** (left to right) and **one at a time**.

Take for example **ZAQWE**. This pattern should be hit in this order: **Z -> A -> Q -> W -> E**, 
and it looks like this in the editor:  
![Slide](/src/map/slide.jpg)

## 1. Jumps
**Jumps** are displacements from a note to another, measured in **blocks**. 
We can classify any jump type into subcategories by their spacings'**length**:
- **Long jump**: At least one of the spacings is longer than 2 blocks.  
For example, **ZD** means moving **2** blocks to the right and **1** block upwards.
- **Short jump**: None of the spacings is longer than 2 blocks. 
For example, **ES** means moving **1** block to the left and **1** block downwards.
- **Stack**: Both spacings are equal to 0. 
For example, **QQ** means moving **0** blocks in either direction.

:::details
Commonly, the term "jump" refers _exclusively_ to **long** jumps. Short jumps are as common.
:::  

We can also break down jumps into subcategories by their **movement** type:
### Straight Jumps
These jumps are followed in a straight line; one of their spacings will be equal to 0:
- **Sidesteps**: Jumps of spacing less than 2. Commonly used in easier maps.
**Example**: AZAZ (bottom left corner sidestep)
- **Verticals**/**Horizontals**: Jumps of spacing of at least 2. Commonly seen in pattern-wise maps. Probably the easiest type of jumps to read.  
**Example**: ZQXWCE (full vertical pattern)

:::details
If they are fast enough, they're also called **vibros**.
:::

### Mixed Jumps
These jumps involve both vertical and horizontal movement, one at a time or both simultaneously:
- **Diagonals**: Jumps which require moving diagonally. If the player needs to move from corner to corner they're called **corner jumps**.  
**Example**: QC (top left to bottom right)
- **Star jumps**: Jumps which look similar to an 8-pointed star ([octagram](https://en.wikipedia.org/wiki/Octagram)).
It is often hit by spinning in circles.
**Example**: ZWCAEXQD (full star pattern)
- **Rotating jumps**: Jumps made up by alternating verticals and horizontals with diagonals. This results in a spin kind-of pattern.
  Example: ZEXWCQDAEZ (full spin pattern)
- **Square jumps**/**Spins**: Jumps which go around the grid’s edges. In essence, they're alternated verticals and horizontals.
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
Slides which end where they started, like **Q**WEDSA**Q** are **NOT** considered spirals.
:::  

Since there's many distinct possibilities for slides and spirals, 
we'll go with some common examples based on their **length** (in notes).
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
You may save patterns by selecting the notes on the track, then pressing _Shift_ + any numeric key (0-9).
To place a stored pattern, simply press the numeric key which has the bound pattern.
To clear a binding made previously, press _Ctrl_ + the corresponding numeric key.
:::
