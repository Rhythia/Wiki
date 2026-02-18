---
layout: doc
---

# Installing custom content

This guide teaches you how to download custom content for the game.

## User folder focations

- Linux: `~/.local/share/SoundSpacePlus`
- Windows: `%appdata%/SoundSpacePlus`

::: tip
You can easily access the User folder by pressing `Open User Folder` in the settings page in-game!
:::

## Installing and creating custom colorsets

- Head to your User folder
- Find and Open the folder named `colorsets`
- You can create your own colorset by making a text file and giving it any name
- Specify the colors you want by pasting a HEX Value of the color (each line is a color)
- Save the file, go back to the game and press `Reload Content`
- The colorset you made (or installed) should be available under the `Notes` tab in the settings

## Installing Maps

### Rewrite (Current Maintained Client)

#### Method 1: Drag and Drop

After downloading any map, and while you have the game open, simply drag the map file into the game window — it will be imported and focused on automatically.

#### Method 2: Import Maps Button

1. Look for the **Import Map** button in the game.
2. Navigate to the location of your map(s) and select them.

::: tip Migrating from Nightly (Legacy)?
If you are migrating from the Nightly client, your maps can be found at:
- **Windows:** `%appdata%/soundspaceplus/maps`
- **Linux:** `~/.local/share/soundspaceplus/maps`

Your maps will be imported — it may take a while depending on how many maps you are moving.
:::

#### Alternative Method

You may also drop map files directly into the `/maps/default` folder inside your game directory. They will be processed similarly to Method 2.

### Nightly (Legacy)

#### In-game
- Inside your game, on the left bar, select `Content Manager`
- Follow the instructions presented to you on-screen

#### Manual install
*Recommended when installing multiple maps at once*

- When in-game, press `Open User Folder`, or manually head to it in your file manager
- Head to the specified folder for the type of map you're trying to install
    - If you're installing a <u>**Vulnus**</u> map, drag the map(s) you're installing to the `vmap` folder
    - If you're importing a <u>**.sspm**</u> (Sound Space Plus Map) map, drag the map(s) to the `maps` folder.
- Once the maps were dragged to the respective folders, press `Reload Content` in-game.

## Installing cursors

- In-game, on the Settings page, head to `Customization`
- Find the `Cursor Image` setting, and press `Click to replace`
- Find the image you want as a cursor
- You will be ask if you want to save the previous cursor image
- Once you select the option you want, you're all set!

## Installing custom audio

::: tip
Supported formats

- .mp3
- .ogg
:::

Rhythia offers the players the option to change their sounds, here's how.

- Head to your User Folder
- Grab the audio file you wanna use to replace a sound
- Drag the file there
- Reload the game in-game by pressing `Reload Content`

The following list of sounds are modifiable, and their file names:

- Hit Sound: hit
- Miss: miss
- Death: fail
- Menu: menu
- Personal best: pb

## Installing custom backgrounds

- In-game, head to your Settings
- In the settings head to **Customization**
- Find the setting <u>Custom World BG</u> and press **Replace**
- Select the image you want as a background
- Back to your settings page, upon an image selection, find the <u>Background World</u> setting and change the background to `Custom background`

::: warning
The following formats are not supported:
- .gif
- .mp4
:::