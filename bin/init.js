#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SKILL_NAME = 'abidemi-illustrations';
const SOURCE = path.join(__dirname, '..', SKILL_NAME);

// Detect agent environment
function detectTarget() {
  const cwd = process.cwd();
  if (fs.existsSync(path.join(cwd, '.codex')))
    return path.join(cwd, '.codex', 'skills', SKILL_NAME);
  if (fs.existsSync(path.join(cwd, '.claude')))
    return path.join(cwd, '.claude', 'skills', SKILL_NAME);
  if (fs.existsSync(path.join(cwd, '.cursor')))
    return path.join(cwd, '.cursor', 'skills', SKILL_NAME);
  if (fs.existsSync(path.join(cwd, '.windsurf')))
    return path.join(cwd, '.windsurf', 'skills', SKILL_NAME);
  // Default fallback
  return path.join(cwd, '.codex', 'skills', SKILL_NAME);
}

// Copy folder recursively
function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

const target = detectTarget();
console.log(`\nInstalling ${SKILL_NAME} to: ${target}\n`);
copyDir(SOURCE, target);
console.log(`Done. Use the skill with:\n`);
console.log(`  Use $${SKILL_NAME} to illustrate "[your concept]"\n`);
