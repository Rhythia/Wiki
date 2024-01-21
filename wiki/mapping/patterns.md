# Basic mapping: Patterns
Learn how to use patterns to make maps

## Common terms
- Absolute value (|x|): The positive equivalent of an integer.
  - |-x| = x
  - |x| = x  
- Displacement: The vector distance of 2 points (p, q) on a 2-dimensional grid.   
It can be expressed as (x, y), where:
  - x = |x2 - x1|
  - y = |y2 - y1|  
and p = (x1, y1), q = (x2, y2).  
- Turning point: A note which suddenly changes the pattern's direction.
- Quantum: Allows notes to be placed off the classic 3x3 grid's limits.
- Spin: Gamemode where both grid and camera move with the cursor.
- Half Lock (HL): Gamemode where only the grid moves with the cursor.
- Full Lock (FL): Gamemode where both grid and camera are static.

## Intro: Pattern terminology
Mappers usually express patterns as letter arrays, where each letter represents its corresponding keybind on the grid.  
Take for example **ZAQWE**. This pattern can be subdivided into **Z -> A -> Q -> W -> E**, 
which can then be translated into **(2|0, 2|1, 2|2, 1|2, 0|2)**.  
In the Editor, said pattern looks like this:  
![Slide](../src/map/slide.jpg)  

I'll make two necessary additions to this terminology:
1. Quantum notes will be expressed as _[Note]'_, since they can be approximated to the regular keybinds.  
For example, **E'** refers to a quantum note close to E, but its real position is undefined.
2. If a section is outside the grid, I'll add by how much at the end of the section.  
For example, **ZAQWE[+0.5]** refers the pattern mentioned earlier, but off the grid by 0.5 studs:
![Slide0.5](../src/map/slide05.jpg)
3. Lastly, to indicate a quantum slide, I'll just use the start and end notes, or if one of the slide's ends is also quantum, the note they're closest to.
   For example, **Q->E** refers to a quantum slide of unknown density that goes from Q to E.

:::info
These rules have no practical application and will be only used to simplify the explanation. 
The pattern names are also often simplified (ex. Long jump -> Jump).
:::

## 1. Jumps
**Jumps** are displacements from a note to another, measured in studs. They can be **vertical**, **horizontal**, or a mix of both (**diagonal**).
They receive various names depending on their displacements' length:
- **Long jump**: At least one of the displacements is longer than 2 studs. For example, **ZD** -> **(2, 1)**.
- **Short jump**: None of the displacements is longer than 2 studs. For example, **ES** -> **(1, 1)**.
- **Straight**: Both displacements are equal to 0. For example, **QQ** -> **(0, 0)**.

### 1.1.- Straight Jumps
These jumps are followed in a straight line, so one of the displacements will be equal to 0:
- **Sidesteps/steps**: Short, straight jumps. Commonly used in easier maps. If they are fast and repetitive, they're called **vibros**.
**Example**: AZAZ (bottom left corner sidestep)
- Verticals/Horizontals: Long, straight jumps. Commonly seen in pattern-wise maps. Probably the easiest type of jumps to read.  
**Example**: ZQXWCE (verticals)

### 1.2.- Mixed Jumps
These jumps involve both vertical and horizontal movement, one at a time or both simultaneously:
- **Diagonals/corner jumps**: Long, mixed jumps which require moving from corner to corner.    
**Example**: QC (top left to bottom right)
- Star jumps: Long, mixed jumps, often made up by repeating 1 long and 1 short displacement (for example, ZW). They are often hit by spinning. 
**Example**: ZWCAEXQD (full star pattern)
- **Rotating jumps**: Long, mixed jumps, made up by alternating verticals and horizontals with diagonals. This results in a spin kind-of pattern.
  Example: ZEXWCQDAEZ (full spin pattern).
- **Square jumps**: Long, mixed jumps which go around the grid’s edges. In essence, they're alternated verticals and horizontals.
**Example**: QECZQECZ (2 spins).
- **Pinjumps**: Jumps which, no matter their length, use a note alternately as an axis and go all over the grid. The axis doesn't have to be a corner note exclusively.
**Example**: ZWZDZEZQ (Z axis)

## 2. Slides & Spirals
- **Slides** are successions of notes that are 1 stud away from each other. It’s the same as a long jump pattern, but the notes in between also need to be hit.
- **Spirals** are successions of slides which go from one note to another, typically using the corner notes as turning points between slides.  
Slides/spirals tend to go all across the grid, which differentiates them from sidesteps, only involving 2 notes at a time. 

:::info
The main difference between a slide and a spiral is their length. A spiral should loop across the same positions more than once.  
Slides which are loops (end where they started) are **NOT** considered spirals.
:::  

We'll classify slides depending on their size. Spirals can be made by using **linking notes** (explained later).

### 2.1.- 2x1 Slides
- **Short slide**: 2 contiguous notes.  
**Example**: SD

### 2.2.- 2x2 Slides
These patterns can fit inside a 2x2 grid:
- **2x2 spin/sharps/B-spins**: 2 adjacent short slides which make up a small spin.  
**Example**: DCXS (DC + XS)
- **Corner slides**: Combination of 2 short jumps, one being horizontal and the other being vertical.  
**Example**: SED (SE + ED)

### 2.3.- Common 3x3 Slides
These slides fit inside a **3x3** grid. Most slide types fit into this category:
- **Straight slide**: Long, straight jump plus the note in the middle of it.  
**Example**: QWE (QE jump + W)
- **S-slide**: Combination of 3 non-repetitive horizontal/vertical slides, which are also adjacent, going in opposite directions.  
A variation of this pattern removes 2 notes at most from the start and the end.  
**Example**: EWSXCDE (full slide), EDSAZ (shortened slide)
- **L-slide**: Combination of 2 long, straight slides, one of them being vertical and the other being horizontal, which are joined together at a corner.  
**Example**: EDCXZ
- **B/P-slide**: Combination between 2 adjacent, straight slides which go in opposite directions, plus a note at the end.
A shortened version can be made by removing the 3rd and the 4th note.  
**Example**: QWEDSAZ (P-slide), ZXCDSAQ (B-slide)
- **Square slide**: Combination of 4 slides, 2 of them being horizontal and the other 2 being vertical, which are joined at the grid’s corners and make up a square which goes around the whole grid.  
**Example**: QWEDCXZAQ (full spin)

### 2.4.- Other 3x3 Slide Examples
- **U-slide**: Combination of 3 slides, 1 of them being perpendicular to the rest, which are joined at the grid’s corners and go around the whole grid.  
A variation of this pattern cuts off both ends of the slide.  
**Example**: QAZXCDE (full slide), AZXCD (shortened slide)
- **Extended 2x2 slide**: A 2x2 slide which has 1 extra note that forms a straight slide.  
**Example**: AZXSW (AZXS + W)
- **Rectangular slide**: Combination of 2 consecutive horizontal/vertical slides, which are also adjacent, going in opposite directions.  
**Example**: EWSXCDE (full rectangle)

## 3. How to create patterns
To make your own patterns, you must find a way to tie patterns to each other using a **linking note**.  
A **linking note** is a note which 2 patterns have in common, which thus can be used to join them.
:::info
QWEDCXZA**Q** and **Q**WEDSAZXC can be joined at **Q**, making **QWEDCXZAQWEDSAZXC**.
:::
You may use the patterns above (or your own!) as building blocks for your patterns.

## 4. Proper Pattern Usage
<u>How to use jumps properly</u>:
- **Don’t be afraid to use the S note in slower sections**.
- **Try to keep the jumps as straightforward as possible**.
- **Only use straights and sidesteps if necessary.**

<u>How to use slides/spirals properly</u>:
- **Avoid using many 2x2 slides**.
- **Avoid spirals that flow backwards**, for example: QWEDSAZX**C**XZAQEDC.
- **Looping shouldn't happen too often**, for example: **A**SXZ**A**SXZ**A** (3 loops).

## 5. Quantum
Quantum is a way of “breaking” the traditional 3x3 grid: it allows mappers to place notes off the grid's bounds.   
If the notes are outside the grid, it's referred to as “Offgrid Quantum” or just “Offgrid”.
The further the notes are from the grid's boundaries, the smaller they will look ingame, and the harder they will be to hit.  

Quantum can be applied to jumps by moving the notes off their original placements. 
Similarly, in slides and spirals, extra notes can be added in between the original notes via **Bézier curves**.

:::details
Originally, it was a mapper known as **eipcness99** who found out that if you made notes have decimal values instead of the usual, the notes became out of place. 
This was developed further when another mapper known as **HaxagonYT** used this technique on several of their maps like [Annoyo Iki no Bassu ni Notte Saraba](https://www.youtube.com/watch?v=zwP52A4oA18), 
including offgrid quantum jumps throughout the map, which get wider on every drop.

Even though Quantum is common nowadays, it wasn’t until SSQE was released that it became accessible to everyone, being its main objective making Quantum mapping easier.
:::

Let’s see how you can make Quantum patterns for your maps:
1. **Editing certain values on the map data**:  
Mess around with the position values for each note in the map's data.   
Not recommended due to how easy it is to break a map, and even lose all your progress.  
2. **Using any sort of rhythm game converter**:
For example, the **osu!-SS map converter**. A guide on how to use a newer version can be found [here](https://discord.com/channels/1064060807320702996/1168937144295899197/1168942385607225445).
3. Using the SSQE “Quantum” and "Bézier curve/Nodes" functions (most recommended)
[COMMIT UNTIL HERE]


  


