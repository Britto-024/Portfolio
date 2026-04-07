const { execSync } = require('child_process');
try {
  const result = execSync('npx vercel whoami', { encoding: 'utf-8' });
  console.log('SUCCESS:', result);
} catch (error) {
  console.error('ERROR:', error.message);
  if (error.stdout) console.log('STDOUT:', error.stdout);
  if (error.stderr) console.error('STDERR:', error.stderr);
}
