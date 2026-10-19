import { spawnSync } from 'node:child_process';

const result = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build', '--webpack'], {
  stdio: 'inherit', env: { ...process.env, PORTFOLIO_QA: '1' },
});
process.exit(result.status ?? 1);
