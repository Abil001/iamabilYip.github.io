// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.getElementById('meal-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const mealName = document.getElementById('meal-name').value;
        const mealCalories = document.getElementById('meal-calories').value;
        document.getElementById('meal-feedback').textContent = `${mealName} with ${mealCalories} calories logged successfully.`;
        e.target.reset();
    });

    document.getElementById('exercise-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const exerciseName = document.getElementById('exercise-name').value;
        const exerciseDuration = document.getElementById('exercise-duration').value;
        document.getElementById('exercise-feedback').textContent = `${exerciseName} for ${exerciseDuration} minutes tracked successfully.`;
        e.target.reset();
    });

    document.getElementById('food-preference-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const dietaryPreferences = document.getElementById('dietary-preferences').value;
        const allergies = document.getElementById('allergies').value;
        const favoriteFoods = document.getElementById('favorite-foods').value;
        const recommendations = `Recommendations for ${dietaryPreferences} diet with allergies to ${allergies}. Favorite foods include ${favoriteFoods}.`;
        document.getElementById('food-recommendations').textContent = recommendations;
        e.target.reset();
    });
});
