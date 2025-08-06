# Sci-Hub Linker

**Sci-Hub Linker** is a Chrome extension that converts Digital Object Identifier (DOI) numbers on web pages into clickable hyperlinks to access scientific papers. It supports multiple DOI formats, including plain text (e.g., `DOI 10.xxx`, `doi:10.xxx`) and URLs (e.g., `https://doi.org/10.xxx`, `http://dx.doi.org/10.xxx`). The extension can be toggled on/off with a left-click on the toolbar icon and offers a customizable target URL via the options page.

**Author**: Traveler  
**Email**: haxbox2000@gmail.com  
**License**: Public Domain (CC0 1.0 Universal)  
**Repository**: https://github.com/EdgeOfAssembly/Sci-Hub-Linker

Learn more about the paywall issues researchers face in [The Paywall Paradox](paywall_paradox.md).

## Features
- Automatically converts DOI numbers into hyperlinks to a user-defined URL (default: `https://sci-hub.se`).
- Supports multiple DOI formats: `doi:10.xxx`, `DOI 10.xxx`, `https://doi.org/10.xxx`, `http://dx.doi.org/10.xxx`.
- Toggle the extension on/off by left-clicking the toolbar icon.
- Right-click the icon to access "Options" (customize the target URL) and "About" pages.
- Displays a notification (auto-dismisses after 5 seconds) when toggling, prompting a manual page reload to apply changes.
- Lightweight and open-source, released into the public domain.

## Installation
Sci-Hub Linker is distributed as an unpacked Chrome extension. Follow these steps to install it:

### Prerequisites
- A Chromium-based browser (e.g., Google Chrome, Microsoft Edge, Brave).
- The extension files downloaded or cloned from this repository.

### Steps
1. **Download or Clone the Repository**:
   - Download the ZIP file from [this repository](https://github.com/EdgeOfAssembly/Sci-Hub-Linker) by clicking "Code" → "Download ZIP" and extract it to a folder (e.g., `Sci-Hub-Linker`).
   - Alternatively, clone the repository:
     ```bash
     git clone https://github.com/EdgeOfAssembly/Sci-Hub-Linker.git
     ```
2. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" (toggle in the top-right corner).
   - Click "Load unpacked" and select the `Sci-Hub-Linker` folder containing the extension files.
   - The extension should appear in the extensions list with the name "Sci-Hub Linker".

3. **Pin the Icon**:
   - Click the extensions menu (puzzle piece icon) in the Chrome toolbar.
   - Find "Sci-Hub Linker" and click the pin icon to add it to the toolbar.

## Usage
- **Toggle On/Off**:
  - Left-click the toolbar icon to toggle the extension on or off.
  - When toggled, a notification appears for 5 seconds: "Extension turned On/Off. Please reload the page to apply changes."
  - Manually reload the page (F5 or refresh button) to apply the new state.
- **Access Options**:
  - Right-click the toolbar icon and select "Sci-Hub Linker" → "Options".
  - Enter a custom URL (e.g., a Sci-Hub mirror) in the input field and click "Save".
- **View About Page**:
  - Right-click the toolbar icon and select "Sci-Hub Linker" → "About" to open the about page with author and license details.
- **DOI Linking**:
  - When enabled, DOIs on web pages (e.g., `DOI 10.3386/w30133`) become clickable links to the configured URL.
  - Test on pages like [this example](https://www.sciencedirect.com/science/article/pii/S0360131518300812)

## Reporting Issues
- Open an issue on this repository: https://github.com/EdgeOfAssembly/Sci-Hub-Linker/issues.
- Include details like the browser version, page URL, and DOI format causing problems.

## License
This project is released into the public domain under the [CC0 1.0 Universal (CC0 1.0) Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/). You are free to use, modify, and distribute it without restriction. No warranty is provided.

## Contact
Created by Traveler. For questions or feedback, email [haxbox2000@gmail.com](mailto:haxbox2000@gmail.com) or open an issue on GitHub.

## Disclaimer
Sci-Hub Linker converts DOIs to user-defined URLs. Users are responsible for ensuring compliance with applicable laws and policies when accessing content.


