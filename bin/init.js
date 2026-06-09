#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'abidemi-illustrations';
const SOURCE = path.join(__dirname, '..', SKILL_NAME);
const GLOBAL = process.argv.includes('--global');

function detectTarget() {
  const cwd = process.cwd();

  if (GLOBAL) {
    return path.join(os.homedir(), '.codex', 'skills', SKILL_NAME);
  }

  const checks = [
    // Codex (OpenAI)
    ['.codex', 'skills'],
    // Claude Code (Anthropic)
    ['.claude', 'skills'],
    // Cursor
    ['.cursor', 'rules'],
    // Windsurf (Codeium)
    ['.windsurf', 'rules'],
    // Kilo Code / Roo Code
    ['.roo', 'skills'],
    // Kiro (AWS)
    ['.kiro', 'steering'],
    // OpenCode
    ['.opencode', 'skills'],
    // Continue.dev
    ['.continue', 'skills'],
    // Aider
    ['.aider', 'skills'],
    // Cline
    ['.cline', 'skills'],
    // Plandex
    ['.plandex', 'skills'],
    // Antigravity (Gemini CLI)
    ['.gemini', 'skills'],
    // GitHub Copilot
    ['.github', 'copilot-instructions'],
    // JetBrains AI (IntelliJ, WebStorm, PyCharm, etc)
    ['.idea', 'skills'],
    // Zed AI
    ['.zed', 'skills'],
    // Void Editor
    ['.void', 'skills'],
    // Melty
    ['.melty', 'skills'],
    // Amp (Sourcegraph)
    ['.amp', 'skills'],
    // Command Code
    ['.commandcode', 'skills'],
  ];

  for (const [dir, sub] of checks) {
    if (fs.existsSync(path.join(cwd, dir))) {
      return path.join(cwd, dir, sub, SKILL_NAME);
    }
  }

  // No agent detected — fallback to .codex in cwd
  return path.join(cwd, '.codex', 'skills', SKILL_NAME);
}

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
const label = GLOBAL ? '(global)' : '(project)';

console.log(`\nABIDEMI Illustrations — installing ${label}`);
console.log(`Target: ${target}\n`);

copyDir(SOURCE, target);

console.log(`✓ Installed successfully.\n`);
console.log(`Use the skill in your agent:\n`);
console.log(`  Use $abidemi-illustrations to illustrate "[your concept]"\n`);
console.log(`Docs: https://github.com/Bigdrops/ABIDEMI-ILLUSTRATIONS\n`);
