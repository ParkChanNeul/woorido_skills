#!/usr/bin/env node

/**
 * WooriDo Skills CLI
 *
 * Usage:
 *   npx woorido-skills install
 *   npx woorido-skills uninstall
 *   npx woorido-skills list
 */

const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = fs.existsSync(path.join(__dirname, 'templates'))
  ? path.join(__dirname, 'templates')
  : path.resolve(__dirname, '..', 'templates');
const TARGET_DIR = process.cwd();

const colors = {
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  yellow: (text) => `\x1b[33m${text}\x1b[0m`,
  blue: (text) => `\x1b[34m${text}\x1b[0m`,
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  dim: (text) => `\x1b[2m${text}\x1b[0m`,
};

function copyRecursive(src, dest, dryRun = false) {
  const files = [];

  function walk(srcPath, destPath) {
    const entries = fs.readdirSync(srcPath, { withFileTypes: true });

    for (const entry of entries) {
      const srcFile = path.join(srcPath, entry.name);
      const destFile = path.join(destPath, entry.name);

      if (entry.isDirectory()) {
        if (!dryRun && !fs.existsSync(destFile)) {
          fs.mkdirSync(destFile, { recursive: true });
        }
        walk(srcFile, destFile);
      } else {
        files.push({
          src: srcFile,
          dest: destFile,
          relativeDest: path.relative(TARGET_DIR, destFile),
        });

        if (!dryRun) {
          const destDir = path.dirname(destFile);
          if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
          }
          fs.copyFileSync(srcFile, destFile);
        }
      }
    }
  }

  walk(src, dest);
  return files;
}

function install(options = {}) {
  const { dryRun = false } = options;

  console.log();
  console.log(colors.blue('🚀 WooriDo Skills Installer'));
  console.log();

  if (dryRun) {
    console.log(colors.yellow('📋 Dry run mode - no files will be created'));
    console.log();
  }

  const files = copyRecursive(TEMPLATES_DIR, TARGET_DIR, dryRun);

  console.log(colors.dim('Installing files:'));
  console.log();

  for (const file of files) {
    console.log(`  ${colors.green('✔')} ${file.relativeDest}`);
  }

  console.log();
  console.log(colors.green(`✨ Done! ${files.length} files installed.`));
  console.log();
  console.log(colors.dim('Installed:'));
  console.log(colors.dim('  - .woorido/ (Agentic Framework Core + Agents + Hooks + Scripts)'));
  console.log(colors.dim('  - .claude/skills/woorido/ (active platform skill)'));
  console.log(colors.dim('  - .claude/skills/woorido-legacy/ (migration skill)'));
  console.log();
  console.log(colors.blue('Usage:'));
  console.log('  PDCA:        /pdca-plan, /pdca-analyze, /pdca-report');
  console.log('  QA:          /quality-check, /zero-script-qa');
  console.log('  Components:  /component Button, /api-hook challenge');
  console.log('  Active:      Go + PostgreSQL modular monolith');
  console.log('  Legacy:      See .claude/skills/woorido-legacy and .agent/workflows/legacy');
  console.log('  Check:       npx woorido-skills check');
  console.log();
}

function uninstall(options = {}) {
  const { dryRun = false } = options;

  console.log();
  console.log(colors.blue('🗑️  WooriDo Skills Uninstaller'));
  console.log();

  if (dryRun) {
    console.log(colors.yellow('📋 Dry run mode - no files will be deleted'));
    console.log();
  }

  const pathsToDelete = [
    path.join(TARGET_DIR, '.claude', 'skills', 'woorido'),
    path.join(TARGET_DIR, '.claude', 'skills', 'woorido-legacy'),
    path.join(TARGET_DIR, '.agent', 'workflows'),
    path.join(TARGET_DIR, '.woorido'),
    path.join(TARGET_DIR, 'docs', 'templates'),
  ];

  let deletedCount = 0;

  for (const targetPath of pathsToDelete) {
    if (fs.existsSync(targetPath)) {
      console.log(`  ${colors.red('✖')} Removing ${path.relative(TARGET_DIR, targetPath)}`);
      if (!dryRun) {
        fs.rmSync(targetPath, { recursive: true, force: true });
      }
      deletedCount++;
    } else {
      console.log(`  ${colors.dim('○')} ${path.relative(TARGET_DIR, targetPath)} (not found)`);
    }
  }

  console.log();
  if (deletedCount > 0) {
    console.log(colors.green(`✨ Done! Removed ${deletedCount} directories.`));
  } else {
    console.log(colors.yellow('No WooriDo skills found to uninstall.'));
  }
  console.log();
}

function list() {
  console.log();
  console.log(colors.blue('📦 WooriDo Skills'));
  console.log();

  console.log(colors.dim('Skills:'));
  console.log('  .claude/skills/woorido/SKILL.md        (woorido-platform)');
  console.log('  .claude/skills/woorido-legacy/SKILL.md (migration only)');
  console.log();

  console.log(colors.dim('Agentic Framework:'));
  console.log('  .woorido/_core/persona.md');
  console.log('  .woorido/references/active/*.md');
  console.log('  .woorido/references/legacy/*.md');
  console.log();

  console.log(colors.dim('Default Workflows:'));
  const workflows = [
    '/component   - Create WDS React component',
    '/api-hook    - Create React Query hook',
    '/form        - Create react-hook-form + zod form',
    '/page        - Create page component',
    '/test        - Create Vitest tests',
    '/pdca-plan   - Create active design plan',
    '/pdca-analyze - Analyze against active canonical',
    '/pdca-report - Create completion report',
  ];

  for (const wf of workflows) {
    console.log(`  ${wf}`);
  }

  console.log();
  console.log(colors.dim('Legacy workflows are kept under .agent/workflows/legacy/'));
  console.log();
}

function check() {
  console.log();
  console.log(colors.blue('🔍 WooriDo Skills Installation Check'));
  console.log();

  const checks = [
    { name: '.woorido/', path: path.join(TARGET_DIR, '.woorido') },
    { name: '.woorido/agents/', path: path.join(TARGET_DIR, '.woorido', 'agents') },
    { name: '.woorido/hooks/', path: path.join(TARGET_DIR, '.woorido', 'hooks') },
    { name: '.woorido/scripts/', path: path.join(TARGET_DIR, '.woorido', 'scripts') },
    { name: '.claude/skills/woorido/', path: path.join(TARGET_DIR, '.claude', 'skills', 'woorido') },
    { name: '.claude/skills/woorido-legacy/', path: path.join(TARGET_DIR, '.claude', 'skills', 'woorido-legacy') },
    { name: '.agent/workflows/', path: path.join(TARGET_DIR, '.agent', 'workflows') },
  ];

  let passed = 0;
  for (const check of checks) {
    const exists = fs.existsSync(check.path);
    if (exists) {
      console.log(`  ${colors.green('✔')} ${check.name}`);
      passed++;
    } else {
      console.log(`  ${colors.red('✖')} ${check.name} (missing)`);
    }
  }

  console.log();
  if (passed === checks.length) {
    console.log(colors.green(`✨ All ${passed}/${checks.length} components installed!`));
  } else {
    console.log(colors.yellow(`⚠️ ${passed}/${checks.length} components found. Run 'install' to complete.`));
  }
  console.log();
}

function help() {
  console.log();
  console.log(colors.blue('WooriDo Skills CLI v2.0.0'));
  console.log();
  console.log('Commands:');
  console.log('  install     Install skills to current directory');
  console.log('  uninstall   Remove installed skills');
  console.log('  list        List available skills and workflows');
  console.log('  check       Verify installation status');
  console.log('  help        Show this help message');
  console.log();
  console.log('Options:');
  console.log('  --dry-run   Show what would happen without making changes');
  console.log();
  console.log('Examples:');
  console.log('  npx woorido-skills install');
  console.log('  npx woorido-skills check');
  console.log('  npx woorido-skills list');
  console.log();
}

const args = process.argv.slice(2);
const command = args[0];
const flags = args.slice(1);

const options = {
  dryRun: flags.includes('--dry-run'),
};

switch (command) {
  case 'install':
    install(options);
    break;
  case 'uninstall':
    uninstall(options);
    break;
  case 'list':
    list();
    break;
  case 'check':
    check();
    break;
  case 'help':
  case '--help':
  case '-h':
    help();
    break;
  case 'version':
  case '--version':
  case '-v':
    console.log('2.0.0');
    break;
  default:
    if (command) {
      console.log(colors.red(`Unknown command: ${command}`));
    }
    help();
}
