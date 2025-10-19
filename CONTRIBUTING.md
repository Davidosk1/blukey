# Contributing to Phone Keyboard for VS Code

Thank you for considering contributing to Phone Keyboard! We welcome contributions from the community and appreciate your interest in improving this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. Be kind, professional, and considerate in all interactions.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/blukey.git
   cd blukey
   ```
3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/ORIGINAL-OWNER/blukey.git
   ```

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- Python and build tools for robotjs compilation
- macOS, Windows, or Linux operating system

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

### Installing Dependencies

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

## How to Contribute

### Types of Contributions

We welcome various types of contributions:

- Bug fixes
- Feature implementations
- Documentation improvements
- Performance optimizations
- Test coverage improvements
- UI/UX enhancements
- Platform-specific improvements

### Finding Issues to Work On

- Check the [Issues](https://github.com/YOUR-USERNAME/blukey/issues) page
- Look for issues labeled `good first issue` or `help wanted`
- Comment on an issue to let others know you're working on it

## Pull Request Process

1. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   or
   ```bash
   git checkout -b fix/your-bug-fix
   ```

2. **Make your changes** following the coding standards below

3. **Test your changes thoroughly**:
   - Test on your target platform
   - Verify existing functionality still works
   - Test edge cases

4. **Commit your changes** with clear, descriptive commit messages:
   ```bash
   git commit -m "Add feature: description of what you added"
   ```
   or
   ```bash
   git commit -m "Fix: description of what you fixed"
   ```

5. **Keep your fork up to date**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request** with:
   - A clear title describing the change
   - A detailed description of what changed and why
   - References to any related issues (e.g., "Fixes #123")
   - Screenshots or GIFs for UI changes

8. **Respond to feedback** during the review process

## Coding Standards

### JavaScript/Node.js

- Use meaningful variable and function names
- Add comments for complex logic
- Follow consistent indentation (2 or 4 spaces)
- Use ES6+ features where appropriate
- Handle errors gracefully

### HTML/CSS

- Use semantic HTML elements
- Keep CSS organized and maintainable
- Ensure responsive design works on various screen sizes
- Test on different mobile browsers

### General Guidelines

- Keep functions small and focused
- Avoid unnecessary dependencies
- Ensure cross-platform compatibility when possible
- Write self-documenting code

## Reporting Bugs

When reporting bugs, please include:

1. **Clear title** describing the issue
2. **Steps to reproduce** the bug
3. **Expected behavior** vs **actual behavior**
4. **Environment details**:
   - Operating system and version
   - Node.js version
   - Phone OS and browser
5. **Error messages** or console output
6. **Screenshots** if applicable

**Example:**

```
Title: Connection drops after 5 minutes on iOS Safari

Description:
When using the phone keyboard on iOS Safari, the connection
consistently drops after approximately 5 minutes of inactivity.

Steps to reproduce:
1. Connect phone to server
2. Wait 5 minutes without typing
3. Try to type - connection is lost

Expected: Connection should remain active
Actual: Connection drops and requires page refresh

Environment:
- macOS 13.0
- Node.js v18.0.0
- iOS 16.1, Safari
```

## Suggesting Features

We love new ideas! When suggesting features:

1. **Check existing issues** to avoid duplicates
2. **Describe the feature** clearly and concisely
3. **Explain the use case** - why is this useful?
4. **Provide examples** if applicable
5. **Consider alternatives** you've thought about

**Example:**

```
Title: Add customizable keyboard layouts

Description:
Allow users to customize the layout of special keys
and create shortcuts for frequently used commands.

Use case:
Developers working in different languages might want
different special characters readily available.

Possible implementation:
- JSON config file for layout customization
- UI for arranging buttons
- Preset layouts for common use cases
```

## Testing

Before submitting a PR, please test:

- Basic typing functionality
- Special keys (Enter, Tab, Escape, Backspace)
- Modifier keys (Ctrl, Alt, Shift, Cmd)
- Connection stability
- Reconnection behavior
- Different screen sizes on mobile

## Questions?

If you have questions about contributing, feel free to:
- Open an issue with the `question` label
- Reach out to the maintainers

Thank you for contributing to Phone Keyboard for VS Code!
