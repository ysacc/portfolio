import test from 'node:test';
import assert from 'node:assert/strict';
import { getPomodoroStats, getTaskStats, validateEnvironment } from '../src/lib/focus.ts';

test('validateEnvironment detects missing variables', () => {
  const result = validateEnvironment({});
  assert.equal(result.isValid, false);
  assert.deepEqual(result.missing, ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN']);
});

test('task stats calculate completion rate', () => {
  const stats = getTaskStats([
    { id: '1', title: 'A', description: '', status: 'completed', priority: 'low', dueDate: '', dueTime: '', createdAt: '', updatedAt: '' },
    { id: '2', title: 'B', description: '', status: 'pending', priority: 'medium', dueDate: '', dueTime: '', createdAt: '', updatedAt: '' },
  ]);
  assert.equal(stats.completed, 1);
  assert.equal(stats.pending, 1);
  assert.equal(stats.rate, 50);
});

test('pomodoro stats count focus minutes for completed sessions', () => {
  const stats = getPomodoroStats([
    { id: '1', type: 'work', durationMinutes: 25, startedAt: '', completedAt: new Date().toISOString(), status: 'completed' },
    { id: '2', type: 'short-break', durationMinutes: 5, startedAt: '', completedAt: new Date().toISOString(), status: 'completed' },
  ]);
  assert.equal(stats.completedToday, 2);
  assert.equal(stats.focusMinutes, 25);
});
