---
layout: doc
---

# Installing the game
Learn how to download the game on multiple platforms

## Windows

Downloading for Windows

- Head to the [releases page](https://github.com/David20122/sound-space-plus/releases/latest/) and select __windows.zip__ ([Download](https://github.com/David20122/sound-space-plus/releases/latest/download/windows.zip))

- Once you have downloaded the .zip file, extract it.

- Once the zip file is extracted, run <u>Rhythia.exe</u>

::: warning
You must have Visual C++ Redistributable downloaded to be able to run the game on Windows!

You can download it [here](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)
:::

## Linux

Downloading for Linux

### GUI version
::: info
The following packages are recommended for this version:
- thunar
- thunar-archive-plugin
:::
- Head to the [releases page](https://github.com/David20122/sound-space-plus/releases/latest/) and select __linux.zip__ ([Download](https://github.com/David20122/sound-space-plus/releases/latest/download/linux.zip))

- Once the linux.zip file has been downloaded, right click it and extract it.

- After extracting the zip file, run <u>Rhythia.x86_64</u>

### Non-GUI version
::: warning
The following packages are required for this version:
- unzip
:::

- Head to the [releases page](https://github.com/David20122/sound-space-plus/releases/latest/) and select __linux.zip__ ([Download](https://github.com/David20122/sound-space-plus/releases/latest/download/linux.zip))

- Once the file is downloaded, open your terminal and run the following commands:
```sh
# Assuming the file is in the Downloads folder
$ cd $HOME/Downloads
$ unzip -d Rhythia linux.zip
```
- Then move into the extracted folder and run the game by running:

```sh
# While inside ~/Downloads
$ cd Rhythia
$ ./Rhythia.x86_64
```

## Linux troubleshooting

If your game doesn't run, do the following commands in your terminal while inside of your Rhythia folder:

```sh
$ sudo chmod +x Rhythia.x86_64
```

::: warning
You need to be a superuser in order to run <u>sudo</u>
:::