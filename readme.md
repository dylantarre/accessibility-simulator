# Accessibility Vision Simulator Chrome Extension

A Chrome extension that helps developers and designers test their websites for accessibility by simulating various visual impairments.

## Features

- Color blindness simulation (Protanopia, Deuteranopia, Tritanopia)
- Blur vision simulation
- Contrast sensitivity adjustment
- Adjustable intensity for all impairments
- Works across entire webpages

## Installation

1. Clone this repository
```bash
git clone https://github.com/yourusername/vision-simulator-extension.git
```

2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked" and select the extension directory

## Usage

1. Click the extension icon in Chrome toolbar
2. Select impairment type from dropdown
3. Adjust intensity using slider
4. Toggle simulation on/off with button
5. Changes apply instantly to entire webpage

## Development

Extension structure:
- `manifest.json`: Extension configuration
- `popup.html`: Extension popup interface
- `popup.js`: Popup interaction logic
- `content.js`: Page modification script
