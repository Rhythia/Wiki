---
layout: doc
---

# Rhythia Online
FAQ about the online client

## Index

- [Installing the client](#installing-the-client)
- [How do I submit scores](#how-do-i-submit-scores)
- [Hosting a lobby](#hosting-a-lobby)
- [Common Issues](#common-issues)

## Installing the client

Currently there is no support for Linux with the online client

- Head to [rhythia.com](https://www.rhythia.com/) and select __Download Online__ ([Download](https://github.com/cunev/rhythia-online-release/releases/download/development/rhythia-online.zip))

- Once you have downloaded the .zip file, extract it.

- Once the zip file is extracted, run <u>Rhythia.exe</u>

- To be able to use the online client you must have a Rhythia account

::: warning
You must have Visual C++ Redistributable downloaded to be able to run the game on Windows!

You can download it [here](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)
:::

## How do I submit scores
Only with the online client may you be able to submit scores

### Which maps will award Rhythm Points
In order to earn RP and compete against other players you need to play a specific set of maps:
- __Ranked Maps__
    - Maps that are user-uploaded and have been verified by Map Management Team
- __Legacy Maps__
    - Maps that are part of default Rhythia/SS map pool

### Necessary configuration
You must use default configuration in order to submit scores

- Hitwindow milliseconds must be 55
- Note hitbox size must be 1.14
- Counter speed must be enabled
- Visual mode must be disabled
- Start offset must be 0
- Pause count must be 0

If you have Camera Unlock (Spin) you must also use the following

- Grid Parallax must be 0

## How do I play multiplayer
How to create and join a multiplayer lobby

### Create a lobby
1. Open the online menu
2. Press __Join Multiplayer__ and select __Casual Mode__
3. Write any lobby name
4. Once in the lobby, you can share the lobby name with your friends

### Selecting maps
Before selecting:

- You can select any map that is __submitted__ on the Rhythia website, or else syncing won't work
- All maps that you select will have to be redownloaded to prevent modifications/changed offsets

How to select:

1. If you are host, you can press select map, click on a map and choose it
2. After each user has downloaded and is Ready, you can start the game
3. All the mods that you have selected during map selection, will be synced across all players

Transferring the host:

- Inside the lobby chat, type /host \[username] to transfer host

## Common Issues

### Rhythia Online will not load
Try to restart Rhythia Online, if this does not work try restarting your PC

If you're on a slower connection you might want to wait a while before restarting just incase, Rhythia Online downloads roughly 200mb of data

#### Windows can't find node.exe / Failed to extract files / Percentage stuck at 100%
If this error is being thrown a solution might be to go into ```C:/Users/[USERNAME]/AppData/SoundSpacePlus/Helper```

1. Check if inside ```helper``` there are two folders, one being ```extracted``` another being ```tempt```

2. Look inside ```extracted```. If it is empty, simply take the contents of ```temp``` and copy it over to ```extracted```

3. Create a text file inside ```C:/Users/[USERNAME]/AppData/SoundSpacePlus``` and rename it to ```helper_version```

4. As of __January 3, 2025__ the string inside ```helper_version``` should be ```1735400730872```

4. Relaunch the game

#### Failed to extract files
Whitelist the folder on your antivirus software, [click here for a guide!](https://support.microsoft.com/en-us/windows/add-an-exclusion-to-windows-security-811816c0-4dfd-af4a-47e4-c301afe13b26)

#### My issue is not listed here, or these did not work
Report your issues to @Cunev via [Discord](https://discord.gg/rhythia)

If you found any manual solutions to your problem please reach out as well!