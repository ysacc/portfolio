import { spawn } from 'node:child_process';

const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', '3100'], {
  stdio: 'inherit', env: { ...process.env, PORTFOLIO_QA: '1' },
});
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.kill(signal));
server.on('exit', code => process.exit(code ?? 1));
