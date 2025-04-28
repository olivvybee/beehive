---
title: 'New Mac checklist'
date: 2025-04-28T14:00:00Z
description: 'My own personal checklist for setting up a new Mac from scratch.'
---

This is my own personal checklist for things I need to remember to do whenever I
set up a new Mac from scratch.

## Apps to install from the app store

- Affinity Designer
- Mona
- Tailscale
- 1Password for Safari

## Things to install from elsewhere

- [1Password](https://1password.com/downloads/mac)
- [VS Code](https://code.visualstudio.com/)
- [Discord](https://discord.com/download)
- [iTerm](https://iterm2.com/)
- [Tower](https://www.git-tower.com/mac)
- [Alfred](https://www.alfredapp.com/)
- [Homebrew](https://brew.sh)
- [nvm](https://github.com/nvm-sh/nvm)
- [pnpm](https://pnpm.io/installation)
- [SF fonts](https://developer.apple.com/fonts/)

## Things to install in homebrew

`brew install gh pkg-config cairo pango libpng jpeg giflib librsvg pixman python-setuptools`

## Changes to make on the filesystem

- Create `~/Developer` directory

## System settings to change

- Appearance
  - Change "Accent colour" to purple
- Desktop & Dock
  - Turn off "Automatically rearrange Spaces based on most recent use"
  - Turn off "Show suggested and recent apps in Dock"
  - Change "Click wallpaper to reveal desktop" to "Only in Stage Manager"
  - Turn on "Drag windows to screen edges to tile"
- Wallpaper
  - Change to "Shuffle Aerials > Shuffle All"
  - Change to "Every Day"
- Keyboard
  - Shortcuts
    - Change Spotlight to ⌥Space
    - Tower
      - Set "Stage All Local Changes" to ⌘⇧A
      - Set "Unstage All Local Changes" to ⌘⌥⇧A
- Trackpad
  - Turn on "Quiet click"

## App-specific settings to change

### Finder

- General
  - Uncheck all items under "Show these items on the desktop"
  - Change "New Finder windows show" to the home directory
  - Turn on "Sync Desktop & Documents folders"
- Sidebar
  - Uncheck "Recents" and "Recent tags"
  - Check home directory and system volume
- View options
  - Turn on "Always open in icon view"
  - Change "Sort by" to "Name"
  - Turn on "Show item info"
  - Click "Use as Defaults"

### Dock

- Change Downloads stack to Grid

### Alfred

- Set shortcut to ⌘Space
- Turn on clipboard history

### Affinity Designer

- Tools
  - Change "Move Tool Aspect Constrain" to "Do not constrain by default"

### iTerm

Import settings and profiles from `iCloud Drive/Sync/iTerm`

### Tower

- Set default directory to `~/Developer`
- In commit list change to "Small Commit View Size"
