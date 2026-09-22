const meals = [];
const form = document.querySelector('#meal-form');
const mealDate = document.querySelector('#meal-date');
const mealList = document.querySelector('#meal-list');
const dailyTotal = document.querySelector('#daily-total');

mealDate.value = new Date().toISOString().slice(0, 10);

function render() {
  const selectedDate = mealDate.value;
  const visibleMeals = meals.filter((meal) => meal.date === selectedDate);
  mealList.innerHTML = visibleMeals.map((meal) =>
    `<li><span>${meal.mealType}: ${meal.foodName} (${meal.servingAmount})</span><strong>${meal.calories} kcal</strong></li>`
  ).join('');
  dailyTotal.textContent = calculateDailyCalorieTotal(meals, selectedDate);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const meal = {
    foodName: document.querySelector('#food-name').value.trim(),
    mealType: document.querySelector('#meal-type').value,
    servingAmount: document.querySelector('#serving-amount').value.trim(),
    calories: document.querySelector('#calories').value,
    date: mealDate.value,
  };
  meals.push(meal);
  form.reset();
  mealDate.value = meal.date;
  render();
});

mealDate.addEventListener('change', render);
render();
