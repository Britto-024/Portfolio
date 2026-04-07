const { execSync } = require('child_process');
const fs = require('fs');

try {
  fs.writeFileSync('vercel-output.txt', 'STARTING\n');
  const result = execSync('vercel.cmd --prod --yes', { encoding: 'utf-8', stdio: 'pipe' });
  fs.writeFileSync('vercel-output.txt', 'SUCCESS:\n' + result + '\n', { flag: 'a' });
} catch (error) {
  let errLog = 'ERROR: ' + error.message + '\n';
  if (error.stdout) errLog += 'STDOUT:\n' + error.stdout + '\n';
  if (error.stderr) errLog += 'STDERR:\n' + error.stderr + '\n';
  fs.writeFileSync('vercel-output.txt', errLog);
}
