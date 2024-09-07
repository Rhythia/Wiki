---
layout: doc
---

# Troubleshooting the game

The following guide helps you troubleshoot most problems you may get when you install the game

::: info
If you encounter any issues or bugs not shown here, or if any fixes don't work for the issue you're having, please open a support thread in the [Discord](https://discord.gg/rhythia)
:::

## Index

- [Game crashing on startup (Windows)](#game-crashing-on-startup-windows)
- [Game crashing on startup (Linux)](#game-crashing-on-startup-linux)
- [Settings file corrupt or unreadable](#settings-file-corrupt-or-unreadable)
- [Game not launching or weird behavior during launch](#game-not-launching-or-weird-behavior-during-launch)
- [Lag, flickering, blank screen](#lag-flickering-blank-screen)
- [Random stutters in-game](#random-stutters-in-game)
- [Fullscreen not working](#fullscreen-not-working)
- [Map database error](#map-database-error)
- [100% GPU use](#100-gpu-use)
- [Pixelated resolution](#pixelated-resolution)
- [Song player failed to load](#song-player-failed-to-load)
- [Credits](#credits)

## Game crashing on startup (Windows)
There are several factors for this issue to happen, some being:

- Missing VCRedist on your system,
- Medal running
- Lack of permissions

### Possible Fixes:

- Install VCRedist on your system:
    - [32-bit](https://aka.ms/vs/17/release/vc_redist.x86.exe)
    - [64-bit](https://aka.ms/vs/17/release/vc_redist.x64.exe)
- Closing Medal\*
- Running the game as Administrator
- Update your system
- Update your GPU drivers

::: info
\* Medal is a known Clipping software and it is known that it crashes Rhythia. If you want other clipping alternatives, you can use [Shadowplay (Nvidia)](https://www.nvidia.com/en-us/geforce/geforce-experience/) or [Radeon ReLive](https://www.amd.com/en/support/kb/faq/relive-install)
:::

## Game crashing on startup (Linux)
The game can fail to start on Linux due to several factors.

## Possible fixes
- Check your game files, such as `libdiscord_game_sdk.so` being named as mentioned
- Make the game executable with the command below
```sh
$ sudo chmod +x SoundSpacePlus.x86_64
```

## Settings file corrupt or unreadable
This is an in-game error as shown by the image below
![](/src/trouble/setts.png)

### Fixes
- Running game as administrator
- Deleting settings file in:
    - `%appdata%\SoundSpacePlus` on Windows
    - `~/.local/share/SoundSpacePlus` on Linux

::: warning
This can also fix the following errors:
- File Permissions error
- Map Database error
:::

## Game not launching or weird behavior during launch
This is an unusual one but everyone's at risk of experiencing this.

### Fix
- Turn off your anti-virus
    - Alternatively, you can add an exception to the game folder in your Anti-virus if you want to keep it on.

## Lag, flickering, blank screen
This is caused by screensharing software such as Discord, OBS, Shadowplay, etc.

### Fix
- Turn off the following screensharing tools:
    - Discord
    - OBS
    - Shadowplay
    - Windows Game Bar
    - Radeon ReLive

## Random stutters in-game
Mostly on Windows due to their "optimizations"

### Potential fixes
For both Windows 10 and Windows 11 users:
- Head to the location of your Rhythia installation
- Right click on SoundSpacePlus.exe > Properties
- Navigate to Compatibility > Enable "Disable fullscreen optimizations" > Apply > OK

Alternatively in Windows 11 you can also do the following:
- Go to Settings > System > Display > Graphics > Change default graphics settings > Set "Optimizations for windowed games" to ON

You can also try:
- Enabling fullscreen in your game due to Windows's fullscreen optimization as mentioned in [this Godot article](https://docs.godotengine.org/en/3.5/tutorials/rendering/jitter_stutter.html).

::: warning
The "Optimizations for windowed games" is a Windows 11 option.
Every time you reboot your system, make sure to turn it ON since Microsoft automatically disables it.

<sub>*(editor's note: at least in my experience)*</sub>
:::

## Fullscreen not working
Happens mostly with Windows 11 users

### Fixes
- Update graphics drivers
- Update Windows 11 to the latest version

## Map database error
In-game maps not loading.

### Fixes:
- Add a firewall exception to Rhythia
- Change DNS servers
- Resync date and time with server

::: tip
Refer to [Settings file corrupt or unreadable](#settings-file-corrupt-or-unreadable)'s warning box for further fixes on this issue
:::

## 100% GPU use
GPU being used to it's max when viewed in Task Manager

### Fix
- Setting a reasonable Framerate limit, for example, on a 144hz monitor set max framerate to 144 FPS.

## Pixelated resolution
Happens when turning fullscreen on for the first time.

### Fix:
- Enable Fullscreen and Auto Maximize
- Restart game

## Song player failed to load
Happens when a dev makes a mistake when building the game most the time as shown below
![](/src/trouble/song.png)

### Fixes

- If you're running a modified build of the game, change the `cursorDance` folder to `cursordance`
- If you're running a production build (official build) wait for further updates and inform the devs of this error!

## Credits

- @vintagemotors_always on Discord for making a more in-depth troubleshooting guide in the support channel
