# Map creation
Learn how to make your very own maps

## Creating a map
On the menu that has popped up, you will see the following options:

- __Create New Map__: used to create a new empty map as well as its asset file.
- __Load Map__: used for loading saved maps.
- __Import Map__: used to import map data (raw data / GitHub links).
- __Settings__: mostly used for customizing.
- __Autosaved Map__: used to load an autosaved map, if one exists.
- __Edit Last Map__: used to load the last manually saved map.

Head over to _Create New Map_ to create a new map, then get an audio file of the song you want to map, either in __mp3__ or __ogg__ audio format.
If done correctly, the Editor layout should pop up (first image on the next section).

:::details
You'd normally need an audio ID from the Roblox Audio Library to map. However, this method is hardly viable since there are various restrictions over public audios (since March 2022).
Therefore, importing audios directly is the best way around.
:::

From here on, you can start placing down notes on the grid.

## Editor assets
There are many assets in the Editor that may be helpful while mapping. Let's take a look at some of them:

:::info
This part of the tutorial is 100% accurate for SSQE v1.8.5.5 only. Versions before and after that may vary a bit.
:::

### Key Assets
![KeyAssets](../src/map/keyAssets.jpg)
These assets cannot be tampered with in any way and are mandatory to map:
1. __Grid__: Where the maps are built on. It is a 3x3 grid, meaning it has 3 blocks height and 3 blocks width. This can be further amplified using _Quantum_ (explained later):
2. __Progress Bar__: The bar represents the length of the song, while the dot over it represents the current timestamp, with a string above indicating it in milliseconds (ms) and another below in mm:ss format.
3. __Note Counter__: It shows the total number of notes in the map.
4. __Song Duration__: Shows how long the song lasts for.
5. __Copy Map Data__: Copies the data from the map’s file.
6. __Play Map__: Used to playtest your map in Rhythia. _You need to enable “Use SS+ for Playtesting” in “Settings” to use this_.
7. __Back To Menu__: Used to return to the Editor’s Menu. _Don’t forget to save your progress!_
8. __Track__: Here is where the placed notes are displayed. The pink bar on it shows the timestamp where the notes will be placed, while two red bars act as timestamp bounds for the song.

### Regular Assets
You might need to edit these assets while mapping:
1. **Zoom**: Zooms the track in or out. It can be triggered when scrolling while holding the “Ctrl” key down.
2. **Auto-Advance**: When activated, after placing a note, the track will automatically advance to the next divisor line.
3. **Beat Divisor**: Helps you divide a beat in several parts (subdivide), in order to map a section more accurately. Hold down the “Shift” key while scrolling to easily change it.
4. **Snapping**: While “Quantum” is triggered, it allows you to snap the notes to a subgrid of __3/x__ blocks spacing, where x is your input on the bar.
:::tip
If the main grid is x = 3; 3/3 = 1 block spacing, a subgrid could be x = 12; 3/12 = 0.25 blocks spacing.
:::
5. **Select between ms**: Selects every note from the first timestamp (upper keypad) to the second one (lower keypad).
6. **Jump to MS**: Moves the pink bar to a determined position on the map in milliseconds.
7. **SFX Offset**: Delays the hitsound by a certain offset.
8. **SFX**: Determines the SFX’s (sound effects’) volume.
9. **Music**: Determines the song’s volume.
10. **Playback Speed**: Speeds the song by a certain amount, down to 20% and up to 200%.

### Options, Timing and Patterns
They're located near the top left corner of the mapping menu.
### 1. Options
![Options](../src/map/options.png)

1. **Autoplay**: Triggers a cursor which will automatically play the map for you.
2. **Approach Squares**: Allows you to see the notes as they approach the grid.
3. **Grid Numbers**: Alows you to see the order of the notes you placed.
4. **Grid Letters**: Allows you to see the keyboard letter associated with each grid position.
5. **Quantum**: Enables you to push the limits of the 3x3 grid up to +0.875/-0.875, and inside the grid in intervals smaller than 1.
6. **Use Numpad**: Enables the number pad on your keyboard for mapping. 1 becomes Z, 2 will be X and so on. 0 remains unused.
7. **Quantum Grid Lines**: Makes the grid lines readjust to the quantum divisor used in _Snapping_.
8. **Snap to Grid**: If enabled, it allows the notes to be snapped to the grid lines. Useful for quantum mapping.
9. **Metronome**: if enabled, emits a tick sound every beat. Can be adjusted using the beat divisor.
10. **Separate Click Flunctions**: Enables the player to see what clicking on the grid does
(by default, “Place”). For Quantum mapping, it is advisable to change it to “Select”.
11. **Approach Rate**: The notes will approach faster or slower depending on the slider’s position.
12. **Track Height**: Adjusts the height of the track.
13. **Cursor Pos**: Adjusts where the note will be placed, relative to the track. 0% will be topmost left and vice versa.

### 2. Timing
![Timing](../src/map/timing.jpg)
1. **Export Offset\[ms]**: The Offset that the map will have when exported, in milliseconds.
2. **Use Current ms**: Sets the Export Offset to the current timestamp.
3. **Open BPM Setup**: Allows to set up Timing Points (introduced later on).
4. **Edit Bookmarks**: Shows the current list of bookmarks for the map. These indicate the start/end of a part of the map. For example, they can be used to separate map sections. You only need to input a name and a timestamp for each of them.

### 3. Patterns
![Patterns](../src/map/patterns.png)
1. **Flips**: Selected notes will be flipped horizontally (_Shift+H_) or vertically (_Shift+V_) if these settings are triggered, respectively.
2. **Nodes**: The base for Quantum curves and slides. Clicking _Store Nodes_ while selecting notes will turn them into nodes, which will trace a Quantum pattern using red "pseudo-notes", as seen below:
![Patterns](../src/map/nonbezier.jpg)  
You may unselect the nodes at any time by clicking _Clear Nodes_.
3. **Bézier Curves**: This function creates a curve via node-to-node iterations ([Bézier curve](https://en.wikipedia.org/wiki/Bézier_curve)) with the stored nodes. The red notes will be the curve output of the following nodes:
   ![Patterns](../src/map/bezier.jpg)

4. **Draw Bézier With Divisor**: Adjusts the note density of the curve. Clicking _Draw_ triggers the curve function.
5. **Rotate by Degrees**: Rotates _clockwise_ the selected notes by a certain amount in degrees, which can also be negative.
6. **Scale by Percent**: Scales the selected notes by a percent.

With that set, you’re done with the general usage explanation. You may check and edit the Editor’s keybinds in “Settings” >> “Change Keybinds” on the Editor’s main menu later on.

## Setting up timing points
Before starting to place notes, it's important to time the map properly using the aforementioned **timing points**. Remember that you can set them up via: _Timing_ > _Open Timing Setup_:  
![TimingSetup](../src/map/timing.jpg)

Inside this menu, we have a few more assets that have to do with timing points:
- **Add Point**: Adds a new Timing Point with said BPM and Offset to the list above. Said list can have as many timing points as needed, but cannot have repeated values.
- **Delete Point**: Deletes the selected Timing Point(s).
- **Update Point**: Updates the selected Timing Point(s) with the input BPM/Offset.
- **Current Pos**: Updates the input Offset to the current position on the track.
- **Move Selected Points (ms)**: Moves the selected Timing Point(s) according to the Offset.
- **Importing Timing Points**: Using _Paste Timings_ or _Open Beatmap Timings_, you may be able to import the timing points from another rhythm game's map. The latter supports:
  - osu! (any gamemode)
  - A Dance Of Fire And Ice (ADOFAI)
  - Clone Hero (CH)
- **Open BPM Tapper**: Allows you to approximate the song’s BPM by tapping a button to the beat.

:::info
To set up a proper timing point, you'll need to get the right BPM and offset for it.  
You can get them from various sources:
- From another rhythm game, and importing them via _Paste Timings_ or _Open Beatmap Timings_.
- By importing the .ini file of another map, which contains every timing-related stuff.
- From the song's source, but it's likely each timing point's offset will need to be manually set.
- Manually, by tapping the BPM, then setting up the offset on the first beat of the map and checking if the divisor lines align up with the song. (Not recommended)  
**Note:** Using BPM guessing websites is also not recommended due to how imprecise they are.

Once you have it set up, you may add a few notes to check if the values are right.
- If all the notes are consistently off, the **offset** is wrong.
- If the notes get progressively off sync, the **BPM** is wrong.  
Thus, if both happen at the same time, then both **BPM** and **offset** are wrong.
:::

## Making a map
Now that you have everything set up, you can start placing down notes. The **keybinds** are as follows:
- **Q** or **7** for top left corner (2|2)
- **W** or **8** for top mid (1|2)                         
- **E** or **9** for top right corner (0|2)
- **A** or **4** for middle left (2|1)
- **S** or **5** for middle (1|1)
- **D** or **6** for middle right (0|1)
- **Z** or **1** for bottom left corner (2|0)
- **X** or **2** for bottom mid (1|0)
- **C** or **3** for bottom right corner (0|0)

:::info
If you have an older version of the Editor, you might also be able to use the Y key as bottom left corner.
:::  
:::details
The numbers represent the (-X|Y) coordinates of the note:  
![GridCoords](../src/map/gridcoords.jpg)  
As you can see, the X axis is inverted.
:::

Lastly, a few tips in case you've never mapped before:
- **Play a lot of different maps before mapping**. The more, the merrier.
- **Make sure you can beat your map**. You don’t want to map anything harder than your best pass at first.
- **Use BPM and Offset properly**. This DOES make a big difference once you get the hang of it.
- **Avoid using weird beat divisors**, anything other than 1, 2, 4, 6, 8, 12 or 16, while you’re starting.
- **Do not overcomplicate things**. Focus on making fun maps first, then move on towards sync and creativity. I wouldn't even touch Quantum until you know your ways.
- **Do not rush, especially when you’re new to mapping**. 
And most importantly, **follow the community guidelines and have fun mapping!**

### Saving
Once you have finished mapping, you can save the map in three different ways:
- Manually (_Ctrl_ + S): Triggers a data overwrite, meaning your older save will be replaced.
- Automatically: Automatically overwrites the map’s data with a certain frequency (changed via _Settings_)
- Clicking _Back to Menu_: Triggers a popup which will ask the user to save before closing the map.  
:::tip
It is recommended that every map you make is stored in the Editor’s folder, so you won’t lose any.
:::
You might notice that a .ini file has saved along with your map.  
This file includes the map's timing assets, so make sure you don't delete it.

If everything went fine until now, you should have created your first map! Congratulations!  
You may now skip to the [next section](WIP) or read [Customizing](customizing.md).