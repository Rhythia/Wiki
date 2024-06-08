---
layout: doc
---

# Basic Quantum Usage
An introduction to Quantum usage

## Introduction to Quantum mapping
Quantum is a way of “breaking” the traditional 3x3 grid: it allows mappers to place notes off the grid's bounds.   
If the notes are outside the grid, it's referred to as “Offgrid Quantum” or just “Offgrid”.
The further the notes are from the grid's boundaries, the smaller they will look ingame, and the harder they will be to hit.

:::details
Originally, it was a mapper known as **eipcness99** who found out that if you made notes have decimal values instead of the usual,
the notes became out of place, but the rest of the map still worked properly.  
This was developed further in early 2020 when **HaxagonYT (a.k.a. Haxagon)** used this technique on several of their maps like [Annoyo Iki no Bassu ni Notte Saraba](https://www.youtube.com/watch?v=zwP52A4oA18),
including offgrid Quantum jumps throughout the map.  
Even though Quantum is common nowadays, it wasn’t until **SSQE** was released that it became accessible to everyone, being its main objective making Quantum mapping easier.
:::

## How to create Quantum patterns
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

## Basic Applications
Normally, Quantum is used to reposition the notes outside the grid lines, but there are some common
techniques that are also useful although a bit more complex, such as:

### Offgrid
An offgrid note/section happens when the notes are outside the grid's boundaries, thus making the notes seem saller ingame.  
Offgrid can be used to extend jumps past the 2 blocks threshold; more generally, 
to make patterns harder to hit without raising the BPM.

Some good examples are Haxagon's ![Kami no Kotoba](https://www.youtube.com/watch?v=bCJoC8yqyrA&ab_channel=ARCW) (LOGIC?) and Iamuss76's Superhero (HARD).

### Quantum slides/Bézier curves
As explained in [Editor Assets](editor-assets.md), there is an option in the Patterns section of the Editor that allows you to 
place a slide using a series of notes as nodes. It can also be made curve by selecting 
The spacing between notes on the curve will depend on the input value of _Draw Bézier With Divisor_.
Said value needs to necessarily be a whole number which is greater than 0.  

:::tip
Bézier curves can also be created off the grid if the nodes are offgrid too.
:::

Some good examples are Haxagon's ![Fuego (sakuraburst remix)](https://youtu.be/8DaDoa1LlMw) (LOGIC?) and Azurlexx's Teriqma (HARD).

### Meganotes
A term which refers to multiple notes which are positioned closely together, and need to be hit in the same frame.
Effectively, this works as an "instakill" note that will drain a lot of HP if missed.  
Plus, depending on the notes' spacing, it can be harder to hit all notes at once.

Some good examples are (WIP).

### Scale/Rotate functions
These functions help create Quantum patterns 
