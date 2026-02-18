---
layout: doc
---

# Installing the game
There are currently two builds of the game available.

::: danger ⚠️ Important Disclaimer
**Rhythia is NOT affiliated with CAPO Games, Steam Rhythia, or rhythia.com in any way.** We cannot provide support or assistance for any issues related to those platforms. Please ensure you are downloading the correct client from the links below.
:::

## Rewrite (Current Maintained Client)

The current client being actively maintained by us, now in early testing!

::: tip Recommended
This is the latest version of the client. Please report any bugs found in **#bug-reports** on our [Discord server](https://discord.gg/rhythia).
:::

You can view all releases at the [Rewrite releases page](https://github.com/Rhythia/Client/releases).

| Platform | Direct Download |
| --- | --- |
| Windows | [Download](https://github.com/Rhythia/Client/releases/latest/download/windows.zip) |
| Linux | [Download](https://github.com/Rhythia/Client/releases/latest/download/linux.zip) |

You can view the Rewrite source code [here](https://github.com/Rhythia/Client).



## Nightly (Legacy)

The legacy client we all know and (somewhat) love. We recommend this client if you're just starting out for now.

::: warning
Nightly is **no longer being maintained**. All current development efforts are focused on the Rewrite client above.
:::

You can view all releases at the [Nightly releases page](https://github.com/David20122/sound-space-plus/releases).

| Platform | Direct Download |
| --- | --- |
| Windows | [Download](https://github.com/David20122/sound-space-plus/releases/latest/download/windows.zip) |
| Linux | [Download](https://github.com/David20122/sound-space-plus/releases/latest/download/linux.zip) |

You can view Nightly's source code [here](https://github.com/David20122/sound-space-plus).



## Installation

### Windows

- Download the **windows.zip** for your chosen client above.
- Extract the `.zip` file.
- Run <u>Rhythia.exe</u>.

::: warning
You must have Visual C++ Redistributable installed to run the game on Windows!

You can download it [here](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170).
:::

### Linux

#### GUI version
::: info
The following packages are recommended for this version:
- thunar
- thunar-archive-plugin
:::
- Download the **linux.zip** for your chosen client above.
- Right click the downloaded file and extract it.
- Run <u>Rhythia.x86_64</u>.

#### Non-GUI version
::: warning
The following packages are required for this version:
- unzip
:::

- Download the **linux.zip** for your chosen client above.
- Open your terminal and run the following commands:
```sh
# Assuming the file is in the Downloads folder
$ cd $HOME/Downloads
$ unzip -d Rhythia linux.zip
```
- Then move into the extracted folder and run the game:
```sh
$ cd Rhythia
$ ./Rhythia.x86_64
```

### Linux Troubleshooting

If your game doesn't run, run the following command in your terminal while inside of your Rhythia folder:

```sh
$ sudo chmod +x Rhythia.x86_64
```

::: warning
You need to be a superuser in order to run <u>sudo</u>.
:::


