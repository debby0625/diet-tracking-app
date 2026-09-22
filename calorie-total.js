function calculateDailyCalorieTotal(meals, date) {
  return meals
    .filter((meal) => meal.date === date)
    .reduce((total, meal) => total + Number(meal.calories), 0);
}

if (typeof module !== 'undefined') {
  module.exports = { calculateDailyCalorieTotal };
}
