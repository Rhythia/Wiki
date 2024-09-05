---
layout: doc
---

# Manual BPM Timing
Learn how to time songs without using any external references.   
**Remember you can set up a timing point in _Timing_ >> _Open BPM Settings_.**

## Common terms
- **Subdivision**: To split a beat in several, smaller ones. This can be achieved by raising the beat divisor.
- **Syncopation**: A note instance which doesn't snap to a beat divisor.

## Introduction: How to create a timing point
:::tip
When timing a song, it is recommended to have _Enable Waveform_ on.
The waves on the track indicate where each sound starts, which should definitely help.
:::

To set up a timing point correctly, you'll need the right BPM/Offset values, which can be found as follows:

1. First, to get the **Offset**, or _the difference between the start of the song and the start of the map_.
   - Enable the **Metronome** function
   - Lower your speed down (to around 50%) to find out the timestamp of the first important sound.
2. Once you get the timestamp, try playing the song up to the timing point.
_The first metronome tick should match the first sound you want to map._
3. Then, input _arbitrary_ BPM values until the metronome tick matches the song's beat.
   - If the metronome is too **early**, lower the value.
   - If the metronome is too **late**, raise the value.
4. Once you get an expected BPM value, _make sure it holds up_ by playing the song past the timing point.


### After you have your timing point set up...
1. Change the beat divisor to 1 (recommended), and play the song past the timing point.
   - If the metronome tick is _consistently_ off sync, the **offset** is wrong.
   - If the metronome tick gets _progressively_ off sync, the **BPM** is wrong.  
     _These cases aren't mutually exclusive: both could happen at once_.
2. Check if any other timing points are needed until the end of the song.
   - If there are, repeat the steps above from the top.
   - If you didn't have any issues up to here, you're good to go!

:::tip  
Though perfect sync is not required, try to time the map as precisely as possible.
- A general offbeat measure is **5-10ms**, anything more than **15ms** will feel off.
- The metronome tick is **+28ms** off compared to the note hit sound.
:::

## Timing complexity
We can classify songs based on the number of timing points needed to time them:

### Constant BPM songs - 1 timing point
The easiest kind of song to time. You'll only need to set up **one** timing point, and it'll last for the whole map.  
Most songs fall into this category.

### Variable BPM songs - many timing points
If you try to set up just a timing point, you'll notice that the metronome tick gets progressively offbeat. 
Keep setting up timing points until there are no more BPM changes to be found.
We will split them into 2 cases:
- **Regular**: Located on a whole beat (main beat line)   
![RegularTimingPoint](/src/map/regularTimingPoint.jpg)
- **Syncopated**: Not located on a whole beat (ex. below snapped to a 1/8 beat)  
![SyncopatedTimingPoint](/src/map/syncopatedTimingPoint.jpg)

:::tip
Since syncopated timing points are not located on whole beats, consider subdividing the current BPM to snap them.
:::

## Edge cases
If you still aren't able to figure out how to time a specific song, check out these examples:

### Divisor reset
Sometimes, a song may suddenly anticipate the downbeat (_syncopate_), which makes the rest of song 
seem as if it was late despite the BPM being correct.  
In these cases, adding an extra timing point with the same BPM might be needed. 
This makes the downbeat fall in place correctly.

### Divisor oddities
Most songs you'll find have a constant **4/4** time signature (4 quavers per beat), but that's not always the case.
Some songs have **polyrhythms** which just are more complex rhythms made out of simpler ones.
[This one](https://www.youtube.com/watch?v=MF_ANz_hTzE) might be the most famous out of them.  

In this case, _try to figure out how to **decompose** said rhythms in x/4 rhythms,
then recalculate the BPM accordingly if needed_.
[This video](https://youtu.be/3PbMV2OYaB8?si=6nrW8ly3WUvZr5H0) is a neat visual representation 
of what you're intended to do.

### Fixing no-snap syncopation
If there's a sound which can't be snapped to any beat divisor,
you can override the current BPM at the timestamp by setting a timing point there.

### Ad-libitum, or free tempo songs
Certain songs, like live performances or experimental songs, may not have a fixed BPM, 
but they fluctuate around certain ones.  
An example could be [rosso](https://www.youtube.com/watch?v=cIBXD0mVNIk) by jizue. 
It may seem like the speed is constant, but if you look closely, 
you'll notice the performers play subtly faster or slower depending on the mood of the song.

In order to deal with this problem:
- Focus on a melody or beat (especially drums).
- Override the BPM whenever you need (every whole beat should suffice), using subdivision if necessary.

## Summary
- To set up a timing point properly:
  - Get the Offset first using a lower playback speed.
  - Then, get the BPM by snapping with the metronome.
- Make sure the map is 15ms off AT MOST.
- Using subdivision may help find any syncopation cases (when the timing point isn't on a whole beat).
