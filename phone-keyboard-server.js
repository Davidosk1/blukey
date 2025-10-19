const express = require('express');
const { WebSocketServer } = require('ws');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Store connected clients
const clients = new Set();

// WebSocket connection handler
wss.on('connection', (ws) => {
  console.log('Client connected');
  clients.add(ws);

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);

      if (data.type === 'keypress') {
        console.log('Received keypress:', data);
        handleKeypress(data);
      }
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    clients.delete(ws);
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

// Handle keyboard input and simulate keypresses
function handleKeypress(data) {
  const { key, modifiers, isSpecialKey } = data;

  try {
    // Check if robotjs is available
    const robot = require('robotjs');

    // Handle special keys that need keyTap
    const keyMap = {
      'Backspace': 'backspace',
      
      'Enter': 'enter',
      'Tab': 'tab',
      'Escape': 'escape',
      'ArrowUp': 'up',
      'ArrowDown': 'down',
      'ArrowLeft': 'left',
      'ArrowRight': 'right',
      'Delete': 'delete',
      'Home': 'home',
      'End': 'end',
      'PageUp': 'pageup',
      'PageDown': 'pagedown'
    };

    // Apply modifiers if present
    const modArray = [];
    if (modifiers?.ctrl) modArray.push('control');
    if (modifiers?.alt) modArray.push('alt');
    if (modifiers?.shift) modArray.push('shift');
    if (modifiers?.meta) modArray.push('command');

    // If it's a special key or has modifiers, use keyTap
    if (isSpecialKey || modArray.length > 0  ) {
      const robotKey = keyMap[key] || key.toLowerCase();
      robot.keyTap(robotKey, modArray);
      console.log(`Simulated keypress: ${robotKey}`, modArray.length > 0 ? `with modifiers: ${modArray}` : '');
    } else {
      // For regular characters (including symbols), use typeString
      robot.typeString(key);
      console.log(`Typed character: ${key}`);
    }
  } catch (error) {
    console.error('Error simulating keypress:', error.message);
    console.log('Install robotjs with: npm install robotjs');
  }
}

// Get local IP address
function getLocalIP() {
  const { networkInterfaces } = require('os');
  const nets = networkInterfaces();

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Skip internal and non-IPv4 addresses
      if (net.family === 'IPv4' && !net.internal) {
        return net.address;
      }
    }
  }
  return 'localhost';
}

server.listen(PORT, '0.0.0.0', () => {
  const localIP = getLocalIP();
  console.log('\n=================================');
  console.log('Phone Keyboard Server Started');
  console.log('=================================');
  console.log(`Local:   http://localhost:${PORT}`);
  console.log(`Network: http://${localIP}:${PORT}`);
  console.log('=================================');
  console.log('\nOpen the Network URL on your phone to use it as a keyboard\n');
});
