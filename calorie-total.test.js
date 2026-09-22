const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateDailyCalorieTotal } = require('./calorie-total');

test('sums all meal records for the selected date', () => {
  const meals = [
    { date: '2026-09-22', calories: '450' },
    { date: '2026-09-22', calories: '725' },
    { date: '2026-09-21', calories: '900' },
  ];

  assert.equal(calculateDailyCalorieTotal(meals, '2026-09-22'), 1175);
});

test('returns zero when no meals match the selected date', () => {
  const meals = [{ date: '2026-09-21', calories: '900' }];

  assert.equal(calculateDailyCalorieTotal(meals, '2026-09-22'), 0);
});
