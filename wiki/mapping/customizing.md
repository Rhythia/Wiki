# Customization
Decorate the Editor to your liking

## 1.- External Assets
You don't need to touch the Editor's cached assets to edit these.
### 1.1.- Editor BG
You may have noticed an image in the SSQE folder called _background_editor_.  
That image is the mapping menu's **background image**, you can replace it with another **.png** file.
### 1.2.- _Settings_ Menu
In _Settings_, you have plenty of options to choose from:
[Settings](../public/branding/settings.png)  
- **<u>Colors</u>**:
These are the colors that the Editor uses, and what they're used for:
    - **Color 1**: Text and BPM Lines. 
    - **Color 2**: Checkboxes, sliders, numbers and BPM Lines. 
    - **Color 3**: Bookmarks and BPM Lines. 
    - **Note Colors 1, 2** are alternated (1-2-1-2...) for the notes on the track.  

To change them, simply click over them and a **color display** will open.  
You'll be able to either input [HSL](https://en.wikipedia.org/wiki/HSL_and_HSV) or [RGB](https://en.wikipedia.org/wiki/RGB_color_model) values, or drag around the color selector and the brightness bar to get a color of your liking.

- **<u>Autosaving</u>**:
_Enable Autosave_ allows the Editor to save your progress, and _Autosave Interval_ measures how frequent these saves are (in minutes).

- **<u>Correct Errors on Copy</u>**:
Corrects notes which are out of bounds (>±0.85) so the map can be played. **Not related to customizing**.

- **<u>Waveform</u>**:
Enables/disables the sound waves on the track.

- **<u>Opacity</u>**:
These settings allow to change the Opacity value (from **0**: invisible to **255**: fully visible) of certain components:
  - **Background Opacity**: Changes the mapping menu's background image opacity.
  - **Track Opacity**: Changes the track opacity.
  - **Grid Opacity**: Changes the grid opacity.

- **<u>Change Keybinds</u>**:
All the Editor's **keybinds** are listed in this menu. You may change them to your liking by editing the boxes' content.  
Enabling the checkboxes below acts as if they were being held with the input (like in "_Shift_ + H", for example).  
Once you're done, click _Return to Settings_ to go back.

- **<u>Open Editor Folder</u>**:
It does exactly what you think.

- **<u>Reset to Default</u>**:
Resets everything mentioned earlier to the default values.
:::warning
This setting has NO confirmation, for now.
:::

## 2.- Internal Assets
In case you want further customization, you'll need to access the content inside the _assets_ folder, in the Editor folder.
