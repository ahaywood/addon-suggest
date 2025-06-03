#!/usr/bin/env node

/**
 * Wrapper script to generate addon configuration
 * 
 * This script handles the working directory issues and properly executes the config generator script.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Get the absolute path to the config generator script
const scriptPath = path.join(__dirname, 'src', 'scripts', 'generateAddonConfig.mjs');

// Make sure the script exists
if (!fs.existsSync(scriptPath)) {
  console.error(`Config generator script not found: ${scriptPath}`);
  process.exit(1);
}

// Pass all command line arguments to the script
const args = process.argv.slice(2);

// Spawn the script as a child process
const child = spawn('node', [scriptPath, ...args], {
  stdio: 'inherit',
  cwd: __dirname // Set the current working directory to this script's directory
});

// Handle the child process exit
child.on('close', (code) => {
  process.exit(code);
});
