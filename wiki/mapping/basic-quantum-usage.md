# Basic Quantum Usage
An introduction to Quantum usage

## Introduction to Quantum mapping
Quantum is a way of “breaking” the traditional 3x3 grid: it allows mappers to place notes off the grid's bounds.   
If the notes are outside the grid, it's referred to as “Offgrid Quantum” or just “Offgrid”.
The further the notes are from the grid's boundaries, the smaller they will look ingame, and the harder they will be to hit.

Quantum can be applied to jumps by moving the notes off their original placements.
Similarly, in slides and spirals, extra notes can be added in between the original notes via **Bézier curves**.

:::details
Originally, it was a mapper known as **eipcness99** who found out that if you made notes have decimal values instead of the usual, the notes became out of place.
This was developed further when another mapper known as **HaxagonYT** used this technique on several of their maps like [Annoyo Iki no Bassu ni Notte Saraba](https://www.youtube.com/watch?v=zwP52A4oA18),
including offgrid quantum jumps throughout the map, which get wider on every drop.

Even though Quantum is common nowadays, it wasn’t until **SSQE** was released that it became accessible to everyone, being its main objective making Quantum mapping easier.
:::

Let’s see how you can make Quantum patterns for your maps:
1. **Editing certain values on the map data**:  
   Messing around with the position values for each note in the map's data.   
   Not recommended due to how easy it is to break a map, and even lose all your progress.
2. **Using any sort of rhythm game converter**:
   For example, the **osu!-SS map converter**. A guide on how to use a newer version can be found [here](https://discord.com/channels/1064060807320702996/1168937144295899197/1168942385607225445).
   If there's notes out of bounds, you can correct them using the Editor.
3. **Using the SSQE “Quantum” and "Bézier curve/Nodes" functions** (most recommended)
   To drag notes around the grid, you need to enable _Quantum_ in _Options_. You should make sure _**Quantum Grid Lines**_ (in the same menu) is enabled.  
   If _**Snap to Grid**_ is enabled, the notes will snap over the quantum grid lines, which you can adjust using _Snapping_.
   Otherwise, the notes will snap with a spacing of **0.01** studs (minimum). This essentially makes note placing unrestricted.

## Basic Quantum Usage
Here are some general tips to enhance your quantum mapping:
- **Abusing Bézier curves is not recommended, even less with divisors over 8**.
- **Vision blocks should be avoided by spacing the patterns**.
- **Do NOT overcomplicate patterns, else Spin players are going to have trouble beating the map**.
- **Avoid surpassing +0.5 offgrid**. For example, (0|2.75) goes over said bound.
- **Do not make quantum slides overlap, especially at the center note (S).**

Further Quantum techniques will be explained later.