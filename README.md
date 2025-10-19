# Phone Keyboard for VS Code

Turn your phone into a wireless keyboard for VS Code and any other application on your computer.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14-green.svg)

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Special Keys](#special-keys)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Troubleshooting](#troubleshooting)
- [Tips](#tips)
- [Security Note](#security-note)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-time keyboard input from your phone to your computer
- Support for special keys (Enter, Tab, Escape, Backspace, Arrow keys)
- Support for modifier keys (Ctrl, Alt, Shift, Cmd/Meta)
- Beautiful, responsive web interface optimized for mobile
- Auto-reconnection if connection is lost
- Works on the same WiFi network

## Prerequisites

- Node.js (v14 or higher)
- Your phone and computer must be on the same WiFi network
- Python and build tools (required for robotjs)

### Installing Build Tools

**macOS:**
```bash
xcode-select --install
```

**Windows:**
```bash
npm install --global windows-build-tools
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install libxtst-dev libpng++-dev
```

## Installation

1. Install dependencies:
```bash
npm install
```

Note: robotjs may take a few minutes to build from source.

## Usage

1. Start the server:
```bash
npm start
```

2. The terminal will display URLs like:
```
=================================
Phone Keyboard Server Started
=================================
Local:   http://localhost:3000
Network: http://192.168.1.100:3000
=================================
```

3. Open the Network URL on your phone's browser

4. Start typing on your phone - the input will appear in your VS Code or any focused application

## How It Works

1. **Server**: Runs an Express server with WebSocket support
2. **Phone Interface**: A responsive web page that captures your keystrokes
3. **Keyboard Simulation**: Uses robotjs to simulate actual keyboard input on your computer

## Special Keys

The interface includes buttons for:
- Enter
- Tab
- Escape
- Backspace

Arrow keys can be triggered using your phone's keyboard if available.

## Keyboard Shortcuts

All standard keyboard shortcuts work:
- Cmd/Ctrl + S (Save)
- Cmd/Ctrl + C (Copy)
- Cmd/Ctrl + V (Paste)
- And any other shortcuts

## Troubleshooting

### robotjs installation fails

Make sure you have the required build tools installed (see Prerequisites section).

### Connection issues

- Ensure both devices are on the same WiFi network
- Check your firewall settings - port 3000 needs to be open
- Try disabling VPN if active

### Keyboard input not working

- Make sure VS Code or your target application is focused
- Check the server console for error messages
- On macOS, grant accessibility permissions if prompted

### macOS Accessibility Permissions

On macOS, you may need to grant accessibility permissions:
1. Go to System Preferences > Security & Privacy > Privacy > Accessibility
2. Add Terminal (or your terminal app) to the list
3. Restart the server

## Tips

- Keep your phone screen on to maintain the connection
- Use landscape mode for a larger keyboard
- The preview shows the last key you pressed
- Connection status is shown at the top

## Security Note

This tool broadcasts on your local network. Only use it on trusted networks.

## License

ISC

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- Code of Conduct
- Development setup
- Pull request process
- Coding standards
- Reporting bugs and suggesting features

Feel free to submit issues and pull requests!
