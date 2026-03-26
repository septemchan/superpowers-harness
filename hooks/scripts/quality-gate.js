const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { fileExists, readStdin, log, respond } = require('./lib/utils');

try {
  const input = readStdin();
  const filePath = input?.tool_input?.file_path || input?.tool_input?.path || '';
  if (!filePath) process.exit(0);

  const ext = path.extname(filePath).toLowerCase();
  const cwd = process.cwd();

  // .claude/ markdown files → suggest prompt-audit
  if (filePath.includes('.claude') && ext === '.md') {
    respond('Edited .claude/ file. Consider running prompt-audit to check quality.');
    process.exit(0);
  }

  // Code files → run file-level linter
  const codeExts = ['.ts', '.tsx', '.js', '.jsx', '.py', '.go'];
  if (!codeExts.includes(ext)) process.exit(0);

  // Detect available linter
  if (fileExists(path.join(cwd, 'biome.json'))) {
    const r = spawnSync('npx', ['biome', 'check', filePath], { cwd, timeout: 10000, encoding: 'utf8' });
    if (r.status !== 0 && r.stderr) respond(`Biome: ${r.stderr.slice(0, 500)}`);
  } else if (fs.readdirSync(cwd).some(f => f.startsWith('.eslintrc') || f.startsWith('eslint.config'))) {
    const r = spawnSync('npx', ['eslint', filePath], { cwd, timeout: 10000, encoding: 'utf8' });
    if (r.status !== 0 && r.stdout) respond(`ESLint: ${r.stdout.slice(0, 500)}`);
  } else if (ext === '.py') {
    const r = spawnSync('ruff', ['check', filePath], { cwd, timeout: 10000, encoding: 'utf8' });
    if (r.status !== 0 && r.stdout) respond(`Ruff: ${r.stdout.slice(0, 500)}`);
  }
} catch (e) {
  log(`quality-gate error: ${e.message}`);
}
process.exit(0);
