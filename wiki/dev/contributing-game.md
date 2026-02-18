---
layout: doc
---

# Contributing to the game
### We ❤️ developers!

This guide will help you setup your workspace to help those interested in contributing to the game!

::: warning
**Notice:** Nightly is no longer actively maintained. This guide is for contributing to the **Rewrite** client, which is our current maintained version. The contribution process is the same, but you'll be working with the Rewrite repository instead.
:::

## Index
- [Index (You're here)](#index)
- [Required software](#required-software)
    - [Optional software](#optional-software)
- [Preparing the workspace](#preparing-the-workspace)
    - [Before getting the files](#before-getting-the-files)
    - [Getting the files](#getting-the-files)
    - [Adding the files to Godot](#adding-the-files-to-godot)
    - [Importing the Discord SDK to the repository folder](#importing-the-discord-sdk-to-the-repository-folder)
- [Requesting your changes to be added](#requesting-your-changes-to-be-added)

## Required software
To be able to contribute to the game you'll need

- [Godot 4.6 stable .NET](https://godotengine.org/download/archive/4.6-stable/)
- [git for windows](https://gitforwindows.org/)
    - Linux users: `git` package
- [github](https://github.com/) account

### Optional software
- [Visual Studio Code](https://code.visualstudio.com/) with the [godot-tools](https://marketplace.visualstudio.com/items?itemName=geequlim.godot-tools) extension

## Preparing the workspace
To be able to contribute, you must first get the files and setup your workspace, this part of the guide helps you with that. To do so you must:

### Before getting the files
Inside github:
- Head to the [Rewrite repository](https://github.com/Rhythia/Client)
- Press the Fork button, and make a fork


### Getting the files
- Open your terminal
- Grab the Clone URL (refer to the gif below for a visual example)

![](/src/dev/copy.gif)

- Inside a folder of your choice, type the following (in this case it will be inside Documents/Rhythia)
::: info
Text in `#` should not be put in your terminal.
The `$` part is cosmetic, and won't work if you place it
:::

```sh
# The cd command is used for moving to a certain directory.
$ cd Documents/Rhythia
$ git clone https://github.com/YOUR_USERNAME/Client.git
# If you changed the fork's repository name
# replace Client with the repository's name. 
```

### Adding the files to Godot
Once you got the files, you have to add them to godot engine

- Open Godot
- Press Import
- Inside of Project Path, press Browse
- Navigate to your repository folder, select the `project.godot` file and press Open.

### Importing the Discord SDK to the repository folder
::: info
The Rewrite client includes the necessary SDK dependencies. You may be able to skip this depending on the setup instructions in the repository's README.
:::

## Requesting your changes to be added
- Firstly you have to add your changes to your repository, you can do so by doing

*On newly created files*

```sh
$ git add ./FOLDER_WHERE_YOUR_FILE_WAS_MADE
```
*Adding the changes to your repository*
```sh
$ git commit -m "Your message" ./Folder_to_add
$ git push origin indev
```

- Once the changes are in your repository, head to your forked repository
- Inside you should have a message such as `This branch is 1 commit ahead of Rhythia/Client:indev.`
- Press the `Contribute` button and click on `Open pull request`
- Ensure your pull request is targeting the **indev** branch of the main repository
- You'll be prompted to see the changes made compared to the current ones in the main game repository
- Once done viewing the changes, press `Create pull request`
- Add a title, a description and press `Create pull request`. Wait for maintainers to review your code and for their feedback.

And you're done!